# Llm Migration Reference (part 3)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Step 3

**Depth Blur:** V2 currently has no Depth Blur support. Because Neural Filters are unavailable there, continue to use the V1 `/pie/psdService/depthBlur` endpoint for this capability. Treat the parameters below as reference material only.

- **Action count**: 1 action step (Neural Gallery Filter)
- **Extra images**: No
- **Primary parameters**: 11 customizable parameters, each with a default
  - `spl::focalSelector`: "auto" - chooses the focus point
  - `spl::selectSubjectUsage`: 1 - controls subject-selection behavior
  - `spl::slideAperture`: 50 - sets blur amount (0-100)
  - `spl::slideFocalDist`: 50 - sets focus distance (0-100)
  - `spl::slideFocalRange`: 50 - controls focal span size (0-100)
  - `spl::sliderBrightness`: 0 - adjusts brightness (-100 to 100)
  - `spl::sliderHaze`: 0 - controls haze (-100 to 100)
  - `spl::sliderNoise`: 0 - adds or removes grain/noise (0-100)
  - `spl::sliderSaturation`: 0 - adjusts saturation (-100 to 100)
  - `spl::sliderTint`: 0 - controls tint (-100 to 100)
  - `spl::sliderWarmness`: 0 - adjusts warmth/color temperature (-100 to 100)
- **Effect**: applies a neural depth-of-field blur effect
- **Use case**: portrait and product photos with bokeh-style results

**Smart Object Replace:**

- **V1**: `/pie/psdService/smartObject` - endpoint dedicated to smart object placement or replacement inside a PSD
- **V2**: `/v2/create-composite` with `edits.layers` and `type: "smart_object_layer"`
- Key field map: `input.href` to `smartObject.smartObjectFile.source.url`; `add` block to `operation.type: "add"` plus `placement`; implicit replace without `add` to explicit V2 `operation.type: "edit"`
- Placement: `add.insertTop` to `placement.type: "top"`, `insertAbove: {name}` to `placement.type: "above"` plus `referenceLayer: {name}`
- V2 removes several V1 constraints: linked smart objects through `smartObject.isLinked: true`, no 2000Ã—2000 px rasterization cap, and document-level layer scaling through `transformMode` (`"fit"`, `"fill"`, `"custom"`, `"none"`)

> **Implicit smart object type:** V1 requests to `/psdService/smartObject` commonly omit `type: "smartObject"` on the layer object. On that endpoint, any layer carrying an `input` field is treated as a smart object. Convert those layers to `type: "smart_object_layer"`; do not emit `type: "layer"` for them.

**Text Layer Operations:**

- **V1**: `/pie/psdService/text` - declarative request using `options.layers[]` with support for `text.content` (text string), full `characterStyles` (`size`, `color`, `fontPostScriptName`, `leading`, `tracking`, `syntheticBold/Italic`, `fontCaps`, `baseline`, `strikethrough`, `underline`, `verticalScale/horizontalScale`, `ligature`, `autoKern`), `paragraphStyles.alignment`, and font management (`options.fonts[]`, `manageMissingFonts`, `globalFont`)
- **V2**: `/v2/execute-actions` - V2 has **no equivalent declarative text endpoint**; use ActionJSON or UXP instead
- Font management maps into `options.fontOptions`: `fonts[].href` to `additionalFonts[].source.url`, `manageMissingFonts` to `missingFontStrategy` (`"useDefault"` to `"use_default"`), and `globalFont` to `defaultFontPostScriptName`
- **Additional contents**: No

**When to use ActionJSON vs UXP for text edits:**

| Use Case | Use |
| --- | --- |
| Fixed edits (font, size, color) for known layer names | ActionJSON (`options.actions`) |
| Conditional edits (only if layer is text type, only if name matches) | UXP (`options.uxp`) |
| Iterate all layers and apply logic | UXP |
| Toggle or state-based changes (e.g. bold to regular) | UXP |

**ActionJSON pattern** (stringified and supplied in `options.actions[].source.content` with `contentType: "application/json"`):

1. `select` layer by `_name`, then set `makeVisible: true`
2. `set` textStyle for font size, using `size` with `_unit: "pointsUnit"`, `textOverrideFeatureName: 808465458`, and `typeStyleOperationType: 3`
3. `set` textStyle for font, using `fontPostScriptName`, `fontName`, and `fontStyleName`
4. `set` textStyle for color, using `color` with `_obj: "RGBColor"`, `red`, `green`, and `blue`

For several layers, repeat the `select` plus `set` sequence inside one stringified ActionJSON array.

