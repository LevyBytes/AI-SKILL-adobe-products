# Create Composite V1 Reference

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this page as the single V1-to-V2 migration reference for every Photoshop API composite-family endpoint that now lands on `/v2/create-composite`. The material brings together field-level mappings for document creation, document operations, each layer category, and supported output formats.

For broader context, see [Layer Operations Overview](api-v1-to-v2-4.md).
For focused migration topics, follow the guide links named in that overview.

## 1. V1 endpoint coverage

The four V1 endpoints, plus the informal `smartObjectV2` variant, all migrate to one V2 endpoint:

| V1 Endpoint | V2 Endpoint | Purpose |
| --- | --- | --- |
| `POST /pie/psdService/documentCreate` | `POST /v2/create-composite` | Create new blank PSD documents |
| `POST /pie/psdService/documentOperations` | `POST /v2/create-composite` | Document-level ops + layer manipulation |
| `POST /pie/psdService/renditionCreate` | `POST /v2/create-composite` | Export PSD to JPEG/PNG/PSD/TIFF |
| `POST /pie/psdService/smartObject` | `POST /v2/create-composite` | Smart object operations ## 2. Request envelope ### Input V1 V2 Notes |
| --- | --- | --- |
| `inputs[].href` + `"storage": "external"` | `image.source.url` | Presigned URL |
| `inputs[].href` + `"storage": "acp"` | `image.source.url` | ACP presigned URL |
| `inputs[].href` + `"storage": "adobe"` | `image.source.creativeCloudPath` or `.creativeCloudFileId` | CC storage |
| `inputs[].href` + `"storage": "dropbox"` | `image.source.url` + `destination.storageType: "dropbox"` | On output side |
| `inputs[].href` + `"storage": "azure"` | `image.source.url` + `destination.storageType: "azure"` | On output side |
| `options.document.*` | `image.*` (top-level fields) | Document creation parameters |
| `options.layers[]` | `edits.layers[]` | Layer operations |
| `options.*` (doc-level ops) | `edits.document.*` | Crop, resize, trim |

### Output

| V1 | V2 | Notes |
| --- | --- | --- |
| `outputs[].href` | `outputs[].destination.url` |  |
| `outputs[].storage` | `outputs[].destination.storageType` (Azure/Dropbox only) |  |
| `outputs[].type` | `outputs[].mediaType` |  |

### V1 vs V2 envelope example

**V1 (`documentOperations`):**

```json
{
  "inputs": [{ "href": "<SIGNED_GET_URL>", "storage": "external" }],
  "options": {
    "layers": [
      {
        "type": "textLayer",
        "name": "Title",
        "add": { "insertTop": true },
        "text": { "content": "Hello" }
      }
    ]
  },
  "outputs": [
    { "href": "<SIGNED_POST_URL>", "storage": "external", "type": "image/vnd.adobe.photoshop" }
  ]
}
```

**V2 (`/v2/create-composite`):**

```json
{
  "image": { "source": { "url": "<SIGNED_GET_URL>" } },
  "edits": {
    "layers": [
      {
        "type": "text_layer",
        "name": "Title",
        "operation": { "type": "add", "placement": { "type": "top" } },
        "text": { "content": "Hello" }
      }
    ]
  },
  "outputs": [
    { "destination": { "url": "<SIGNED_POST_URL>" }, "mediaType": "image/vnd.adobe.photoshop" }
  ]
}
```

### Layer processing order

**Breaking change:** V1 and V2 traverse layer arrays in opposite directions. **V1:** processing starts from the final array item and works **bottom-up**. **V2:** processing starts from the first array item and works **top-down**. In V2, when Layer B has `placement.type: "above"` with `referenceLayer: {name: "Layer A"}`, Layer A needs to be earlier in the array than Layer B. V1 used the reverse arrangement, with Layer A later in the array.

## 3. Document creation parameters

V2 moves `documentCreate` `options.document.*` settings into top-level `image.*` fields:

