# Llm Migration Reference (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Step 3

**Layer Types:**

- `"layer"` - pixel/image layers
- `"text_layer"` - layers containing text
- `"adjustment_layer"` - adjustment layers that preserve source pixels
- `"smart_object_layer"` - smart object layers
- `"solid_color_layer"` - solid color fill layers
- `"group_layer"` - groups of layers (V1 `"layerSection"` maps to V2 `"group_layer"`). Starting a brand-new document with a group layer is still unavailable and is planned for a later release. For **editing an existing document**, adding a layer inside a group is supported by setting placement `type: "into"` and supplying `referenceLayer`, such as `"referenceLayer": { "name": "Group 1" }`. Do not send a `children` array in edit operations; use `into` placement plus `referenceLayer`.
- `"background_layer"` - background layer (V1 `"backgroundLayer"` maps to V2 `"background_layer"`). Select it with `name: "Background"` or the manifest-provided `id`; do not reuse V1's `-1`, while flat documents without other layers report `id: 0`. Add, edit, delete, and convert-to-layer are supported, but move is not. **Restricted fields**: `transform`, `transformMode`, `pixelMask`, `protection`, `blendOptions`. Apply one of those fields only after promoting the background into a regular layer with `convertToLayer: true`; later details are in **Background Layer Specifics**.

**Placement Options:**

```json
{
  "placement": {
    "type": "top"  // or "bottom", "above", "below", "into"
    // For relative placement:
    "referenceLayer": {
      "name": "Layer Name"  // or "id": 123
    }
  }
}
```

**V1 `parentLayer` Field:**
In V1, layer operations accepted `parentLayer: {id: N}` or `parentLayer: {name: "..."}` to identify the group/layer ownership target. That field is valid in V1 and should not be treated as a no-op. For V2 payloads, replace `parentLayer` with placement data.

| V1 operation | V2 equivalent |
| --- | --- |
| `add` + `parentLayer: {id: N}` | `operation.type: "add"` + `placement: {type: "into", referenceLayer: {id: N}}` |
| `move` + `parentLayer: {id: N}` | `operation.type: "move"` + `placement: {type: "into", referenceLayer: {id: N}}` |
| `edit` + `parentLayer: {id: N}` | `operation.type: "edit"` - drop `parentLayer` entirely because V2 targets by name/id independent of parent |

**Layer processing order (breaking change):** V1 evaluated the array from the bottom upward, so the last item ran first. V2 runs from the top downward, with the first item handled first. Whenever `above`, `below`, or `into` placement names a `referenceLayer`, that referenced layer must already exist or appear earlier in the array than the referring layer.

**Layer Property Locations (V2):**

| Property | V1 | V2 (most layer types) | V2 (`smart_object_layer`) |
| --- | --- | --- | --- |
| Opacity | `blendOptions.opacity` | top-level `opacity` | `blendOptions.opacity` |
| Blend mode | `blendOptions.blendMode` | top-level `blendMode` | `blendOptions.blendMode` |
| Visibility | `visible` | `isVisible` | `isVisible` |
| Lock | `locked: true/false` | `protection: ["all"]` / `["none"]` | `protection: ["all"]` / `["none"]` |

For `smart_object_layer`, keep `opacity` and `blendMode` inside `blendOptions`. Other V2 layer categories, including image, text, adjustment, solid color, group, and background layers, place those values at the top level.

**Artboard root visibility behavior in V1:** For V1 `documentOperations`, applying `visible: false` to an **artboard root layer** by `id` or `name` does not remove the artboard pixels from the rendered result. The returned image still uses the original full-canvas dimensions. V2 `create-composite` instead honors artboard visibility, omits hidden artboards, and sizes the output to the visible artboard content. A migration that depended on hidden artboard roots disappearing from output is encountering an intended V2 behavior change. Pixel diff tools may report a size mismatch such as `2930Ã—4509` in V1 versus `2930Ã—960` in V2; that mismatch is normal.

