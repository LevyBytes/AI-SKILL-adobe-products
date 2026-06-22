# Execute Actions V1 Reference, Export Layers Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Execute Actions — Complete V1 Migration Reference; Export layers migration guide.

## Execute Actions — Complete V1 Migration Reference

Use this single-page reference for field-level migration details when moving from the V1 Photoshop action endpoints to `/v2/execute-actions`.

For an example-driven walkthrough, see [Actions Migration](api-actions-migration.md).

### 1. V1 endpoint coverage

| V1 Endpoint | V2 Endpoint | Notes |
| --- | --- | --- |
| `POST /pie/psdService/photoshopActions` | `POST /v2/execute-actions` | `.atn` file execution |
| `POST /pie/psdService/actionJSON` | `POST /v2/execute-actions` | Inline ActionJSON (stringified in V2) |
| `POST /pie/psdService/productCrop` | `POST /v2/execute-actions` (published action) | Convenience API |
| `POST /pie/psdService/depthBlur` | **Not yet supported** | Neural Filters unavailable in V2 |
| `POST /pie/psdService/text` | `/v2/execute-actions` | Use UXP/actions instead |
| `POST /pie/psdService/smartObjectV2` | `/v2/execute-actions` | Use UXP/actions instead |

The currently known API-visible gap is Neural Filters (Depth Blur); V2 does not yet expose them.

### 2. Request envelope

**`inputs[]` array to `image` single object.** V1 placed the image in an `inputs` array with a maximum of 1 item; V2 uses a top-level `image` object. execute-actions does not support multiple inputs.

**V1:**

```json
{ "inputs": [{ "href": "<URL>", "storage": "external" }] }
```

**V2:**

```json
{ "image": { "source": { "url": "<URL>" } } }
```

| V1 | V2 | Notes |
| --- | --- | --- |
| `inputs[0].href` | `image.source.url` | Breaking |
| `inputs[0].storage: "external"` | _(omit)_ | External URLs need no type |
| `inputs[0].storage: "adobe"` (path) | `image.source.creativeCloudPath` | No leading slash |
| `inputs[0].storage: "adobe"` (URN) | `image.source.creativeCloudFileId` |  |
| `inputs[0].storage: "acp"` | `image.source.url` | Use presigned URL |
| `outputs[].href` | `outputs[].destination.url` | Breaking |
| `outputs[].storage` | `outputs[].destination.storageType` (Azure/Dropbox only) | Breaking |
| `outputs[].type` | `outputs[].mediaType` | Breaking |

### 3. Actions (`.atn` files)

| V1 (`options.actions[n].*`) | V2 (`options.actions[n].source.*`) | Notes |
| --- | --- | --- |
| `href` (URL or path) | `url` | Breaking: nested under `source` |
| `storage: "external"` | _(omit)_ |  |
| `storage: "adobe"` (path) | `creativeCloudPath` |  |
| `storage: "adobe"` (URN) | `creativeCloudFileId` |  |
| `storage: "acp"` | `url` |  |

**Example action item rewrite from V1 to V2:**

```json
// V1
{"href": "<ACTION_URL>", "storage": "external"}

// V2
{"source": {"url": "<ACTION_URL>"}}
```

**Multiple actions (V2 only):**

V1 accepted only one action in each request. V2 can run up to **10 actions** in sequence, and the same array may freely combine the first `.atn` action with inline ActionJSON.

### 4. ActionJSON (critical breaking change)

**ActionJSON now uses an entirely different representation.** V1 kept `options.actionJSON` as inline JSON objects inside an array. V2 expects ActionJSON to arrive as a **stringified JSON string** in `options.actions[].source.content`, with `contentType: "application/json"` included.

|  | V1 | V2 |
| --- | --- | --- |
| Field | `options.actionJSON[]` | `options.actions[].source.content` |
| Format | Inline JSON array of objects | **Stringified** JSON string |
| contentType | Not required | `"application/json"` required |

**V1:**

```json
{
  "options": {
    "actionJSON": [
      { "_obj": "convertMode", "to": { "_enum": "colorSpaceMode", "_value": "grayscale" } }
    ]
  }
}
```

**V2:**

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"convertMode\",\"to\":{\"_enum\":\"colorSpaceMode\",\"_value\":\"grayscale\"}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```

### 5. Additional images / contents