| V1 (`options.document.*`) | V2 (`image.*`) | Notes |
| --- | --- | --- |
| `width` | `width` | 1–32000 px |
| `height` | `height` | 1–32000 px |
| `resolution` (number, e.g. `72`) | `resolution: {"unit": "density_unit", "value": 72}` | Breaking: number → object |
| `fill: "white"` | `fill: "white"` | Preserved string shortcut |
| `fill: "transparent"` | `fill: "transparent"` | Preserved string shortcut |
| `fill: "backgroundColor"` | `fill: "background_color"` | Breaking: spelling changed |
| `fill: "white"` (explicit color) | `fill: {"solidColor": {"rgb": {"red": 255, "green": 255, "blue": 255}}}` | V2 adds object form for custom colors |
| `mode: "greyscale"` | `mode: "grayscale"` | Breaking: spelling fixed |
| `mode: "rgb"` / `"cmyk"` / `"lab"` etc. | Same values | Unchanged |
| `depth: 8` | `depth: 8` | Unchanged (integer) |
| _(not in V1)_ | `pixelScaleFactor` | New: number, min 0.1 |
| _(not in V1)_ | `name` | New: string, max 255 chars |
| _(not in V1)_ | `iccProfile: {"type": "standard", "name": "..."}` | New: standard ICC profiles only |

For custom colors, V2 changes `fill` from a string-only shortcut into an object-capable field. V1 accepted `"white"` as a shortcut string; V2 keeps `"white"` and `"transparent"` as shortcuts, while solid colors need the object syntax. Also keep the enum rename in mind: V1 used `"backgroundColor"`, and V2 expects `"background_color"`.

**V1 (string):**

```json
{ "fill": "white" }
```

**V2 (object form for custom RGB):**

```json
{ "fill": { "solidColor": { "rgb": { "red": 255, "green": 255, "blue": 255 } } } }
```

## 4. Document-level operations

### Resize (`edits.document.imageSize`)

| V1 | V2 | Notes |
| --- | --- | --- |
| `width`, `height` | `width`, `height` | Unchanged |
| `resolution` (number) | `resolution: {"unit": "density_unit", "value": N}` | Breaking: number → object |
| `constrainProportions` | `constrainProportions` | Unchanged |
| _(not in V1)_ | `resample` | New: `nearest_neighbor`, `bilinear`, `bicubic`, `bicubic_smoother`, `bicubic_sharper` |
| _(not in V1)_ | `scaleStyles` | New in V2 |
| _(not in V1)_ | `rasterize` | New in V2 |

### Trim (`edits.document.trim`)

| V1 | V2 | Notes |
| --- | --- | --- |
| `trimType: "transparent_pixels"` | `trimType: "transparent_pixels"` | Supported |
| Trim by color (any color mode) | **Not supported** | Missing feature in V2 |

**Missing V2 features:** Three V1 document operations still lack V2 equivalents: **Canvas size adjustment** (V1 `canvasSize` has no V2 support yet), **Image rotation** (V1 image rotation also has no V2 support yet), and **Trim by color** (V2 does not support the V1 color-based trim modes).

## 5. Layer operation model

### Operation specification

**V1:** The layer entry keeps operation data in separate sibling objects:

```json
{
  "type": "textLayer",
  "name": "My Layer",
  "add": { "insertTop": true },
  "text": { "content": "Hello" }
}
```

**V2:** Unified `operation` object:

```json
{
  "type": "text_layer",
  "name": "My Layer",
  "operation": { "type": "add", "placement": { "type": "top" } },
  "text": { "content": "Hello" }
}
```

### Placement type mapping

| V1 (`add.*`) | V2 (`operation.placement`) |
| --- | --- |
| `insertTop: true` | `{type: "top"}` |
| `insertBottom: true` | `{type: "bottom"}` |
| `insertAbove: {name: "LayerName"}` | `{type: "above", referenceLayer: {name: "LayerName"}}` |
| `insertAbove: {id: 123}` | `{type: "above", referenceLayer: {id: 123}}` |
| `insertBelow: {name: "LayerName"}` | `{type: "below", referenceLayer: {name: "LayerName"}}` |
| `insertBelow: {id: 123}` | `{type: "below", referenceLayer: {id: 123}}` |
| `insertInto: {name: "GroupName"}` | `{type: "into", referenceLayer: {name: "GroupName"}}` |