**UXP pattern** (send the script through `options.uxp.source.content` with `contentType: "application/javascript"`):

- Use `core.executeAsModal()` when modifying the document
- Use `layer.kind === "text"` to find text layers
- Use `layer.textItem.characterStyle` to change `fauxBold`, `fauxItalic`, and related values
- Put script output files under `plugin-temp:/filename.ext`

**Split View:**

- **Action count**: 34 action steps
- **Additional contents**: Yes (2 required)
  - `__ADDITIONAL_CONTENTS_PATH_0__`: edited/final output image
  - `__ADDITIONAL_CONTENTS_PATH_1__`: product logo
- **Primary parameter**: Width: 1200px; resizes final output
- **Effect**: masked before/after comparison with center divider line plus logo
- **Use case**: branded demonstrations of image-processing changes

**Side by Side:**

- **Action count**: 19 action steps
- **Additional contents**: Yes (2 required)
  - `__ADDITIONAL_CONTENTS_PATH_0__`: edited/final output image
  - `__ADDITIONAL_CONTENTS_PATH_1__`: product logo
- **Primary parameter**: Width: 1195.0px; exact decimal value
- **Effect**: simple side-by-side comparison with logo and no masking
- **Use case**: clean branded before/after comparisons
- **Difference from Split View**: simpler construction without complex masks or divider lines

**UXP Scripts (Limited Availability):**

```json
{
  "options": {
    "uxp": {
      "source": {
        "content": "const app = require('photoshop').app; app.activeDocument.flatten();",
        "contentType": "application/javascript"
      }
    }
  }
}
```

In UXP scripts, write output files under the plugin temporary location with `plugin-temp:/filename.ext`, for example `plugin-temp:/result.json`, then point `scriptOutputPattern` at them.

**Script Output Discovery:**

```json
{
  "outputs": [
    {
      "destination": { "validityPeriod": 3600 },
      "mediaType": "application/json",
      "scriptOutputPattern": "result.json"
    }
  ]
}
```

Pattern matching supports globs such as `*.json` and `result-*.png`.

### D. Other operations

**Artboards:**

- **V1:** `image.adobe.io/pie/psdService/artboardCreate` maps to **V2:** `photoshop-api.adobe.io/v2/create-artboard`
- **Input structure:** V1 `inputs[].href` maps to V2 `images[].source.url`, or to `creativeCloudPath`, `creativeCloudFileId`, or `lightroomPath`. V1 `inputs[].storage` is only necessary for Azure/Dropbox outputs; leave it out for normal URLs.
- **Output structure:** Use the common endpoint pattern: `outputs[].href` maps to `outputs[].destination.url`, and `outputs[].type` maps to `outputs[].mediaType`.
- **New V2 parameter:** `artboardSpacing` is an optional integer in pixels, default 50, controlling horizontal spacing between artboards.
- **Validation:** 1-25 images, 1-25 outputs.
- **Source options:** External URL, Creative Cloud Path, Creative Cloud File ID, Lightroom Path.
- **Output formats:** JPEG, PNG, TIFF, PSD, PSDC, JSON manifest (6 formats).
- **Storage options:** Same as other endpoints (External, Hosted, Embedded, Creative Cloud, Azure, Dropbox).
- **Artboard visibility behavior changed (V1 to V2):** With V1 `documentOperations`, setting `visible: false` on an artboard container layer still returns the full original document canvas. V2 `create-composite` respects that visibility state, leaves hidden artboards out of the composite, and sizes the result to visible artboard content. Pixel-comparison tooling will therefore report a size mismatch, such as `2930Ã—4509` in V1 versus `2930Ã—960` in V2 when only one artboard row remains visible. Treat that as intended behavior.

**Manifest:**