**Use `options.additionalContents` in place of `options.additionalImages`.** ActionJSON placeholder text was revised as part of that rename. V2 continues to accept `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_X` for older clients, but new payloads should use `__ADDITIONAL_CONTENTS_PATH_X__`.

|  | V1 | V2 |
| --- | --- | --- |
| Field name | `options.additionalImages[]` | `options.additionalContents[]` |
| Item structure | `{href, storage}` | `{source: {url}}` |
| Placeholder (ActionJSON) | `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` | `__ADDITIONAL_CONTENTS_PATH_0__` |
| Max items | 25 | 25 |

**V1:**

```json
{
  "options": {
    "additionalImages": [{ "href": "<OVERLAY_URL>", "storage": "external" }],
    "actionJSON": [
      { "_obj": "placeEvent", "null": { "_path": "ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0" } }
    ]
  }
}
```

**V2:**

```json
{
  "options": {
    "additionalContents": [{ "source": { "url": "<OVERLAY_URL>" } }],
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"placeEvent\",\"null\":{\"_path\":\"__ADDITIONAL_CONTENTS_PATH_0__\",\"_kind\":\"local\"}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```

### 6. Additional resources (fonts, brushes, patterns)

| V1 | V2 | Notes |
| --- | --- | --- |
| `options.fonts[]` with `{href, storage}` | `options.fontOptions.additionalFonts[]` with `{source: {url}}` | Breaking: renamed + wrapped in `fontOptions` |
| `options.brushes[].href` | `options.brushes[].source.url` | Breaking: nested |
| `options.brushes[].storage` | _(implicit)_ |  |
| `options.patterns[].href` | `options.patterns[].source.url` | Breaking: nested |
| `options.patterns[].storage` | _(implicit)_ |  |
| _(not in V1)_ | `fontOptions.missingFontStrategy` | New: `"use_default"` or `"fail"` |
| _(not in V1)_ | `fontOptions.defaultFontPostScriptName` | New: fallback font |

**Resource limits:**

| Resource | V1 | V2 |
| --- | --- | --- |
| Fonts | Undocumented | **10** (in `fontOptions.additionalFonts`) |
| Brushes | Undocumented | **10** |
| Patterns | Undocumented | **10** |

Fonts, brushes, patterns, and additional images all need to point to external files. V2 does **not** accept inline binary payloads for these resource types.

### 7. Removed V1 options

| V1 Field | V2 Status | Notes |
| --- | --- | --- |
| `options.costOptimization` (boolean) | **Removed** | No equivalent; optimization is internal in V2 |
| `outputs[].includeMetadata` (boolean) | **Removed** | No equivalent; implicit behavior |
| `outputs[].embedICCProfiles` (boolean) | **Replaced** | Use `outputs[].iccProfile` object instead |

### 8. Output fields

| V1 | V2 | Notes |
| --- | --- | --- |
| `href` | `destination.url` | Breaking |
| `storage` | `destination.storageType` (Azure/Dropbox only) | Breaking |
| `type` | `mediaType` | Breaking |
| `quality` (number, 1–12) | `quality` (string enum) | Breaking: see quality table |
| `compression` (`small`/`medium`/`large`) | `compression` (10-level enum) | Breaking |
| `overwrite` (boolean) | `shouldOverwrite` (boolean) | Breaking: renamed |
| `includeMetadata` (boolean) | **Removed** | No equivalent |
| `embedICCProfiles` (boolean) | **Removed** | Use `iccProfile` object |
| _(not in V1)_ | `width`, `height`, `maxWidth` | New |
| _(not in V1)_ | `iccProfile` object | New (replaces `embedICCProfiles`) |
| _(not in V1)_ | `destination.embedded` (`base64`/`string`/`json`) | New |
| _(not in V1)_ | `destination.validityPeriod` (60–86400 sec) | New |
| _(not in V1)_ | `scriptOutputPattern` (glob string) | New; UXP only; hosted/embedded destinations only |

### 9. JPEG quality mapping

| V1 (numeric) | V2 (string enum) |
| --- | --- |
| 1–2 | `"very_poor"` / `"poor"` |
| 3–4 | `"low"` / `"medium"` |
| 5–6 | `"high"` |
| 7–8 | `"maximum"` |
| 9–12 | `"photoshop_max"` |

For final production output at the top quality setting, choose `"photoshop_max"`. V2 rejects numeric quality input during validation.

