# Llm Migration Reference (part 6)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## All jobs use same endpoint — V2 status response output patterns

**Request:**

```json
{
  "outputs": [
    {
      "destination": { "url": "https://s3.../output.jpg?..." },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2400
    },
    {
      "destination": { "embedded": "json" },
      "mediaType": "application/json"
    },
    {
      "destination": { "creativeCloudPath": "folder/output.png" },
      "mediaType": "image/png",
      "compression": "high"
    },
    {
      "destination": { "validityPeriod": 7200 },
      "mediaType": "image/tiff"
    }
  ]
}
```

**Status Response:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": { "url": "https://s3.../output.jpg?..." },
        "mediaType": "image/jpeg",
        "quality": "maximum",
        "width": 2400
      },
      {
        "destination": {
          "embedded": "json",
          "content": { "document": { "width": 1920, "height": 1080 } }
        },
        "mediaType": "application/json"
      },
      {
        "destination": { "creativeCloudPath": "folder/output.png" },
        "mediaType": "image/png",
        "compression": "high"
      },
      {
        "destination": { "url": "https://adobe-hosted.../output.tiff?expires=..." },
        "mediaType": "image/tiff"
      }
    ]
  }
}
```

**Pattern:** Each output keeps its destination type and parameter set, and the `outputs` array remains in the same order.

### Failed job response

For a failed job, the response does not include `result`:

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "createdTime": "2025-11-11T10:00:00.000Z",
  "modifiedTime": "2025-11-11T10:05:35.000Z",
  "status": "failed",
  "errorDetails": [
    {
      "errorCode": "400401",
      "message": "The value provided is not valid."
    },
    {
      "errorCode": "400420",
      "message": "Required fields missing on the API request."
    }
  ]
}
```

**Pattern:** For failed jobs, the payload uses `errorDetails` instead of a `result` object.

### Pending/running job response