- V1: `/pie/psdService/documentManifest`
- V2: `/v2/generate-manifest`
- Pattern: writes the manifest to the requested output destination
- Options: `includeLayerThumbnails`, `includeXmp`, `maximumThumbnailDepth`, `trimToTransparency` (boolean; crops thumbnails to visible pixels; requires `includeLayerThumbnails: true`; adjustment layers or layers without pixel data still produce a blank white canvas thumbnail; this behavior is specific to `/v2/generate-manifest`; for exported-image trimming in `/v2/create-composite` or `/v2/execute-actions`, set `cropMode: "trim_to_transparency"` in output options)
- V1 manifest layer `locked` (boolean) becomes V2 `protection` (array of flags: `none`, `all`, `transparency`, `composite`, `position`, `artboard_autonest`)
- V1 manifest `mask` with `offset.x`/`offset.y` becomes V2 `pixelMask` with `offset.horizontal`/`offset.vertical`. V2 also adds read-only `hasMask`, `extendOpaque`, and `bounds`, plus editable `enabled` (boolean, default `true`, shows or hides the mask without deleting data) and `linked` (boolean, default `true`, controls whether layer transforms also affect the mask). Density and feather moved to `userMask`: `density` (integer, 0-100, mask opacity level) and `feather` (number, 0-250, pixel softness at the edge). Delete a pixel mask in edit operations with `pixelMask: { "delete": true }`; this is edit-only, invalid on add, and supported by every layer type.
- Clipping mask: V1 `mask.clip` becomes V2 `layerSettings.clippingMask` in the manifest; edit operations use top-level `isClipped: true`.
- **Layer type renames** (manifest response only; V2 edit/create-composite request payloads still use `"type": "layer"` unchanged): `layer` to `pixel_layer`, `textLayer` to `text_layer`, `layerSection` to `group_layer`, `layerSection`(artboard) to `artboard`, `smartObject` to `smart_object_layer`, `fillLayer` to `solid_color_layer`, `adjustmentLayer` to `adjustment_layer`, `backgroundLayer` to `background_layer`
- **`bounds` format changed**: V1 `{height, left, top, width}` becomes V2 `{left, top, right, bottom}`; there is no height/width, so compute them from right-left and bottom-top.
- **`thumbnail` changed**: V1 returned a plain string URL; V2 returns an object `{mediaType, url}`, present only when thumbnails were requested.
- **Artboard children key changed**: V1/groups use `children[]`, while V2 artboards use `layers[]`; recursive traversal must handle both keys.
- Document field renames: `bitDepth` to `depth`, `iccProfileName` to `iccProfile`, `name` to `title`, `height`+`width` to `bounds`; `photoshopBuild` was removed
- See `manifest-response-migration.md` for the full field-by-field response format reference

**Status:**

- V1: service-specific endpoints
- V2: unified `/v2/status/{jobId}`
- The same `jobId` works for every operation type.

### E. Export layers (single vs multi-layer)

Use `outputs[].layers` on `/v2/create-composite` to export layers. Single-layer and multi-layer exports behave differently.

**Single-Layer Export** - specify exactly one layer in `outputs[].layers`:

- Supports every `cropMode` value: `"layer_bounds"` (default), `"trim_to_transparency"`, `"document_bounds"`
- Supported formats: JPEG, PNG, TIFF, **PSD**; PSD is allowed only for single-layer export
- Default JPEG quality: `photoshop_max`; default PNG compression: `default` (level 6)
- **V1 migration note:** V1 single-layer exports used the document/canvas size. V2 defaults to `"layer_bounds"`, which makes the output match layer size. Set `cropMode: "document_bounds"` explicitly when the V1 dimensions must be preserved.

**Multi-Layer Export** - specify two or more layers in `outputs[].layers`:

- Combines the selected layers into a single raster output
- Supported formats: JPEG, PNG, TIFF; **PSD is NOT supported for multi-layer export**
- `cropMode` accepts `"document_bounds"` (default) and `"trim_to_transparency"`; `"layer_bounds"` returns a validation error
- Quality and compression defaults match single-layer export

**Document Export** - omit `layers` to export the full document:

- `cropMode` accepts `"document_bounds"` (default) and `"trim_to_transparency"`; `"layer_bounds"` returns a validation error

```json
// Single-layer: V2 example with cropMode
{
  "image": {"source": {"url": "<PSD_URL>"}},
  "outputs": [{
    "destination": {"url": "<OUTPUT_URL>"},
    "mediaType": "image/png",
    "layers": [{"id": 1096}],
    "cropMode": "trim_to_transparency"
  }]
}

// Multi-layer: V2 example with cropMode (no PSD)
{
  "image": {"source": {"url": "<PSD_URL>"}},
  "outputs": [{
    "destination": {"url": "<OUTPUT_URL>"},
    "mediaType": "image/jpeg",
    "layers": [{"id": 1096}, {"id": 996}],
    "quality": "maximum",
    "cropMode": "trim_to_transparency"
  }]
}
```

> **Layer identifier: mutually exclusive.** Each `outputs[].layers[]` item must contain **either** `id` or `name`, never both. V1 allowed both as disambiguation hints, but V2 rejects that shape with: `"Each layer reference must contain exactly one of id or name (not both)."`. When `id` is available, keep it and remove `name`.