Some V1 contexts named a placement target with `relativeTo`. V2 names that target `referenceLayer`; treat it as a field rename, not as an alias. Update every relative placement reference accordingly.

## 6. Common layer properties

### Lock / protection

| V1 | V2 | Notes |
| --- | --- | --- |
| `locked: true` | `protection: ["all"]` | Breaking: boolean → array |
| `locked: false` | `protection: ["none"]` |  |
| _(not in V1)_ | `protection: ["transparency"]` | Granular, V2 only |
| _(not in V1)_ | `protection: ["position"]` | V2 only |
| _(not in V1)_ | `protection: ["composite"]` | V2 only |
| _(not in V1)_ | `protection: ["artboard_autonest"]` | V2 only |

### Visibility

| V1 | V2 |
| --- | --- |
| `visible` | `isVisible` |

### Blend options

| V1 | V2 | Notes |
| --- | --- | --- |
| `blendOptions.opacity` | `opacity` (top-level) | Breaking: de-nested |
| `blendOptions.blendMode` | `blendMode` (top-level) | Breaking: de-nested |

**Blend mode enum values** (all 29; V1 and V2 share the same list):
`normal`, `dissolve`, `darken`, `multiply`, `color_burn`, `linear_burn`, `darker_color`,
`lighten`, `screen`, `color_dodge`, `linear_dodge`, `lighter_color`, `overlay`, `soft_light`,
`hard_light`, `vivid_light`, `linear_light`, `pin_light`, `hard_mix`, `difference`, `exclusion`,
`subtract`, `divide`, `hue`, `saturation`, `color`, `luminosity`, `pass_through`

### Pixel layer bounds / transform

| V1 | V2 | Notes |
| --- | --- | --- |
| `bounds: {left, top, width, height}` | `transform: {offset: {horizontal, vertical}, dimension: {width, height}}` | Breaking |
| `bounds.left` | `transform.offset.horizontal` |  |
| `bounds.top` | `transform.offset.vertical` |  |
| `bounds.width` | `transform.dimension.width` |  |
| `bounds.height` | `transform.dimension.height` |  |

### Mask fields

| V1 | V2 | Notes |
| --- | --- | --- |
| `mask.clip: true` | `isClipped: true` (top-level on layer) | Breaking: moved out of mask |
| `mask.linked` | `pixelMask.isLinked` | Renamed + prefix changed |
| `mask.enabled` | `pixelMask.isEnabled` | Renamed + prefix changed |
| `mask.input: {href, storage}` | `pixelMask.source.url` | Breaking: restructured |

### fillToCanvas (missing feature)

**V2 has no `fillToCanvas` support.** That V1 option was available on pixel layers and smart object layers, but V2 does not provide an equivalent field. If a V1 workflow depends on `fillToCanvas: true`, reproduce the scaling and positioning behavior yourself with `transform` properties.

## 7. Per-layer-type reference

> **Every `edits.layers[]` entry must include `type`.** V2 will not infer a layer category. If `type` is omitted, validation fails even for small edits such as visibility or name updates.
>
> Valid types: `"layer"`, `"text_layer"`, `"adjustment_layer"`, `"smart_object_layer"`, `"group_layer"`, `"solid_color_layer"`.
>
> **V1 (no type needed; inferred):** `{"name": "My Layer", "isVisible": false}`
>
> **V2 (type required):** `{"type": "layer", "name": "My Layer", "isVisible": false}`

### 7a. Adjustment layers (`adjustmentLayer` → `adjustment_layer`)

**Type rename:** `"adjustmentLayer"` → `"adjustment_layer"`

**V2 requires `adjustments.type`; V1 had no matching field.** V1 identified the adjustment from the key name, such as `brightnessContrast`. In V2, put the required snake_case value in `adjustments.type`.