**Layer Transforms (V1 to V2):**

- V1 stores sizing on the layer as `bounds: {left, top, width, height}`
- V2 requires `transformMode: "custom"` together with `transform: {offset: {horizontal, vertical}, dimension: {width, height}}`
- Additional V2 transform keys include `angle` for degree rotation, `skew: {horizontal, vertical}`, and `anchor: {horizontal, vertical}`
- `transformMode` accepts `"none"`, `"custom"`, `"fit"`, and `"fill"`; adjustment layers cannot use it.

**Transform mode rules (violation returns 400):**

- **`fit` / `fill`**: omit the `transform` object. These modes scale the layer to fit or fill the canvas and place it at `(0, 0)`. To move it afterward, make a **second request** for that same layer using `transformMode: "custom"` and the wanted offset.
- **`custom`**: choose this mode when using any combination of `dimension`, `angle`, `skew`, `anchor`, or `offset`.
- **`none`**: performs no scale or position change; do not include a `transform` object.

**Two-pass execution for `transformMode: "custom"` with dimension / angle / skew:**

If `transform` contains `dimension`, `angle`, or `skew`, pie-worker uses two passes:

- **Pass 1**: `dimension` + `angle` + `skew` + `anchor` (when supplied) are combined into one geometry transform. `anchor` sets the pivot point; without it, PIE uses `(0, 0)`.
- **Pass 2**: `setOffset` repositions the layer with this precedence:
  1. **`offset` provided**: move the layer to the requested absolute location (`targetOffset - postTransformBounds`)
  2. **`horizontalAlign` / `verticalAlign` provided**: move the layer to the computed alignment position
  3. **Fallback (neither offset nor alignment)**: restore the original `x, y` (`priorBounds - postTransformBounds`) so geometry-only edits do not cause drift and V1 parity is kept

> **Geometry-only case** (dimension/angle/skew without offset or alignment): the fallback path preserves the starting position. This mirrors V1, where dimension-only edits still called `setOffset` using original coordinates.

> **offset + alignment both provided**: `offset` takes precedence and alignment is skipped.

**Single-pass case**: when `transform` has only `offset` and/or `anchor`, with no `dimension`, `angle`, or `skew`, one `transform()` call is sufficient and no follow-up pass runs.

**Layer Alignment (V1 to V2):**

- V1: layer-level `horizontalAlign`, `verticalAlign`
- V2: placement-level `horizontalAlignment`, `verticalAlignment` inside `placement: {type: "custom", horizontalAlignment: "center", verticalAlignment: "center"}` for add/move operations only

**Smart Object Specifics:**

- Layer type: V1 `"smartObject"` maps to V2 `"smart_object_layer"`
- Source: V1 `input: {href, storage}` maps to V2 `smartObject.smartObjectFile.source.url`, nested further down
- Linked flag: V1 `smartObject.linked` maps to V2 `smartObject.isLinked`
- SVG and AI are added source formats in V2; V1 accepted PSD, JPEG, PNG, and PDF
- **Supported source file types:** PSD (`image/vnd.adobe.photoshop`), JPEG (`image/jpeg`), PNG (`image/png`), TIFF (`image/tiff`), SVG (`image/svg+xml`), AI (`application/illustrator`), PDF (`application/pdf`)
- **AI file requirement:** AI input works only when Adobe Illustrator saved it with **Create PDF Compatible File** enabled.
- **Resize with linked smart objects:** A width-only resize with no layer edits rasterizes ALL linked SOs into pixel layers. When the same request edits/adds one linked SO and resizes, that edited SO remains linked while every other linked SO is rasterized.
- Replacing a linked SO with an embedded SO is not available in V2.
- **SO canvas content scaling:** `transformMode` belongs to the document-level layer operation and does not determine how replacement pixels fit onto the SO canvas. Only `transform.dimension` controls SO canvas scaling: omit it for proportional scaling with aspect ratio preserved, or provide it to stretch to exact dimensions. For cutout or transparent-background assets, use `transformMode: "fit"` or `"fill"` without `transform.dimension`.