### 10. PNG compression mapping

| V1 | V2 |
| --- | --- |
| `"small"` | `"maximum"` |
| `"medium"` | `"medium"` |
| `"large"` | `"low"` |
| _(not in V1)_ | `"none"`, `"very_low"`, `"medium_low"`, `"medium_high"`, `"default"`, `"high"`, `"very_high"` |

### 11. Supported output formats

| Format | V1 `type` | V2 `mediaType` | Notes |
| --- | --- | --- | --- |
| JPEG | `image/jpeg` | `image/jpeg` |  |
| PNG | `image/png` | `image/png` |  |
| TIFF | `image/tiff` | `image/tiff` |  |
| PSD | `image/vnd.adobe.photoshop` or `vnd.adobe.photoshop` | `image/vnd.adobe.photoshop` | V2 normalizes |
| GIF | `image/gif` | Not confirmed in V2 | Present in V1 only |
| PSDC | Not supported | `document/vnd.adobe.cpsd+dcxucf` | New in V2 |
| JSON | Not supported | `application/json` | New in V2 |

### 12. Convenience API migration

V1 convenience endpoints depended on predefined action files hosted server side. In V2, those same action files are published for direct use through `/v2/execute-actions`; the full ActionJSON bodies live in the migration guide for each API.

| V1 Endpoint | V2 Approach | Guide |
| --- | --- | --- |
| `productCrop` | Published ActionJSON | [Product Crop](api-convenience-apis.md) |
| `depthBlur` | **Not yet supported** | Neural Filters unavailable in V2 |

### 13. Resource limits summary

| Resource | V1 | V2 |
| --- | --- | --- |
| Input images | 1 | 1 |
| Actions | 1 | **10** (can mix `.atn` and inline) |
| Additional images/contents | 25 | 25 |
| Brushes | Undocumented | **10** |
| Patterns | Undocumented | **10** |
| Fonts | Undocumented | **10** |
| UXP scripts | 0 | 1 (limited availability) |
| Outputs | Undocumented | **25** |

### 14. Complete migration checklist

- [ ] Use `image.source.url` (or `creativeCloudPath` / `creativeCloudFileId`) instead of `inputs[0].href` + `storage`
- [ ] Use `outputs[].destination.url` (or CC / hosted / embedded) instead of `outputs[].href` + `storage`
- [ ] Change `outputs[].type` to `outputs[].mediaType`
- [ ] Convert `options.actions[].href` + `storage` into `options.actions[].source.url`
- [ ] Convert ActionJSON from `options.actionJSON[...]` into a JSON string in `options.actions[].source.content`, plus `contentType: "application/json"`
- [ ] Rename `options.additionalImages[]` as `options.additionalContents[]`, and change each item to the `source.url` structure
- [ ] Change placeholders from `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` to `__ADDITIONAL_CONTENTS_PATH_0__`
- [ ] Rename `options.fonts[]` as `options.fontOptions.additionalFonts[]`, and change each item to the `source.url` structure
- [ ] Convert `options.brushes[].href` + `storage` into `options.brushes[].source.url`
- [ ] Convert `options.patterns[].href` + `storage` into `options.patterns[].source.url`
- [ ] Delete `options.costOptimization`; V2 has no matching field
- [ ] Move JPEG `quality` away from numeric values (1-12) and use a string enum
- [ ] Move PNG `compression` away from `small`/`medium`/`large` and use the V2 enum set
- [ ] Change output `overwrite` to `shouldOverwrite`
- [ ] Delete output `includeMetadata` and `embedICCProfiles`; include an `iccProfile` object only when needed
- [ ] Verify V2 resource totals stay within the limits: 10 for brushes/patterns/fonts and 25 for outputs

### 15. New and noteworthy additional features

1. **Scripting support**: Server-side execution is now available for UXP scripts, which run inside a sandbox where network and disk access are limited.
2. **Generative AI**: Actions expose most generative features from Photoshop Desktop; examples include People Distractor, Wire Distractor, Generative Expand, and Generative Fill.
3. **Dynamic text**: Dynamic text can now be used through Actions and UXP scripting.
4. **Better background removal**: Background-removal capability has been improved.

### See also