**V1:**

```json
{ "adjustments": { "brightnessContrast": { "brightness": 25 } } }
```

**V2:**

```json
{ "adjustments": { "type": "brightness_contrast", "brightnessContrast": { "brightness": 25 } } }
```

**Adjustment type name mapping:**

| V1 key name | V2 `adjustments.type` | Status |
| --- | --- | --- |
| `brightnessContrast` | `brightness_contrast` | Breaking: renamed |
| `exposure` | `exposure` | Unchanged |
| `hueSaturation` | `hue_saturation` | Breaking: renamed |
| `colorBalance` | `color_balance` | Breaking: renamed |
| _(not in V1)_ | `curves` | New in V2 |
| _(not in V1)_ | `gradient_map_custom_stops` | New in V2 |
| _(not in V1)_ | `levels` | New in V2 |

**Field changes within adjustment payloads:**

| Adjustment | V1 field | V2 field | Notes |
| --- | --- | --- | --- |
| Exposure | `exposure.exposure` | `exposure.exposureValue` | Breaking: renamed |
| Hue/Saturation | Master channel only | `localRange.channelId` for per-channel | New in V2 |

### 7b. Background layers

**V2 cannot create or edit background layers (`backgroundLayer`).** The V2 layer create/edit enum for `edits.layers` omits `background_layer`. When a V1 workflow creates or changes the document background layer, substitute a standard pixel layer (`layer`). Manifest responses may still report background layers as `type: "background_layer"`; background-layer response details are covered in [Manifest Response Format](api-manifest-response-migration.md).

### 7c. Solid color layers (`fillLayer` → `solid_color_layer`)

**Type rename:** `"fillLayer"` → `"solid_color_layer"`

| V1 | V2 |
| --- | --- |
| `type: "fillLayer"` | `type: "solid_color_layer"` |
| `fill.solidColor.rgb.red` | `fill.solidColor.rgb.red` (unchanged) |
| `fill.solidColor.rgb.green` | `fill.solidColor.rgb.green` (unchanged) |
| `fill.solidColor.rgb.blue` | `fill.solidColor.rgb.blue` (unchanged) |

> **Note:** Only the layer type name changes. V1 and V2 both use `fill.solidColor.rgb.{red, green, blue}`; keep the required `rgb` wrapper in place.
>
> **V1 and V2 (identical structure):** `{"fill": {"solidColor": {"rgb": {"red": 255, "green": 0, "blue": 0}}}}`
>
> Error when `rgb` wrapper is omitted: `"edits.layers[1].fill.solidColor.rgb: rgb is required"`.

### 7d. Pixel layers (`layer` → `layer`)

**Type name:** Unchanged (`"layer"`)

Main pixel-layer migrations:

- **Bounds:** Move V1 `bounds: {left, top, width, height}` into V2 `transform: {offset: {horizontal, vertical}, dimension: {width, height}}`
- **Mask:** Map `mask.input` to `pixelMask.source.url`, `mask.linked` to `pixelMask.isLinked`, and `mask.enabled` to `pixelMask.isEnabled`
- **Clipping:** Replace `mask.clip: true` with top-level `isClipped: true`
- **fillToCanvas:** V2 does not support this field

### 7e. Group layers (`layerSection` → `group_layer`)

**Type rename:** `"layerSection"` → `"group_layer"`

**V2 does not yet support creating a new document with a group layer; that support is planned.**
**Existing documents can still be edited** to place a new layer inside a group layer: use `operation.placement.type: "into"` and point `referenceLayer` at the group, such as `"referenceLayer": { "name": "Group 1" }`. Name, visibility, protection, and similar edits are also supported for existing group layers. For nesting, V1 uses the `children` array on the layer.

### 7f. Smart object layers (`smartObject` → `smart_object_layer`)

**Type rename:** `"smartObject"` → `"smart_object_layer"`