> **V1 `outputs[].layers[]` with `visible` field:** Some V1 `renditionCreate`/`documentOperations` requests used entries like `{id, visible: true}` in `outputs[].layers[]` to choose layers for composite export. Convert them to V2 `outputs[].layers[]` as `[{id: N}, ...]`; that invokes multi-layer composite export. Do **not** move them into `edits.layers[]`, since that route requires `type` plus `operation` and edits layers instead of selecting export content.

## Step 3 — Storage solutions reference

### Storage decision matrix

| Use Case | Recommended Storage | Why |
| --- | --- | --- |
| Production workflows | External presigned URLs | Full control, scalability, integration |
| Creative Cloud/ACP integration | Creative Cloud paths | Seamless CC workflow via ACP, direct access |
| Large files or batches | External storage | Better performance, cost-effective |
| XMP metadata / JSON manifests | Embedded (string/json) | Immediate response, no storage setup |
| Temporary edits | Hosted (presigned URLs) | No storage management required |

### 1. External storage (presigned URLs)

**Supports:** AWS S3, Azure Blob, Dropbox, Frame.io, Google Drive

**For Input:**

```json
{
  "image": {
    "source": {
      "url": "<PRESIGNED_GET_URL>"
    }
  }
}
```

**For Output:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<PRESIGNED_PUT_URL>",
        "storageType": "azure" // Only for Azure or Dropbox
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

**When to use `storageType`:**

- Azure: `"storageType": "azure"`
- Dropbox: `"storageType": "dropbox"`
- AWS S3, Frame.io, Google Drive: NOT required

### 2. Creative Cloud storage

**Note:** In this context, Creative Cloud Storage specifically means file storage and access through ACP (Adobe Content Platform).

```json
{
  "image": {
    "source": {
      "creativeCloudPath": "my-folder/input.psd"
      // OR
      "creativeCloudFileId": "urn:aaid:...",
      "creativeCloudProjectId": "urn:aaid:sc:..."  // Optional
    }
  },
  "outputs": [
    {
      "destination": {
        "creativeCloudPath": "my-folder/output.jpg"
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

**No leading slash:** `creativeCloudPath` values must not begin with `/`. Use `"my-folder/file.psd"`, not `"/my-folder/file.psd"`.

**Use cases:**

- Integration with the CC ecosystem and ACP
- Direct access to ACP-stored CC files for the user
- Collaboration workflows

### 3. Embedded storage

**For text-based outputs only (XMP, JSON):**

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "string"  // For XMP (XML text)
        // OR
        "embedded": "json"    // For JSON manifests
        // OR
        "embedded": "base64"  // For small binary data
      },
      "mediaType": "application/rdf+xml"  // or application/json
    }
  ]
}
```

**Use cases:**

- XMP metadata extraction
- JSON manifest data
- Immediate access requirements
- Cases where no storage setup should be needed

**IMPORTANT:** Do NOT use for images. It applies only to text or metadata outputs.