- [Actions Migration](api-actions-migration.md) — Guided walkthrough with examples and best practices
- [Output Types Migration](api-output-types-migration.md) — JPEG, PNG, TIFF output format details
- [ICC Profile Migration](api-v1-to-v2-3.md) — Color management options
- [Product Crop](api-convenience-apis.md) — Full ActionJSON definition

## Export layers migration guide

Use this migration guide when moving **exporting one or more layers** from a document to `/v2/create-composite`. It covers schema updates, single-layer enum support, PSD availability for single-layer output only, the current lack of PSD support for multi-layer output, default quality/compression behavior, and paired v1/v2 request samples.

### Key differences (single-layer vs multi-layer export)

- **Single-layer export** – With one layer listed in `output.layers`, export that layer's pixels. JPEG, PNG, TIFF, and PSD are supported.
- **Multi-layer export** – With two or more layers listed in `output.layers`, render those layers together into one raster output. JPEG, PNG, and TIFF are supported; **PSD is not supported for multi-layer export as of now.**

### Enum support (v2)

### Crop mode (`cropMode`)

**V1 migration note — single-layer output dimensions**

V1 produced single-layer exports using the **document/canvas dimensions** no matter where the layer sat or how large it was. V2 uses `layer_bounds` by default, which makes the output match the layer rather than the full canvas. To keep the canvas-sized result expected by a V1 workflow, explicitly set `cropMode: "document_bounds"`.

This setting chooses the bounding box used for exported content. It applies to single-layer, multi-layer, and document export, but `layer_bounds` has one limit: it is valid only when exporting a single layer.

| Value | Description | Single-layer | Multi-layer | Document export |
| --- | --- | --- | --- | --- |
| `layer_bounds` | Use the layer's own bounds (default for single-layer export). | Yes | No | No |
| `trim_to_transparency` | Crop to tight bounds of non-transparent pixels. | Yes | Yes | Yes |
| `document_bounds` | Use full document (or artboard) bounds (default for document/multi-layer export). | Yes | Yes | Yes |

**INFO**

When `layer_bounds` is supplied for multi-layer or document export, validation fails. Use `trim_to_transparency` or `document_bounds` for those export modes.

### Media type (`mediaType`)

Single-layer export in v2 accepts `image/jpeg`, `image/png`, `image/tiff`, and `image/vnd.adobe.photoshop` (PSD). Full enum coverage is in [Output Types Migration](api-output-types-migration.md).

### Defaults when exporting layers

- **Omitted JPEG quality:** defaults to `photoshop_max`. The accepted values are `very_poor`, `poor`, `low`, `medium`, `high`, `maximum`, and `photoshop_max`.
- **Omitted PNG compression:** defaults to `default` (level 6); `medium`, `maximum`, and other values are also accepted. See [Output Types Migration – PNG](api-output-types-migration.md).

### ICC profile support for layer export

The optional output field `iccProfile` works for both single-layer and multi-layer exports. Use it to perform ICC color-space conversion while exporting chosen layers, including conversions to sRGB, Adobe RGB, grayscale, or custom profiles.

- Supported layer export formats with ICC handling are JPEG, TIFF, and PSD for single-layer output; JPEG and TIFF for multi-layer output. **PNG does not support ICC profiles**
- Each output object in one request may specify its own independent `iccProfile`
- A single request may mix outputs that include `iccProfile` with outputs that omit it
- Standard ICC profiles and custom ICC profiles are both supported; [ICC Profile Migration](api-v1-to-v2-3.md) gives the full schema

### Example: single-layer export with ICC profile

```json
{
  "outputs": [
    {
      "destination": { "url": "https://example.com/out.tif" },
      "mediaType": "image/tiff",
      "layers": [{ "id": 1096 }],
      "iccProfile": {
        "type": "standard",
        "name": "sRGB IEC61966-2.1"
      }
    }
  ]
}
```

### Example: multi-layer export with ICC profile

```json
{
  "outputs": [
    {
      "destination": { "url": "https://example.com/out.jpg" },
      "mediaType": "image/jpeg",
      "layers": [{ "id": 1096 }, { "id": 996 }],
      "quality": "high",
      "iccProfile": {
        "type": "standard",
        "name": "Adobe RGB (1998)"
      }
    }
  ]
}
```

### Sample: single-layer export

**Schema changes (single-layer):** Use `image.source.url` instead of `inputs[].href`; use `outputs[].destination.url` instead of `outputs[].href`; replace `outputs[].type` with `outputs[].mediaType`; keep `outputs[].layers` assigned per output. V2 also allows optional `cropMode` plus string enum values for `quality` / `compression`.