| V1 | V2 | Notes |
| --- | --- | --- |
| `input: {href, storage}` | `smartObject.smartObjectFile.source: {url}` | Breaking: deeply nested |
| `smartObject.linked: true` | `smartObject.isLinked: true` | Renamed; resize with linked SOs now supported |
| _(not in V1)_ | `transformMode: "none"/"custom"/"fit"/"fill"` | New in V2 |
| _(not in V1)_ | `transform.angle`, `transform.skew` | New in V2 |
| _(not in V1)_ | `transform.anchor` | New in V2 |
| _(not in V1)_ | SVG file type | New in V2 |
| `fillToCanvas: true` | **Not supported** | Missing feature |

**V2 supports linked smart objects with restrictions.** Usage details are in [Smart Object Operations Migration](api-layer-operations-smart-objects.md).

### 7g. Text layers (`textLayer` → `text_layer`)

**Type rename:** `"textLayer"` → `"text_layer"`

**Character and paragraph style ranges changed, including an off-by-one breaking difference.** In V1, `to` in a character or paragraph range meant a **length** instead of an ending index. In V2, `apply.to` is the **inclusive end index** using 0-based indexing. The field placement also moved: V1 puts `from` and `to` directly on the array item, while V2 uses `apply.from` and `apply.to`.

**Example:** applying formatting to the 0-based span for "Hello" within "Hello World":

V1 form: `{"from": 0, "to": 5, "fontName": "Arial-BoldMT"}` — `to: 5` is interpreted as length 5

Equivalent V2 form: `{"apply": {"from": 0, "to": 4}, "characterStyle": {"font": {"postScriptName": "Arial-BoldMT"}}}` — `to: 4` points to the final character index

**Character style field mapping:**

| V1 | V2 | Notes |
| --- | --- | --- |
| `from`, `to` (direct on item) | `apply.from`, `apply.to` | Breaking: wrapped + semantics changed |
| `fontName: "PostScriptName"` | `characterStyle.font.postScriptName` | Breaking: nested |
| `fontAvailable` | `characterStyle.font.isAvailable` | Breaking: renamed + nested |
| Direct properties at item level | All properties in `characterStyle: {...}` | Breaking: nested |
| `fontColor.rgb`, `.cmyk`, `.lab`, `.gray` | Same nested shape | Unchanged |
| _(not in V1)_ | `characterStyle.capsOption` | New |
| _(not in V1)_ | `characterStyle.fontAlpha` | New |
| _(not in V1)_ | `characterStyle.letterSpacing` | New |
| _(not in V1)_ | `characterStyle.lineHeight` | New |
| _(not in V1)_ | `characterStyle.syntheticBold` | New |
| _(not in V1)_ | `characterStyle.syntheticItalic` | New |

**Paragraph style field mapping:**

| V1 | V2 | Notes |
| --- | --- | --- |
| `from`, `to` (direct on item) | `apply.from`, `apply.to` | Same off-by-one change as character styles |
| Direct properties at item level | All properties in `paragraphStyle: {...}` | Breaking: nested |
| `alignment` | `paragraphStyle.alignment` | Same values |
| _(not in V1)_ | `paragraphStyle.endIndent` | New |
| _(not in V1)_ | `paragraphStyle.firstLineIndent` | New |
| _(not in V1)_ | `paragraphStyle.spaceAfter` | New |
| _(not in V1)_ | `paragraphStyle.spaceBefore` | New |
| _(not in V1)_ | `paragraphStyle.startIndent` | New |
| _(not in V1)_ | `paragraphStyle.writingDirection` | New |

**Text frame:**

| V1 | V2 | Notes |
| --- | --- | --- |
| Layer-level `bounds: {left, top, width, height}` | `text.frame: {type: "area", bounds: {top, left, right, bottom}}` | Breaking; convert: `right = left + width`, `bottom = top + height` |
| Only area frame supported | `text.frame.type: "point" or "area"` | V2 adds point frame |
| Default area at `(0, 0, 4, 4)` | Default point frame at canvas center | Breaking: behavior changes when frame is omitted |
| _(not in V1)_ | `text.frame.type: "point"` with `origin: {x, y}` | New |