During processing, `result` can be missing or partial:

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "createdTime": "2025-11-11T10:00:00.000Z",
  "modifiedTime": "2025-11-11T10:00:15.000Z",
  "status": "running"
}
```

**Pattern:** `result` appears only after completion. Poll until `status` is either `"succeeded"` or `"failed"`.

**Polling cadence recommendation:** every 5 seconds

### Status response mapping table

| Request Destination Type | V1 Status Response | V2 Status Response | Status Field Location |
| --- | --- | --- | --- |
| External URL (S3, Azure, etc.) | `outputs[]._links.self.href: "<URL>"` | `result.outputs[].destination.url: "<URL>"` | `result.outputs[].destination.url` |
| Embedded (string/json/base64) | Limited/Not standard | `result.outputs[].destination.{embedded, content}` | `result.outputs[].destination.content` |
| Hosted (Adobe temp storage) | N/A (V2 new feature) | `result.outputs[].destination.url: "<TEMP_URL>"` | `result.outputs[].destination.url` |
| Creative Cloud Path | `outputs[]._links.self.href: "path/to/file"` | `result.outputs[].destination.creativeCloudPath: "path/to/file"` | `result.outputs[].destination.creativeCloudPath` |
| Creative Cloud File ID | `outputs[]._links.self.href: "urn:aaid:..."` | `result.outputs[].destination.creativeCloudFileId: "urn:aaid:..."` | `result.outputs[].destination.creativeCloudFileId` |
| Script Pattern (glob) | N/A (V2 new feature) | Expands to multiple outputs, one per matched file | Multiple `result.outputs[]` entries |

### Key migration insights

**1. Response Structure Mirror:**
In V2, `result.outputs[]` in the status response reflects the request's `outputs[]` structure directly:

- Fields from the request come back again, including mediaType, quality, width, and similar output settings
- Destination data is retained or augmented, such as a hosted URL or embedded content
- `_links` and `input` are not added in V2 responses

**2. Status Location:**

- V1: status is tracked per output (`outputs[].status`)
- V2: status is tracked once at the job root (`status`)

**3. Hypermedia Links:**

- V1: `_links` objects appear throughout the payload
- V2: hypermedia links are removed in favor of direct data structures

**4. Destination Determination:**
The destination fields in the status payload follow the request:

- If the request has `url`, the response has `url` (external or hosted-generated)
- If the request has `embedded`, the response has `embedded` plus `content`
- If the request has `creativeCloudPath`, the response has `creativeCloudPath`
- If the request combines `scriptOutputPattern` with hosted output, the response can include multiple `url` entries

**5. Output Array Expansion:**
Only `scriptOutputPattern` expands the output array (1 request → N response outputs). Every other destination type keeps a 1:1 mapping.

### Migration validation points

For polling-code migration, adjust these references:

**Change field paths:**

- `data.created` → `data.createdTime`
- `data.modified` → `data.modifiedTime`
- `data.outputs` → `data.result.outputs`
- `data.outputs[0]._links.self.href` → `data.result.outputs[0].destination.url` (or appropriate field)

**Update status checking:**

- V1: Loop through `outputs[]` checking each `output.status`
- V2: Check single `status` field at root level

**Remove hypermedia logic:**

- V1: Navigate via `_links.self.href`
- V2: Access `result.outputs[]` directly

**Handle destination types:**

- Check `destination.url` for external/hosted
- Check `destination.content` for embedded
- Check `destination.creativeCloudPath` for CC
- Handle multiple outputs for scriptOutputPattern

**Error handling:**

- V1: Check `outputs[].status` for errors
- V2: Check `status === "failed"` and parse `errorDetails[]` array

## All jobs use same endpoint — Validation checklist

Use this checklist while moving code or validation paths from V1 to V2:

### Request structure

- [ ] Set the base URL to `photoshop-api.adobe.io`
- [ ] Update the endpoint path according to the mapping table
- [ ] Replace `inputs[].href` with `image.source.url`
- [ ] Replace `options` with `edits` where that structure applies
- [ ] Include an `outputs` array and configure it correctly
- [ ] Move `outputs[].href` to `outputs[].destination.url`
- [ ] Move `outputs[].type` to `outputs[].mediaType`
- [ ] Remove `storage`, or use `storageType` only for Azure/Dropbox

### Edit operations specific

- [ ] Collapse multiple V1 calls into one V2 call
- [ ] Put parameters under category objects such as `light`, `color`, and `effects`
- [ ] Convert parameter names from PascalCase to camelCase
- [ ] Send `autoTone` as the boolean `true`
- [ ] Send `autoStraighten` as an object with `enabled: true`
- [ ] Turn inline XMP strings into file references at `edits.xmp.source`
- [ ] Move masks from `options.masks` into `edits.xmp.masks`
- [ ] Change mask structure from `href` plus `storage` to `source.url`
- [ ] Give every mask both `source` and `digest`
- [ ] If XMP orientation is present, nest it inside the `xmp` object instead of directly under `edits`
- [ ] Use orientation string values such as `"right_top"` rather than numeric codes

### Layer operations specific

- [ ] Use underscore layer type names: `text_layer`, `adjustment_layer`, `smart_object_layer`, `solid_color_layer`
- [ ] Use `"group_layer"` for group layers, not `"layer_group"` or `"layerSection"`. V2 cannot yet create a brand-new document that already contains a group layer (upcoming feature), but it can edit an existing document by inserting a layer into a group with `into` + `referenceLayer`.
- [ ] Provide the operation type (`add`, `edit`, `delete`); for edits, the `operation` field is **required** and is not inferred
- [ ] Express moves as `operation.type: "move"` with `placement`, not as `move: {...}`
- [ ] Convert V1 layers that have `edit: {}` and no add/delete into V2 layers with `operation.type: "edit"`
- [ ] Use the `operation.placement` structure for placement
- [ ] Use `referenceLayer` for relative placement instead of `relativeTo`
- [ ] Order layers top-down in V2 rather than bottom-up; any layer used as `referenceLayer` must appear earlier in the array
- [ ] Use `source` for layer source, not `input`
- [ ] Represent layer lock as `"protection": ["all"]` / `["none"]`, not `"locked": true/false`
- [ ] For clipping masks, set `"isClipped": true` on the layer, not `mask.clip`
- [ ] Rename `mask` to `pixelMask`; write offsets as `offset.horizontal`/`offset.vertical` rather than `offset.x`/`offset.y`
- [ ] To remove a pixel mask on edit operations, send `pixelMask: { "delete": true }`
- [ ] Wrap text-layer characterStyles in a `characterStyle` object
- [ ] Wrap text-layer paragraphStyles in a `paragraphStyle` object
- [ ] Use `offset.horizontal`/`offset.vertical` for pixel-mask offsets, not `offset.x`/`offset.y`
- [ ] Convert V1 `mask.linked`/`mask.enabled` to V2 `mask.isLinked`/`mask.isEnabled`; provide source at `mask.source.url` instead of `mask.input.href`
- [ ] Rename `visible` to `isVisible`
- [ ] For most layer types, put `opacity` and `blendMode` at the top level rather than in `blendOptions`; for `smart_object_layer`, keep `blendOptions.opacity` and `blendOptions.blendMode`
- [ ] Convert layer transforms from V1 `bounds {left,top,width,height}` to V2 `transform {offset:{horizontal,vertical}, dimension:{width,height}}`; include `transformMode: "custom"` whenever `transform` is used
- [ ] Omit the `transform` object when `transformMode` is `fit`, `fill`, or `none`; otherwise the service returns 400
- [ ] `fit` and `fill` place content at (0,0); for another position, follow with a second request using `transformMode: "custom"` and the intended offset
- [ ] For `custom` with dimension/angle/skew, run two passes: apply geometry first using the anchor as pivot with default `(0,0)`, then set position through `setOffset`; priority is explicit offset → alignment → fallback restore original x,y
- [ ] When only geometry is supplied (dimension/angle/skew, no offset, no alignment), restore the original position silently for V1 parity so the layer does not drift
- [ ] Move V1 layer-level `horizontalAlign`/`verticalAlign` into V2 placement-level `horizontalAlignment`/`verticalAlignment` under `placement: {type: "custom", ...}` for add/move operations

### Adjustment layer operations specific

- [ ] Rename layer type `"adjustmentLayer"` to `"adjustment_layer"`
- [ ] Include the V2-required `adjustments.type` discriminant, which V1 did not have: `"brightness_contrast"`, `"exposure"`, `"hue_saturation"`, `"color_balance"`; new values also include `"curves"`, `"levels"`, and `"gradient_map_custom_stops"`
- [ ] Inside the `exposure` payload, rename the amount field from `exposure` to `exposureValue`
- [ ] For Hue/Sat, change V1 `channels[]` with `channel: "master"` into V2 `hueSaturationAdjustments[]`; omit `localRange` for master, and include `localRange` with `channelId` for a specific color range only when `colorize: false`
- [ ] Adjustment layers do not use `transformMode`, so leave it out

### Text layer operations specific

- [ ] Rename layer type `"textLayer"` to `"text_layer"`
- [ ] For character/paragraph style ranges, convert V1 `to` as length into V2 `apply.to` as an inclusive end index; **subtract 1 from V1's `to`** during migration
- [ ] Put style properties inside the V2 `characterStyle` object, with `apply: {from, to}` as the range wrapper
- [ ] Move V1 top-level `fontName` into V2 `characterStyle.font.postScriptName`, inside `characterStyle.font`
- [ ] Put paragraph styles inside the V2 `paragraphStyle` object
- [ ] Convert V1 layer-level `bounds {left,top,width,height}` into V2 `text.frame {type:"area", bounds:{top,left,right,bottom}}`; compute `right=left+width` and `bottom=top+height`
- [ ] For single-point text, use `text.frame: {type:"point", origin:{x,y}}`
- [ ] V2 defaults to a point at the canvas center when no frame is supplied, so always set `text.frame` explicitly
- [ ] Treat `textOrientation` as a text-level property, not a per-character-style setting
- [ ] Convert font options from `options.fonts` (href+storage) to `fontOptions.additionalFonts` with `source.url`; convert `options.globalFont` to `fontOptions.defaultFontPostScriptName`; convert `manageMissingFonts:"useDefault"` to `missingFontStrategy:"use_default"`
- [ ] `lineHeight` / `autoLeading` are V2-only controls. Because V1 always used automatic leading and had no line-height override, match that behavior with `autoLeading: true` (line height = 120% of `fontSize`); for custom leading, send `autoLeading: false` plus an explicit `lineHeight`:

  ```json
  // auto — matches V1 behavior
  { "characterStyle": { "fontSize": 30, "autoLeading": true } }

  // custom leading
  { "characterStyle": { "fontSize": 30, "autoLeading": false, "lineHeight": 48 } }
  ```

### Smart object layer operations specific

- [ ] Rename layer type `"smartObject"` to `"smart_object_layer"`
- [ ] Move source from V1 `input: {href, storage}` to V2 `smartObject.smartObjectFile.source.url`
- [ ] Rename `smartObject.linked` to `smartObject.isLinked`
- [ ] When a `transform` object is present, set `transformMode` to one of `"none"`, `"custom"`, `"fit"`, or `"fill"`
- [ ] V2 adds SVG and AI as supported source file types; PSD, JPEG, PNG, TIFF, and PDF already existed in V1
- [ ] AI files work only if **Create PDF Compatible File** was enabled during the Illustrator save
- [ ] Width-only resizing rasterizes linked SOs into pixel layers unless the same request supplies their content

### Text endpoint migration specific (`/pie/psdService/text`)

- [ ] V2 has no declarative text endpoint; use `/v2/execute-actions`
- [ ] Use ActionJSON for fixed changes on known layers, and UXP for conditional or iterative logic
- [ ] Stringify ActionJSON and include `contentType: "application/json"`
- [ ] For UXP document changes, call `core.executeAsModal()` and include `contentType: "application/javascript"`
- [ ] **Multi-layer edits:** A V1 `options.layers[]` payload may target 10–50+ layers. Generate a separate `select`+`set` pair in V2 ActionJSON for every target layer; layers with the same replacement text still need their own pair, and none may be skipped. Use integer `_id` selectors instead of `_name` because names can repeat. Two-layer payload example: `[{"_obj":"select","_target":[{"_ref":"layer","_id":71}],"makeVisible":false},{"_obj":"set","_target":[{"_ref":"textLayer","_enum":"ordinal","_value":"targetEnum"}],"to":{"_obj":"textLayer","textKey":"Hello"}},{"_obj":"select","_target":[{"_ref":"layer","_id":44}],"makeVisible":false},{"_obj":"set","_target":[{"_ref":"textLayer","_enum":"ordinal","_value":"targetEnum"}],"to":{"_obj":"textLayer","textKey":"World"}}]`
- [ ] **Bounds/visibility-only edits:** When a V1 payload changes only layer bounds or visibility and has no text content/style fields, V2 still needs non-empty `options` containing ActionJSON or UXP; an empty `options` object fails with `"options: At least one of actions or uxp must be provided"`. Build ActionJSON that selects every target layer by `_id` and applies `translate`/`transform` for bounds edits or `hide`/`show` for visibility. Do not send a declarative V2 text-layer edit unless `options.actions` or `options.uxp` contains at least one entry.
- [ ] Convert `options.fonts[]` to `options.fontOptions.additionalFonts[]` using `{source: {url}}`
- [ ] Convert `options.manageMissingFonts: "useDefault"` to `options.fontOptions.missingFontStrategy: "use_default"`

### Action operations specific

- [ ] Use a `source` object for actions instead of `href`
- [ ] Store ActionJSON as a stringified value, not as an array or object
- [ ] Provide `contentType` for inline content
- [ ] Use `additionalContents`, not `additionalImages`, for extra content fields
- [ ] Use the placeholder format `__ADDITIONAL_CONTENTS_PATH_0__`, not `__ADDITIONAL_IMAGES_0__` or `__ADDITIONAL_CONTENT_0__`; keep the numeric index from the original V1 placeholder exactly and do not renumber
- [ ] Convert V1 placeholder `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` / `PEGASUS_ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` to `__ADDITIONAL_CONTENTS_PATH_0__`, adjusting the suffix to match the array position
- [ ] The `additionalContents` maximum is 25, not 10
- [ ] Use object syntax for UXP script `options.uxp`, not an array
- [ ] Write UXP script output paths as `plugin-temp:/filename.ext`, not `__UXP_OUTPUT_PATH__`
- [ ] Use `{"validityPeriod": 3600}` for the script output destination, not `{"hosted": true}` as `scriptOutputPattern`

### Artboard operations specific

- [ ] Replace `inputs[]` with `images[]` that contain a `source` object
- [ ] Ensure each image has `source` with one valid reference: url, creativeCloudPath, creativeCloudFileId, or lightroomPath
- [ ] Keep the image count from 1 through 25
- [ ] Keep the output count from 1 through 25
- [ ] If `artboardSpacing` is provided, make it an integer in pixels
- [ ] Use `destination.url` and `mediaType` in the output structure, not href/type

### Storage configuration

- [ ] Select the storage type that matches the use case
- [ ] Use `storageType` only with Azure and Dropbox
- [ ] Use embedded storage only for XMP/JSON outputs
- [ ] Give hosted storage a `validityPeriod` from 60 to 86400 seconds
- [ ] Omit a leading slash from Creative Cloud paths; use `"my-folder/file.psd"` rather than `"/my-folder/file.psd"`

### Output configuration

- [ ] Convert `outputs[].href` to `outputs[].destination.url`
- [ ] Convert `outputs[].type` to `outputs[].mediaType`
- [ ] Remove `outputs[].storage`, or replace it with `storageType` only for Azure/Dropbox
- [ ] Choose the correct media type for the output format
- [ ] Keep multiple outputs within the 25-output limit
- [ ] Do not use embedded storage for images

### Output configuration: JPEG specific

- [ ] Use a string enum for quality, for example `"maximum"` instead of `7`
- [ ] Map quality values correctly: 7 → `"maximum"`, 5-6 → `"high"`, 3-4 → `"medium"`, 1-2 → `"low"`
- [ ] Use the `quality` parameter, not `compression`

### Output configuration: PNG specific

- [ ] Use the V2 compression enum, for example `"maximum"` instead of `"small"`
- [ ] Map compression values as "small" → `"maximum"`, "medium" → `"medium"`, and "large" → `"low"`
- [ ] Use the `compression` parameter, not `quality`

### Output configuration: PSD/TIFF specific

- [ ] Do not include quality or compression parameters
- [ ] Use the correct mediaType: `"image/vnd.adobe.photoshop"` or `"image/tiff"`
- [ ] Apply only structural field changes

### Document creation specific

- [ ] Express `resolution` as `{"unit": "density_unit", "value": 72}`, not as an integer
- [ ] Send `depth` as an integer such as `8`, not as a string such as `"8"`
- [ ] Use color mode `"grayscale"`, not `"gray"`
- [ ] Rename `fill: "backgroundColor"` from V1 camelCase to `fill: "background_color"` in V2 snake_case; V2 rejects the camelCase form
- [ ] For the V2 object form of `fill`, use `{"solidColor": {"rgb": {"red": N, "green": N, "blue": N}}}` for custom color
- [ ] Validate `depth` against the selected mode: `bitmap`→1 only; `grayscale`/`rgb`/`hsb`→8,16,32; `cmyk`/`lab`/`multichannel`→8,16; `indexed`/`duotone`→8 only
- [ ] For `solid_color_layer` fill, keep the structure `fill.solidColor.rgb.{red,green,blue}`; V1 and V2 both require the `rgb` wrapper
- [ ] Rename `fontColor.cmyk.yellowColor` to `fontColor.cmyk.yellow`; rename `fontColor.lab.luminance` to `fontColor.lab.l`
- [ ] V1 accepted 0–65535 for `fontColor` rgb/cmyk/gray/lab-l; V2 maximum is 32768, so use 32768 when a V1 value is higher
- [ ] V1 accepted 0–65535 for `fontColor` lab `a`/`b`; V2 maximum is 16384, so use 16384 when a V1 value is higher
- [ ] `apply.{from, to}` is optional on each `characterStyles` entry; omit it to style the entire text, and include it only for a specific character range
- [ ] Percent-encode source and destination URLs completely; do not leave spaces or special characters unencoded

### Export layers specific

- [ ] Use `cropMode` `layer_bounds` only for single-layer export; `trim_to_transparency` and `document_bounds` support every export type
- [ ] Do not request PSD format for multi-layer export; use JPEG, PNG, or TIFF
- [ ] If omitted, JPEG quality defaults to `photoshop_max`; PNG compression defaults to `default` (level 6)

### ICC profile specific

- [ ] Do not use `iccProfile` with PSDC outputs; remove it or choose another format
- [ ] Match standard profile names exactly, preserving spaces and punctuation
- [ ] Use a custom ICC profile for CMYK output, not a standard profile
- [ ] Set `imageMode` correctly for custom profiles: `"rgb"`, `"grayscale"`, or `"cmyk"`

### Status checking

- [ ] Use the v2 path for the status endpoint
- [ ] Handle every status value: pending, running, succeeded, failed
- [ ] Process error details as an array
- [ ] Poll at an appropriate cadence, with 5 seconds recommended
- [ ] Implement timeout handling

### Authentication

- [ ] Reuse the same OAuth token; no token change is required
- [ ] Include the Authorization header
- [ ] Include the x-api-key header

## All jobs use same endpoint — Appendix: Common error codes

| Error Code | Description | Common Cause | Solution |
| --- | --- | --- | --- |
| 400400 | Invalid JSON in request payload | Malformed JSON | Validate JSON syntax |
| 400401 | Invalid value provided | Wrong parameter value/type | Check parameter documentation |
| 400410 | Required fields missing | Missing required field | Add required fields (e.g., outputs array) |
| 400411 | Request blocked by content filters | Inappropriate content | Review content policies |
| 400420 | Required fields missing on API request | Missing critical parameter | Check all required fields present |
| 403401 | User not authorized | Invalid/expired token | Refresh access token |
| 403421 | Quota exhausted | API limits exceeded | Check quota, upgrade plan |
| 404 | Job not found | Invalid jobId | Verify jobId is correct |
| 422404 | Unable to process outputs | Output destination issue | Check output URLs, storage permissions |
| 500600 | Internal server error | Server-side issue | Retry request, contact support if persists |

## All jobs use same endpoint — Quick command reference

### Full migration sample

**V1 (Multiple Calls):**

```shell

## Call 1: Auto tone

curl -X POST https://image.adobe.io/lrService/autoTone \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -d '{"inputs": {"href": "<URL>"}, "outputs": [...]}'

## Call 2: Status check

curl -X GET https://image.adobe.io/lrService/status/{jobId1} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"

## Call 3: Apply edits

curl -X POST https://image.adobe.io/lrService/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -d '{"inputs": {"href": "<URL>"}, "options": {...}, "outputs": [...]}'

## Call 4: Status check

curl -X GET https://image.adobe.io/lrService/status/{jobId2} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

**V2 (Single Call):**

```shell

## Single combined request

curl -X POST https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<INPUT_URL>"
    }
  },
  "edits": {
    "autoTone": true,
    "light": {
      "exposure": 1.2,
      "contrast": 10
    },
    "color": {
      "saturation": 15
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<OUTPUT_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "high"
    }
  ]
}'

## Single status check

curl -X GET https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```