**Adjustment Layer Specifics:**

- Layer type: V1 `"adjustmentLayer"` maps to V2 `"adjustment_layer"`
- V2 requires the `adjustments.type` discriminant, which V1 did not have; leaving it out makes the request fail

| V1 implicit key | V2 `adjustments.type` | Payload key |
| --- | --- | --- |
| `brightnessContrast` | `"brightness_contrast"` | `brightnessContrast` |
| `exposure` | `"exposure"` | `exposure` |
| `hueSaturation` | `"hue_saturation"` | `hueSaturation` |
| `colorBalance` | `"color_balance"` | `colorBalance` |
| (not in V1) | `"curves"` | - |
| (not in V1) | `"levels"` | - |
| (not in V1) | `"gradient_map_custom_stops"` | - |

- **Exposure payload rename:** In the `exposure` payload, V1's amount field `exposure` becomes `exposureValue` in V2, with range -20 to 20.
- **Hue/Saturation restructure:** V1 `hueSaturation.channels[]` using `channel: "master"` becomes V2 `hueSaturation.hueSaturationAdjustments[]`. For master, omit `localRange` to affect the full image. For a specific color range, add `localRange` with `channelId` set to `REDS`, `YELLOWS`, `GREENS`, `CYANS`, `BLUES`, or `MAGENTAS`; this applies only when `colorize: false`.
- Adjustment layers ignore `transformMode`.
- Accepted numeric ranges: `brightnessContrast.brightness`/`contrast` (-150 to 150); `exposureValue` (-20 to 20), `offset` (-0.5 to 0.5), `gammaCorrection` (0.01 to 9.99); `hue` (-180 to 180, or 0-360 when `colorize: true`); `saturation`/`lightness` (-100 to 100, or 0-100 when `colorize: true`); color balance levels (-100 to 100)

**Text Layer Specifics:**

- Layer type: V1 `"textLayer"` maps to V2 `"text_layer"`
- **Character style ranges changed by one index:**
  - V1: `to` is a **length**; `{from: 0, to: 5}` spans 5 characters, indices 0-4
  - V2: `apply.to` is the **inclusive final index**; `{apply: {from: 0, to: 4}}` spans indices 0-4 and produces the same result
  - **Migration rule: subtract 1 from V1's `to` value**. Paragraph style ranges follow the same rule.
  - **characterStyles with no range (implicit full-string in V1):** When a V1 `characterStyle` lacks `from`/`to`, V1 applies it across all content. In V2, `apply` may be omitted for the same whole-text result. You can write `apply: {from: 0, to: len(text.content) - 1}`, but V2 does not require it.
- Character style structure: V1 direct properties move under a V2 `characterStyle` object.
- Font name: V1 top-level `fontName` moves to V2 `characterStyle.font.postScriptName` inside `characterStyle.font`.
- Text bounds: V1 layer-level `bounds: {left, top, width, height}` becomes V2 `text.frame: {type: "area", bounds: {top, left, right, bottom}}`, where `right = left + width` and `bottom = top + height`.
- Point frames are also supported in V2: `text.frame: {type: "point", origin: {x, y}}`.
- **V1 `text.type: "point"` with layer-level `bounds`:** Convert `bounds.left`/`bounds.top` into `text.frame: {type: "point", origin: {x: bounds.left, y: bounds.top}}`. Avoid `transform`/`transformMode`, because those scale glyphs rather than place the text.
- **Default when no frame given:** V1 uses an area frame at (0,0,4,4). V2 defaults to a point frame at canvas center. For deterministic placement, always provide `text.frame`.
- `textOrientation` is defined at text level, unlike V1's per-character-style `orientation`.
- Multi-line text: use `\r` line breaks in both versions.
- Font options: V1 `options.fonts` (href+storage) becomes V2 `fontOptions.additionalFonts` (source.url); V1 `options.globalFont` becomes V2 `fontOptions.defaultFontPostScriptName`; V1 `options.manageMissingFonts: "useDefault"` becomes V2 `fontOptions.missingFontStrategy: "use_default"`; `"fail"` stays unchanged.

