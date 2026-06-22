# V2 Api Catalog

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

This reference catalogs V1-to-V2 behavior endpoint by endpoint for developers planning migrations. Each endpoint group lists the V1 behavior, the V2 behavior, a behavioral-change table, and pointers to the deeper guides.

For a positive view of capabilities that did not exist in V1, see [What's New in V2](api-v2-whats-new.md).

## 1. Edit operations

**V1 Endpoints:** `/lrService/autoTone`, `/lrService/autoStraighten`, `/lrService/presets`, `/lrService/xmp`, `/lrService/edit`

**V2 Endpoint:** `/v2/edit`

### V1 behavior

V1 exposed Lightroom operations as separate operation-specific endpoints. Applying several adjustments required a sequence of API calls, and each call returned a job ID to poll. Inputs combined `inputs[].href` with the `storage` discriminant. Adjustment parameters lived in `options`.

### V2 behavior

In V2, `/v2/edit` covers every Lightroom edit operation. A single request may include any mix of adjustments: `autoTone`, `autoStraighten`, `light`, `color`, `detail`, `effects`, `optics`, and XMP presets. The adjustment parameter names and value ranges match V1; the surrounding request envelope is what changed.

### Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Endpoint per operation type | `/lrService/autoTone`, `/lrService/autoStraighten`, etc. | Single `/v2/edit` for all | Breaking Change |
| Input specification | `inputs[0].href` + `"storage": "external"` | `image.source.url` | Breaking Change |
| Adjustment parameters location | `options` block | Top-level fields (`autoTone`, `light`, `color`, etc.) | Breaking Change |
| Output destination | `outputs[0].href` + `"storage": "external"` | `outputs[0].destination.url` | Breaking Change |
| Output format field | `"type": "image/jpeg"` | `"mediaType": "image/jpeg"` | Breaking Change |
| Multiple operations per request | Unsupported; one operation per call | Supported; combine any adjustments | Net New |
| Adjustment parameter values | Same | Same | Unchanged |
| Authentication | OAuth Server-to-Server | OAuth Server-to-Server (unchanged) | Unchanged |

### Guide

[Edit Operations Migration](api-edit-operations.md)

## 2. Composite and layer operations

**V1 Endpoints:** `/pie/psdService/renditionCreate`, `/pie/psdService/documentCreate`, `/pie/psdService/documentOperations`, layer operations via `documentOperations`

**V2 Endpoint:** `/v2/create-composite`

### V1 behavior

V1 spread this surface across four endpoints that V2 now unifies:

- `renditionCreate` - converts PSD files to JPEG, PNG, or TIFF only
- `documentCreate` - creates a blank document
- `documentOperations` - changes existing documents, including resize, crop, trim, and layer add/edit/delete work
- `smartObject` - handles placing or replacing smart object content through a dedicated endpoint

Inside `documentOperations`, layer operations were passed as an `options.layers` array. Layer types used camelCase names such as `layerSection`, `textLayer`, and `smartObject`.

### V2 behavior

V2 brings these operations together under `/v2/create-composite`. Requests use `image.source` for the input, `edits` for the operation list, and `outputs` for the results. Layer type names are snake_case. Processing follows the `edits.layers` array from top to bottom, and array index alone does not set layer position.

### Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Endpoint consolidation | Four separate endpoints (`renditionCreate`, `documentCreate`, `documentOperations`, `smartObject`) | Single `/v2/create-composite` | Breaking Change |
| Input field | `inputs[0].href` | `image.source.url` | Breaking Change |
| Operations block | `options` | `edits` | Breaking Change |
| `operation.type` required on layer edits | Not required | Required: `"add"`, `"edit"`, `"delete"`, `"move"` | Breaking Change |
| Layer type names | camelCase (`layerSection`, `textLayer`, etc.) | snake_case (`group_layer`, `text_layer`, etc.) | Breaking Change |
| Processing order | Not strictly defined | Top-down through `edits.layers` array | Breaking Change |
| `referenceLayer` for relative positioning | Not available | Supported | Net New |
| `protection` array | `locked: boolean` | `protection: ["position", "transparency", ...]` | Breaking Change |
| Group layer type name | `layerSection` | `group_layer` | Renamed |
| `isClipped` for clipping masks | Not available | Supported | Net New |
| `pixelMask.delete` to remove a pixel mask | Not available | `pixelMask: { "delete": true }` on edit operations | Net New |
| Multiple outputs per request | Single output | Up to N outputs | Net New |

### Guide

[Layer Operations Overview](api-v1-to-v2-4.md), then choose the focused guide:

- [Image Layers](api-v1-to-v2-4.md)
- [Text Layers](api-layer-operations-text.md)
- [Adjustment Layers](api-layer-operations-adjustments.md)
- [Smart Objects](api-layer-operations-smart-objects.md)
- [Advanced Operations](api-layer-operations-advanced.md)
- [Document Creation](api-document-creation-migration.md)
- [Document Operations](api-document-operations-migration.md)
- [Format Conversion](api-format-conversion-migration.md)

For the dedicated V1 `/psdService/smartObject` endpoint:
[Smart Object Place/Replace Migration](api-layer-operations-smart-objects.md)

## 3. Actions and scripts

**V1 Endpoints:** `/pie/psdService/photoshopActions`, `/pie/psdService/actionJSON`, `/pie/psdService/productCrop`, `/pie/psdService/depthBlur`

**V2 Endpoint:** `/v2/execute-actions`

### V1 behavior

V1 separated action work by action type: `photoshopActions` handled `.atn` files, `actionJSON` accepted inline action commands, and convenience endpoints covered specific operations such as product crop and split view. Those convenience endpoints ran server-side action assets that were opaque to developers and unavailable for inspection or edits.

### V2 behavior

V2 routes all action types through `/v2/execute-actions`. The `options` block now carries an array of action objects, each with a `type` discriminant: `"photoshopActions"`, `"actionJSON"`, or `"uxp"`. UXP scripts, written as ES6+ JavaScript, are newly available beside the existing action types. V1 convenience API action files are now published and can be supplied through `additionalContents`.

Depth Blur (`/pie/psdService/depthBlur`) is **not yet supported in V2**; the required Neural Filters support has not landed. Status details are in [Depth Blur Migration](api-convenience-apis.md).

### Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Endpoint per action type | Separate endpoints | Single `/v2/execute-actions` | Breaking Change |
| Input field | `inputs[0].href` | `image.source.url` | Breaking Change |
| Action type discriminant | Implied by endpoint | `options[].type` required | Breaking Change |
| Action file reference | `inputs[].href` with `"storage"` | `options[].photoshopAction.source.url` | Breaking Change |
| ActionJSON inline commands | `options.actions` array | `options[].actionJSON.commands` array | Breaking Change |
| UXP script support | Not available | `options[].type: "uxp"` with `source.content` | Net New |
| `additionalContents` (supply action file deps) | Not available | Supported | Net New |
| `scriptOutputPattern` for dynamic outputs | Not available | Supported for UXP scripts | Net New |
| `plugin-temp:/` virtual path in scripts | Not available | Supported for inter-script file exchange | Net New |
| Convenience action files inspectable | Hidden server-side | Published, downloadable | Net New |
| Depth Blur | Available | Not yet supported | Removed (temporarily) |
| Dedicated text endpoint | `/pie/psdService/text` (declarative `options.layers` text edits) | `/v2/execute-actions` (ActionJSON or UXP) | Breaking Change |

### Guide

[Actions Migration](api-actions-migration.md)

For the dedicated V1 `/psdService/text` endpoint:
[Text Layer Operations Migration](api-text-layer-operations.md)

## 4. Manifest generation

**V1 Endpoint:** `/pie/psdService/documentManifest`

**V2 Endpoint:** `/v2/generate-manifest`

### V1 behavior

In V1, `documentManifest` produced a layer hierarchy with basic layer metadata: `name`, camelCase `type`, bounds in `height`/`width`/`left`/`top` form, a presigned S3 thumbnail URL string, and a simple `locked` boolean. Artboards appeared the same as group layers. Smart object data used a flat shape containing `instanceId`, `name`, `path`, and MIME-type `type`. The document section included `bitDepth`, `iccProfileName`, and `name`.

### V2 behavior

The V2 `generate-manifest` response expands the layer tree substantially. Layer type strings move to snake_case. Bounds are expressed as `{left, top, right, bottom}`. Thumbnail data is returned as `{mediaType, url}` objects that target `/v2/short-url/` redirects. Artboards now have their own `type: "artboard"` entry with full geometry and preset details. Smart objects include `extracted.url` for downloading embedded content. The document section also adds `xmp`, `resolution`, `globalLightingAngle`, plus additional fields.

### Layer type renames

| V1 Type | V2 Type |
| --- | --- |
| `adjustmentLayer` | `adjustment_layer` |
| `backgroundLayer` | `background_layer` |
| `fillLayer` | `solid_color_layer` |
| `layer` | `layer` |
| `layerSection` (group) | `group_layer` |
| `layerSection` (artboard) | `artboard` |
| `smartObject` | `smart_object_layer` |
| `textLayer` | `text_layer` |

### Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Layer type names | camelCase | snake_case | Breaking Change |
| Bounds format | `{height, left, top, width}` | `{left, top, right, bottom}` | Breaking Change |
| Thumbnail field | String URL (direct S3) | `{mediaType, url}` object (`/v2/short-url/` redirect) | Breaking Change |
| `locked` field | `boolean` | Replaced by `protection` array | Breaking Change |
| `rotate` field | number | Renamed to `rotation` | Renamed |
| `mask` field | `{enabled, linked, offset.x/y, type}` | Renamed to `pixelMask`; `offset.x/y` → `offset.horizontal/vertical` | Breaking Change |
| Artboard type | `layerSection` (same as groups) | `type: "artboard"` with `typeAttributes.artboard` | Net New |
| Artboard children key | `children[]` | `layers[]` | Breaking Change |
| Smart object structure | Flat `{instanceId, linked, name, path, type}` | Nested `{isLinked, isValid, smartObjectData, extracted}` | Breaking Change |
| Smart object MIME type field | `type` string | `smartObjectData.fileInfo.fileType` short code | Breaking Change |
| `extracted.url` on embedded smart objects | Not available | Available | Net New |
| Document `bitDepth` | `bitDepth` | `depth` | Renamed |
| Document `iccProfileName` | `iccProfileName` | `iccProfile` | Renamed |
| Document `name` | `name` | `title` | Renamed |
| Document `photoshopBuild` | Present | Removed | Removed |
| Document XMP | Not available | `document.xmp` | Net New |
| Document resolution | Not available | `document.resolution` | Net New |
| `compositeFrame` / `referenceFrame` per layer | Not available | Available | Net New |
| `layerSettings` block (warp, FXRefPoint) | Not available | Available | Net New |
| `blendRanges` in `blendOptions` | Not available | Available | Net New |
| `ccLibrariesElement` on smart objects | Not available | Available | Net New |
| `options.includeXmp` | Not available | Supported | Net New |
| `options.maximumThumbnailDepth` | Not available | Supported | Net New |
| `options.trimToTransparency` | Not available | Supported | Net New |

For field-by-field migration details, consult [Manifest Response Migration](api-manifest-response-migration.md).

### Guide

[Manifest Migration](api-manifest-migration.md) · [Manifest Response Migration](api-manifest-response-migration.md)

## 5. Artboard creation

**V1 Endpoint:** `/pie/psdService/artboardCreate`

**V2 Endpoint:** `/v2/create-artboard`

### V1 behavior

The V1 `artboardCreate` request took a flat image-input list and generated a new PSD with one artboard for each image. The top-level `inputs[]` array carried the image entries together with output settings.

### V2 behavior

For V2, `/v2/create-artboard` separates image data into an `images[]` array. Each array item supplies a `source` object and an `id` used for ordering. `artboardSpacing` controls spacing between generated artboards. The enclosing request shape follows V2 conventions and still uses `outputs[]`.

### Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Input specification | `inputs[].href` + `storage` | `images[].source.url` | Breaking Change |
| Image identifier | Order-based (array index) | `images[].id` field | Breaking Change |
| Artboard spacing control | Not available | `artboardSpacing` field | Net New |
| At least one image required | Not enforced | Validated; empty `images[]` returns an error | Breaking Change |

### Guide

[Artboard Migration](api-v1-to-v2.md)

## 6. Job status

**V1 Endpoints:** `/pie/psdService/status/{jobId}`, `/lrService/status/{jobId}`

**V2 Endpoint:** `/v2/status/{jobId}`

### V1 behavior

V1 exposed separate status URLs for each service. Photoshop jobs used `/pie/psdService/status/{jobId}`, while Lightroom jobs used `/lrService/status/{jobId}`. Response shapes depended on the service that created the job.

### V2 behavior

V2 routes every job-status lookup through `/v2/status/{jobId}`, no matter which operation submitted the work. The response carries a `status` value (`pending`, `running`, `succeeded`, `failed`), an `outputs` array with status and destination URL details per output, and structured `errors` entries.

### Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Endpoint per service | Separate endpoints for PS and LR | Single `/v2/status/{jobId}` | Breaking Change |
| Status field name | Varies by service | `status` (consistent) | Breaking Change |
| Output URLs in status response | Varies | `outputs[].destination.url` | Breaking Change |
| Error structure | Varies | Structured `errors[]` array | Breaking Change |

### Guide

[Status Migration](api-status-migration.md)

## 7. Cross-cutting changes

The following items affect **all V2 endpoints**.

### Base URLs

| Environment | V1 Base URL | V2 Base URL |
| --- | --- | --- |
| Production | `https://image.adobe.io` | `https://photoshop-api.adobe.io` |

### Request structure

| Element | V1 | V2 |
| --- | --- | --- |
| Input | `inputs[0].href` + `"storage": "external"` | `image.source.url` |
| Storage type discriminant | `"storage": "external"` / `"s3"` / `"azure"` / etc. | Destination object shape carries this implicitly |
| Operations block | `options` | `edits` (for composite/document ops) or top-level fields (for edit ops) |
| Output destination | `outputs[0].href` + `storage` | `outputs[0].destination.url` |
| Output format | `"type": "image/jpeg"` | `"mediaType": "image/jpeg"` |

### Storage options

| Storage Type | V1 | V2 |
| --- | --- | --- |
| Presigned URL (S3) | `"storage": "external"` | `{"url": "..."}` in destination |
| Azure Blob | `"storage": "azure"` | `{"url": "..."}` in destination |
| Dropbox | `"storage": "dropbox"` | `{"url": "..."}` in destination |
| Creative Cloud | `"storage": "adobe"` | `{"creativeCloudPath": "..."}` or `{"creativeCloudFileId": "..."}` |
| Embedded | Not available | `{"embedded": "base64"}` / `{"embedded": "string"}` / `{"embedded": "json"}` |
| Hosted (Adobe-managed) | Not available | `{"validityPeriod": N}` (seconds, 60–86400) |
| AWS S3 `storage` field | `"storage": "s3"` (deprecated) | Use the presigned URL pattern instead |

OAuth Server-to-Server credentials carry over from V1 to V2; authentication does not change.

### Output format changes

| Format | V1 | V2 | Type |
| --- | --- | --- | --- |
| JPEG quality | Numeric `1–100` | String enum: `"low"`, `"medium"`, `"high"`, `"maximum"` | Breaking Change |
| PNG compression | Scale `0–2` (3 levels) | Scale `"default"`, or `0–9` (10 levels) | Breaking Change |
| TIFF compression | Named string | Named string (unchanged) | Unchanged |
| PSD output | Supported | Supported (unchanged) | Unchanged |
| Cloud PSD (`.psdc`) | Supported via Sensei engine | `mediaType: "document/vnd.adobe.cpsd+dcxucf"` | Renamed |
| ICC profile per output | Not available | `iccProfile: {standard: "..."}` or `{custom: {...}}` | Net New |

### Error response structure

V2 standardizes the error payload format for every endpoint:

```json
{
  "errors": [
    {
      "code": "INPUT_EXCEEDS_MAX_SIZE",
      "message": "Input file exceeds maximum allowed size of 100MB"
    }
  ]
}
```

V1 services did not share one error schema.

### Guide

[Output Types Migration](api-output-types-migration.md) · [ICC Profile Migration](api-v1-to-v2-3.md) · [Storage Solutions](https://raw.githubusercontent.com/getting-started/storage-solutions/index.md)

## 8. Breaking changes checklist

Use this checklist when reviewing a codebase for V2 migration work.

### Authentication and connectivity

- [ ] Set `photoshop-api*.adobe.io` as the replacement for `image*.adobe.io`
- [ ] No authentication action is required; credentials stay the same

### Request structure

- [ ] Use `image.source.url` in place of `inputs[0].href` + `"storage"`
- [ ] For composite/document requests, use `edits`; for edit requests, use top-level fields instead of `options`
- [ ] Put output URLs in `outputs[0].destination.url`, or use `embedded`/`hosted`, instead of `outputs[0].href` + `"storage"`
- [ ] In outputs, use `"mediaType": "image/jpeg"` rather than `"type": "image/jpeg"`

### Endpoint changes

- [ ] All `/lrService/*` calls → `/v2/edit`
- [ ] `/pie/psdService/renditionCreate` → `/v2/create-composite`
- [ ] `/pie/psdService/documentCreate` → `/v2/create-composite`
- [ ] `/pie/psdService/documentOperations` → `/v2/create-composite`
- [ ] `/pie/psdService/photoshopActions` → `/v2/execute-actions`
- [ ] `/pie/psdService/actionJSON` → `/v2/execute-actions`
- [ ] `/pie/psdService/productCrop` → `/v2/execute-actions` (with published action file)
- [ ] `/pie/psdService/artboardCreate` → `/v2/create-artboard`
- [ ] `/pie/psdService/documentManifest` → `/v2/generate-manifest`
- [ ] `/pie/psdService/status/{jobId}` → `/v2/status/{jobId}`
- [ ] `/lrService/status/{jobId}` → `/v2/status/{jobId}`

### Action requests

- [ ] Add `options[].type` discriminant (`"photoshopActions"`, `"actionJSON"`, `"uxp"`)
- [ ] Move action file reference to `options[].photoshopAction.source.url`
- [ ] Move inline ActionJSON to `options[].actionJSON.commands`

### Layer operation requests

- [ ] Supply `operation.type` for each layer operation (`"add"`, `"edit"`, `"delete"`, `"move"`)
- [ ] For request layer-type values, map `layerSection` → `group_layer`, `textLayer` → `text_layer`, `smartObject` → `smart_object_layer`, and `fillLayer` → `solid_color_layer` (new-document group-layer creation remains an upcoming feature; existing-document edits can use `into` + `referenceLayer` to place a layer inside a group)
- [ ] Replace `locked: true` with `protection: ["all"]`

### Manifest response parsing

- [ ] Compare layer type strings after moving from camelCase to snake_case; background entries should be `background_layer` and omit `typeAttributes`
- [ ] For bounds parsing, stop reading `height`/`width` and derive size from `{left, top, right, bottom}`
- [ ] For thumbnails, parse a `{mediaType, url}` object instead of a plain string
- [ ] Read `pixelMask` instead of `mask`; map `offset.x/y` → `offset.horizontal/vertical`
- [ ] Read the `protection` array instead of the `locked` boolean
- [ ] Traverse artboards through `layers[]`; do not use `children[]`
- [ ] Parse smart objects as nested `smartObjectData.fileInfo.*` data rather than flat data
- [ ] Map document fields: `bitDepth` → `depth`, `iccProfileName` → `iccProfile`, `name` → `title`

### Output format

- [ ] Convert numeric JPEG quality values to string enums (`7` → `"maximum"`, etc.)
- [ ] Revise PNG compression settings when values above `2` are in use

## See also

- [Unsupported](uxp-unsupported.md)