**Layer identifier: mutually exclusive.** Every item in `outputs[].layers[]` must contain **either** `id` or `name`, not both together. V1 accepted both as disambiguation hints, but V2 rejects that shape with: `"Each layer reference must contain exactly one of id or name (not both)."`. When `id` is available, keep it and remove `name`.

**V1 `outputs[].layers[]` with `visible` field:** Some V1 `renditionCreate`/`documentOperations` requests used `outputs[].layers[]` items such as `{id, visible: true}` to decide which layers were included in the composite export. In V2, map those entries to `outputs[].layers[]` as `[{id: N}, ...]`; that selects multi-layer composite export. Do **not** place them under `edits.layers[]`, because that route requires `type` + `operation` and edits layers rather than selecting export content.

### V1 example

```bash
curl -X POST "https://image.adobe.io/pie/psdService/renditionCreate" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": [{"href": "https://my-bucket.s3.amazonaws.com/input.psd", "storage": "external"}],
    "outputs": [{
      "href": "https://my-bucket.s3.amazonaws.com/out.png",
      "storage": "external",
      "type": "image/png",
      "layers": [{"id": 1096}],
      "compression": "medium"
    }]
  }'
```

### V2 example

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/create-composite" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "image": {"source": {"url": "https://my-bucket.s3.amazonaws.com/input.psd"}},
    "outputs": [{
      "destination": {"url": "https://my-bucket.s3.amazonaws.com/out.png"},
      "mediaType": "image/png",
      "layers": [{"id": 1096}],
      "cropMode": "trim_to_transparency",
      "compression": "medium"
    }]
  }'
```

### Sample: multi-layer export

**Schema changes (multi-layer):** PSD output is not currently supported for multi-layer export, so set `mediaType` only to `image/jpeg`, `image/png`, or `image/tiff`. For `cropMode`, use `trim_to_transparency` or `document_bounds`; do not use `layer_bounds`. Supply string enum values for `quality`, such as `maximum` or `photoshop_max`, and for PNG `compression`.

### V1 example

```bash
curl -X POST "https://image.adobe.io/pie/psdService/renditionCreate" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": [{"href": "https://my-bucket.s3.amazonaws.com/input.psd", "storage": "external"}],
    "outputs": [{
      "href": "https://my-bucket.s3.amazonaws.com/out.jpg",
      "storage": "external",
      "type": "image/jpeg",
      "layers": [{"id": 1096}, {"id": 996}],
      "quality": 7
    }]
  }'
```

### V2 example

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/create-composite" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "image": {"source": {"url": "https://my-bucket.s3.amazonaws.com/input.psd"}},
    "outputs": [{
      "destination": {"url": "https://my-bucket.s3.amazonaws.com/out.jpg"},
      "mediaType": "image/jpeg",
      "layers": [{"id": 1096}, {"id": 996}],
      "quality": "maximum",
      "cropMode": "trim_to_transparency"
    }]
  }'
```

### Migration checklist for export layers

- [ ] Prefer `outputs[].destination.url`, `outputs[].mediaType`, and `outputs[].layers` for the V2 shape.
- [ ] For exports with multiple layers, choose JPEG, PNG, or TIFF instead of PSD.
- [ ] `cropMode` values `trim_to_transparency` and `document_bounds` apply to every export type; reserve `layer_bounds` for a single layer.
- [ ] Set string enum values for `quality` (JPEG) and `compression` (PNG); leave them out to use defaults (`photoshop_max` / `default`).
- [ ] `iccProfile` remains optional for layer exports; include it when color space conversion is required (see [ICC Profile Migration](api-v1-to-v2-3.md)).

### Related guides

- [Output Types Migration](api-output-types-migration.md) - JPEG quality, PNG compression enums, media types, and output-structure updates
- [ICC Profile Migration](api-v1-to-v2-3.md) - ICC profile schema details, standard/custom profile handling, and supported formats
- [Layer Operations Overview](api-v1-to-v2-4.md) - Starting point for V2 layer operations
- [Composite Migration](api-v1-to-v2.md) - Create-composite endpoint usage and layer-operation migration
- [Migration Overview](api-v1-to-v2-3.md) - Complete V1 to V2 migration overview

**Last Updated:** March 2026