> **TRAP - fontOptions placement differs by endpoint:**
>
> - `documentOperations` to `/v2/create-composite`: place `fontOptions` at top level beside `edits`, `image`, and `outputs`; do NOT put it under `edits`.
> - `/pie/psdService/text` to `/v2/execute-actions`: keep `fontOptions` inside `options` as `options.fontOptions`, since that setting belongs to `ActionsOptions`.

**Background Layer Specifics:**

- Layer type: V1 `"backgroundLayer"` maps to V2 `"background_layer"`
- V1 addressed the background with `id: -1`; V2 returns the real PIE layer ID in the manifest. If a document contains only a flat background and no layers, the manifest reports `id: 0`.
- In V2, target the background layer by `name: "Background"` or by the manifest response `id`.
- The manifest includes `background.canConvertToLayer` (boolean), which reports whether `convertToLayer: true` can promote the background to a regular layer.
- **Placement:** Background layers are fixed at the bottom of the stack. Omit `placement` from a `background_layer` add operation because the value is ignored.

**Allowed direct edits** (no conversion needed):

- `isVisible` - switch layer visibility on or off
- `image.source` - swap the background pixels, using the same `image` block shape as other layer types

**Restricted fields** - setting these directly on `background_layer` returns an error:
`transform`, `transformMode`, `pixelMask`, `protection`, `blendOptions`

**Mutually exclusive within a single entry:** `image` for pixel replacement and `convertToLayer: true` cannot share one layer entry. Put them in separate `layers` array entries; see the chained workflow below.

**Convert to regular layer:**
Promote the background to a regular `layer` with `convertToLayer: true`. Add `convertedLayerName` to assign the name immediately, allowing later `layers` entries in the **same API call** to target that converted layer by name:

```json
{
  "type": "background_layer",
  "name": "Background",
  "operation": { "type": "edit" },
  "convertToLayer": true,
  "convertedLayerName": "Converted Background"
}
```

After conversion, the manifest shows the layer as `type: "layer"` with the assigned name. Operations that had been restricted, including `transform`, `protection`, and `blendOptions`, then become valid.

**Chained workflow - pixel replace + convert + transform in one API call:**

Use multiple objects in the `layers` array; they run sequentially:

```json
"layers": [
  {
    "type": "background_layer",
    "name": "Background",
    "operation": { "type": "edit" },
    "image": { "source": { "url": "<NEW_BACKGROUND_IMAGE>" } }
  },
  {
    "type": "background_layer",
    "name": "Background",
    "operation": { "type": "edit" },
    "convertToLayer": true,
    "convertedLayerName": "Converted Background"
  },
  {
    "type": "layer",
    "name": "Converted Background",
    "operation": { "type": "edit" },
    "transformMode": "custom",
    "transform": { "angle": 15.0, "skew": { "horizontal": 0.0, "vertical": 0.0 } }
  }
]
```

Item 1 swaps the background pixels.
Item 2 promotes that background into a named regular layer.
Item 3 transforms the converted layer, targeting the `name: "Converted Background"` assigned by item 2.

> **V1 to V2 background layer migration checklist:**
>
> - Change `type: "backgroundLayer"` to `type: "background_layer"`
> - Change `id: -1` to the manifest `id`, or use `name: "Background"`
> - Change `visible` to `isVisible`
> - Remove `locked` / `protection` from background_layer entries, then add protection after conversion
> - Replace `add: {}` with `operation: { "type": "add" }` and do not include `placement`
> - Replace `edit: {}` with `operation: { "type": "edit" }`
> - Replace `input.href` with `image.source.url`
> - To use `transform`, `protection`, or `blendOptions`, first add `convertToLayer: true` with `convertedLayerName`, then address the converted layer by name in a later entry