**Response format:**

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "string",
          "content": "<?xml version=\"1.0\"...>" // For string
          // OR for JSON:
          // "embedded": "json",
          // "content": {"document": {...}}
        },
        "mediaType": "application/rdf+xml"
      }
    ]
  }
}
```

### 4. Hosted storage

**Adobe-managed temporary storage:**

```json
{
  "outputs": [
    {
      "destination": {
        "validityPeriod": 3600 // Seconds: 60-86400 (max 1 day)
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

**Use cases:**

- Temporary processing workflows
- No long-term storage requirement; files expire within 24 hours
- Short-lived prototypes

**Response:**

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://adobe-hosted-storage.../file.jpg?expires=..."
        },
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

**IMPORTANT:** Download the file before the URL expires; the maximum lifetime is 24 hours from job completion.

## Step 3 — Output types migration

### Overview

V2 changes output format specifications across every endpoint that produces outputs. This section covers shared structural updates plus JPEG, PNG, PSD, and TIFF parameter changes.

### Structural changes (all output formats)

The following structural changes apply to every output type:

| V1 Field | V2 Field | Required | Notes |
| --- | --- | --- | --- |
| `outputs[].href` | `outputs[].destination.url` | Yes | Nested in destination object |
| `outputs[].type` | `outputs[].mediaType` | Yes | Renamed for clarity |
| `outputs[].storage` | `outputs[].destination.storageType` | No\* | Only for Azure/Dropbox |

\*`storageType` remains optional except for Azure Blob Storage and Dropbox.

**V1 Pattern:**

```json
{
  "outputs": [
    {
      "href": "https://...",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}
```

**V2 Pattern:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "https://..."
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

### JPEG quality migration

**V1:** numeric values (1-7 or 1-12)
**V2:** descriptive string enums

### JPEG quality mapping

| V1 Numeric | V2 String | Use Case |
| --- | --- | --- |
| 1-2 | `"low"` | Thumbnails, small previews |
| 3-4 | `"medium"` | Standard web images |
| 5-6 | `"high"` | High-quality web images |
| 7 | `"maximum"` | Print, production |
| N/A | `"photoshop_max"` | Professional print, highest quality (recommended default) |
| N/A | `"very_poor"` | Smallest file size (V2 only) |
| N/A | `"poor"` | Very small files (V2 only) |

**Default:** For production workflows, use `"photoshop_max"`.

> **V1 implicit quality:** If a V1 `execute-actions` or `actionJSON` payload leaves out `quality`, V1 chooses the top JPEG encoder setting. During migration, set `quality: "photoshop_max"` in V2 whenever the V1 payload had no quality field; otherwise V2 may choose a lower default and create pixel-level differences from V1 reference outputs.

> **execute-actions pixel fidelity:** Different JPEG encoders are used by V1 and V2. Even identical quality settings can produce sub-1% pixel differences. Use `"photoshop_max"` as the baseline when pixel fidelity matters, and treat sub-1% JPEG diffs across API versions as normal.

**V1 Example:**

```json
{
  "type": "image/jpeg",
  "quality": 7,
  "width": 2000
}
```

**V2 Example:**

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum",
  "width": 2000
}
```

### PNG compression migration

**V1:** three compression levels: "small", "medium", "large"
**V2:** ten granular compression levels based on zlib/libpng

### PNG compression mapping

| V1 | V2 Recommended | V2 Alternatives | Notes |
| --- | --- | --- | --- |
| `"small"` | `"maximum"` | `"very_high"`, `"high"` | Smallest files, slower |
| `"medium"` | `"medium"` | `"default"`, `"medium_high"`, `"medium_low"` | Balanced (default) |
| `"large"` | `"low"` | `"very_low"`, `"none"` | Fastest, larger files |

### V2 PNG compression values (complete)

- `"none"` (level 0) - leaves PNG data uncompressed
- `"very_low"` (level 1) - applies a very small amount of compression
- `"low"` (level 2) - applies light compression
- `"medium_low"` (level 3) - uses a medium-low setting
- `"medium"` (level 4) - uses a middle compression setting
- `"medium_high"` (level 5) - uses a medium-high setting
- `"default"` (level 6) - **standard library behavior when omitted**
- `"high"` (level 7) - applies strong compression
- `"very_high"` (level 8) - applies very strong compression
- `"maximum"` (level 9) - uses the strongest compression level

**V1 Example:**

```json
{
  "type": "image/png",
  "compression": "medium"
}
```

**V2 Example:**

```json
{
  "mediaType": "image/png",
  "compression": "medium"
}
```

**Important:** PNG uses `compression`, not `quality`.

### PSD and TIFF outputs

**PSD** and **TIFF** outputs do not expose format-specific parameters in V2; there are no quality or compression options. Apply only the structural field changes:

**V1 PSD:**

```json
{
  "href": "https://...",
  "storage": "external",
  "type": "image/vnd.adobe.photoshop"
}
```

**V2 PSD:**

```json
{
  "destination": {
    "url": "https://..."
  },
  "mediaType": "image/vnd.adobe.photoshop"
}
```

**Cloud PSD (PSDC):**
Prefer `"mediaType": "document/vnd.adobe.cpsd+dcxucf"` as the primary PSDC media type. With ACP (Adobe Cloud Platform) storage or external storage, `document/vnd.adobe.cpsd+dcxucf` and `document/vnd.adobe.cpsd+dcx` both work. The older V1 value `image/vnd.adobe.photoshop+dcx` is not part of V2.

### Common output fields

Every output type accepts these optional fields:

- `width` (integer, >= 0) - pixel width for the result
- `height` (integer, >= 0) - pixel height for the result
- `maxWidth` (integer, >= 0) - upper bound on result width in pixels
- `resample` (string, optional) - algorithm used when resizing through `width`/`maxWidth`. Values: `nearest_neighbor`, `bilinear`, `bicubic`, `bicubic_smoother`, `bicubic_sharper`. Default is `bicubic_sharper`. Applies to JPEG, PNG, and TIFF exports.
- `shouldTrimToCanvas` (boolean) - removes transparent pixels

## See also

- [Smart Object Replace](api-smart-object-replace.md)
- [Text Layer Operations](api-text-layer-operations.md)