**Font options:**

| V1 | V2 | Notes |
| --- | --- | --- |
| `options.fonts[]` — `href` + `storage` | `fontOptions.additionalFonts[]` — `source.url` | Breaking: renamed + restructured |
| `options.globalFont` | `fontOptions.defaultFontPostScriptName` | Breaking: renamed |
| `options.manageMissingFonts` | `fontOptions.missingFontStrategy` | Breaking: renamed |
| `"useDefault"` | `"use_default"` | Breaking: enum value changed |
| `"fail"` | `"fail"` | Unchanged |

## 8. Output format reference

### JPEG quality

| V1 value (numeric) | V2 value (string) |
| --- | --- |
| 1–2 | `"very_poor"` / `"poor"` / `"low"` |
| 3–4 | `"medium"` |
| 5–6 | `"high"` |
| 7 | `"maximum"` |
| _(not in V1)_ | `"photoshop_max"` (recommended default for production) |

### PNG compression

| V1 value | V2 value |
| --- | --- |
| `"small"` | `"maximum"` |
| `"medium"` | `"medium"` |
| `"large"` | `"low"` |
| _(not in V1)_ | `"none"`, `"very_low"`, `"medium_low"`, `"medium_high"`, `"default"`, `"high"`, `"very_high"` |

### TIFF

TIFF remains available in V2; V1 exposed it through `renditionCreate`.

### Storage / destination mapping

| V1 (`outputs[].storage`) | V2 (`outputs[].destination`) |
| --- | --- |
| `"external"` + `href` | `{"url": "<presigned URL>"}` |
| `"acp"` + `href` | `{"url": "<ACP presigned URL>"}` |
| `"adobe"` + CC path | `{"creativeCloudPath": "folder/file.ext"}` (no leading slash) |
| `"adobe"` + URN | `{"creativeCloudFileId": "urn:aaid:..."}` |
| `"dropbox"` + `href` | `{"url": "...", "storageType": "dropbox"}` |
| `"azure"` + `href` | `{"url": "...", "storageType": "azure"}` |
| _(not in V1)_ | `{"validityPeriod": N}` — hosted, Adobe-managed temporary storage |
| _(not in V1)_ | `{"embedded": "string"/"json"/"base64"}` — inline in response |

### New output features in V2

| Feature | Notes |
| --- | --- |
| `iccProfile` on output | `{type: "standard", name: "..."}` or `{type: "custom", ...}` (CMYK supported via custom) |
| `cropMode: "bounds_of_layer"` | Single-layer export only — exports the bounding box of that layer |
| `layers` filter | Supported in both V1 and V2; controls which layers are rendered |
| Up to 25 outputs per request | vs. lower/unspecified V1 limit |

> **Layer identifier: mutually exclusive.** For each `outputs[].layers[]` entry, supply **either** `id` or `name`, never both. V1 accepted both fields as disambiguation hints, but V2 returns this error: `"Each layer reference must contain exactly one of id or name (not both)."`. When `id` exists, keep it and remove `name`.

> **V1 `outputs[].layers[]` with `visible` field:** Some V1 `renditionCreate` and `documentOperations` payloads used `outputs[].layers[]` entries such as `{id, visible: true}` to choose which layers appear in the composite export. Convert those straight to V2 `outputs[].layers[]` as `[{id: N}, ...]`; that form performs multi-layer composite export. Do **not** move them into `edits.layers[]`, because that route requires `type` plus `operation` and edits layers instead of selecting export content.

### Missing V2 features summary

| Feature | V1 | V2 |
| --- | --- | --- |
| `fillToCanvas` (pixel/smart object layers) | Supported | Not supported |
| Linked smart objects | Supported | Supported |
| Canvas size adjustment | Supported | Coming soon |
| Image rotation | Supported | Coming soon |
| Trim by color | Supported | Not supported |
| Background layer create/edit | Supported | Not supported |
| TIFF output | Supported | Supported |