### C. Migrating actions

**V1 Endpoints Consolidated:**

- `/pie/psdService/photoshopActions`
- `/pie/psdService/actionJSON`
- `/pie/psdService/productCrop`
- `/pie/psdService/depthBlur`
- `/pie/psdService/splitView`
- `/pie/psdService/sideBySide`

**V2 Endpoint:** `/v2/execute-actions`

**Key Change:** The convenience API action files are available for use.

**.atn file pattern:**

V1:

```json
{
  "options": {
    "actions": [{ "href": "<ACTION_URL>", "storage": "external" }]
  }
}
```

V2:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "<ACTION_URL>"
        }
      }
    ]
  }
}
```

**Inline ActionJSON pattern:**

V1:

```json
{
  "options": {
    "actionJSON": [
      {"_obj": "convertMode", "to": {...}}
    ]
  }
}
```

V2:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"convertMode\",\"to\":{...}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```

**Important:** In V2, provide ActionJSON as stringified JSON.

**Multiple Actions:**
V2 can run as many as 10 actions, executing them in order:

```json
{
  "options": {
    "actions": [
      { "source": { "url": "<ACTION_1_URL>" } },
      { "source": { "url": "<ACTION_2_URL>" } },
      { "source": { "url": "<ACTION_3_URL>" } }
    ]
  }
}
```

**Action Name Selection (V2 New Feature):**
To run one named action inside an `.atn` file rather than the whole file, set optional `actionName`:

```json
{
  "options": {
    "actions": [
      {
        "source": { "url": "<ACTION_FILE_URL>" },
        "actionName": "Vignette Effect"
      }
    ]
  }
}
```

Leaving out `actionName` runs every action in the file. A single request may combine targeted actions with full-file execution. This option is most useful for `.atn` files containing several named actions; inline actionJSON already specifies the exact operations to execute.

**Additional Resources:**

```json
{
  "options": {
    "actions": [...],
    "additionalContents": [  // Max 25 (images/compositing resources)
      {"source": {"url": "<IMAGE_URL>"}}
    ],
    "brushes": [           // Max 10 - must use external URLs (binary, no inline)
      {"source": {"url": "<BRUSH_URL>"}}
    ],
    "patterns": [          // Max 10 - must use external URLs (binary, no inline)
      {"source": {"url": "<PATTERN_URL>"}}
    ],
    "fontOptions": {
      "additionalFonts": [ // Max 10 - must use external URLs (binary, no inline)
        {"source": {"url": "<FONT_URL>"}}
      ],
      "missingFontStrategy": "use_default"
    }
  }
}
```

**Additional Contents Placeholder:**
In ActionJSON or UXP scripts, refer to additional assets as `__ADDITIONAL_CONTENTS_PATH_0__`, `__ADDITIONAL_CONTENTS_PATH_1__`, and so on, where the 0-based index matches the item position in `additionalContents`. Binary assets such as brushes, patterns, and fonts require external URLs; inline content is not supported for those resource types.

V1 ActionJSON used service-dependent positional placeholders for extra images:

- `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_${index}` (actionJSON/execute-actions workflows)
- `PEGASUS_ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_${index}` (Pegasus/Lightroom action workflows)

Both convert to `__ADDITIONAL_CONTENTS_PATH_${index}__` in V2, for example index 0 to `__ADDITIONAL_CONTENTS_PATH_0__`. The older placeholder forms still work for backward compatibility, but `__ADDITIONAL_CONTENTS_PATH_${index}__` is the preferred V2 spelling.

### Convenience API notes

**Product Crop:**

- **Action count**: 8 action steps
- **Extra images**: No
- **Primary parameter**: Padding, default 50 pixels and customizable
- **Effect**: auto cutout, trim, padding, and flatten
- **Customization point**: adjust padding values by editing the canvasSize step, the 5th action
- **Use case**: e-commerce product isolation with consistent padding
