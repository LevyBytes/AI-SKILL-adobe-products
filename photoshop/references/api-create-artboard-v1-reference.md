# Create Artboard V1 Reference

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this field-level reference when converting V1 `/pie/psdService/artboardCreate` requests into V2 `/v2/create-artboard` requests.

For a walkthrough that includes examples and recommended practices, see [Artboard Migration](api-v1-to-v2.md).

## 1. Endpoint and base URL

|  | V1 | V2 |
| --- | --- | --- |
| **Endpoint** | `POST /pie/psdService/artboardCreate` | `POST /v2/create-artboard` |
| **Base URL** | `https://image.adobe.io` | `https://photoshop-api.adobe.io` |
| **Status check** | `GET /pie/psdService/status/{jobId}` | `GET /v2/status/{jobId}` |

## 2. Request envelope

**V2 does not keep the top-level request wrapper used by V1.** V1 placed input images inside `options.artboard[]`; V2 instead uses a root-level `images[]` array. The `options` container is removed entirely.

**V1:**

```json
{
  "options": {
    "artboard": [
      {"href": "<IMAGE_1_URL>", "storage": "external"},
      {"href": "<IMAGE_2_URL>", "storage": "external"}
    ]
  },
  "outputs": [...]
}
```

**V2:**

```json
{
  "images": [
    {"source": {"url": "<IMAGE_1_URL>"}},
    {"source": {"url": "<IMAGE_2_URL>"}}
  ],
  "artboardSpacing": 50,
  "outputs": [...]
}
```

| V1 field | V2 field | Notes |
| --- | --- | --- |
| `options.artboard[]` | `images[]` | Breaking: `options` wrapper is removed |
| `outputs[]` | `outputs[]` | Still at the top level |
| _(not in V1)_ | `artboardSpacing` | New: integer, pixels, optional (default 50) |

## 3. Input image fields

### Field mapping

| V1 (`options.artboard[n].*`) | V2 (`images[n].source.*`) | Notes |
| --- | --- | --- |
| `href` (any URL) | `url` (presigned HTTPS URL) | Breaking: field is now `url` under `source` |
| `storage: "external"` | _(omit storageType)_ | External URL inputs omit storage type |
| `storage: "adobe"` + CC path | `creativeCloudPath: "folder/file.jpg"` | Breaking: use the dedicated CC path field; **no leading slash** |
| `storage: "adobe"` + URN | `creativeCloudFileId: "urn:aaid:sc:..."` | Breaking: CC file ID is supplied in its own field |
| `storage: "acp"` | `url` (ACP presigned URL) | Supply the presigned URL directly |
| `storage: "azure"` | `url` (Azure presigned URL) | Omit storageType on inputs |
| `storage: "dropbox"` | `url` (Dropbox URL) | Omit storageType on inputs |
| `storage: "cclib"` | `creativeCloudFileId: "urn:aaid:sc:..."` | Use the file ID for CC Library content |
| _(not in V1)_ | `lightroomPath` | New: catalog path for Lightroom |

### Array constraints

|  | V1 | V2 |
| --- | --- | --- |
| Minimum images | 1 | 1 |
| Maximum images | Not documented | **25** (returns an error above the limit) |

**V2 allows no more than 25 input images.** V1 did not publish a limit. When a workflow has more than 25 images, divide it across requests. V2 message: `"images must contain between 1 and 25 items"`

### Storage to source mapping examples

**External presigned URL (S3, Frame.io, Google Drive):**

```json
// V1
{"href": "<PRESIGNED_URL>", "storage": "external"}

// V2
{"source": {"url": "<PRESIGNED_URL>"}}
```

**Creative Cloud path:**

```json
// V1
{"href": "/path/to/image.jpg", "storage": "adobe"}

// V2 -- note: no leading slash in V2
{"source": {"creativeCloudPath": "path/to/image.jpg"}}
```

**Creative Cloud file ID:**

```json
// V1
{"href": "urn:aaid:sc:US:...", "storage": "adobe"}

// V2
{"source": {"creativeCloudFileId": "urn:aaid:sc:US:..."}}
```

## 4. Artboard spacing

| Field | V1 | V2 |
| --- | --- | --- |
| `artboardSpacing` | Not present | Optional pixel integer |
| Default | N/A | 50 pixels |
| Location | N/A | Root-level peer of `images` and `outputs` |

The service places artboards in a left-to-right horizontal row. It inserts the configured gap between each neighboring pair. Total output width = sum of image widths + (spacing × (image count − 1)).

## 5. Output fields

**V2 replaces three V1 boolean output fields with a renamed boolean plus one enum:** `overwrite: boolean` becomes `shouldOverwrite: boolean`; `trimToCanvas: boolean` maps to `cropMode: "trim_to_transparency"` or `"document_bounds"`; `trimToLayer: boolean` maps to `cropMode: "layer_bounds"`.

| V1 field | V2 field | Notes |
| --- | --- | --- |
| `href` | `destination.url` | Breaking: field moves under `destination` |
| `storage` | `destination.storageType` (Azure/Dropbox only) | Breaking: most storage types no longer use it |
| `type` | `mediaType` | Breaking: name changes |
| `quality` (number 1-7) | `quality` (string enum) | Breaking: value type changes |
| `compression` (`small`/`medium`/`large`) | `compression` (10-level enum) | Breaking: enum values differ |
| `width` | `width` | Unchanged |
| `maxWidth` | `maxWidth` | Unchanged |
| `overwrite` | `shouldOverwrite` | Breaking: name changes |
| `trimToCanvas` | _(removed)_ | Breaking: replace with `cropMode` |
| `trimToLayer` | _(removed)_ | Breaking: replace with `cropMode` |
| _(not in V1)_ | `height` | New: output height can be set directly |
| _(not in V1)_ | `cropMode` | New: accepts `trim_to_transparency`, `document_bounds`, `layer_bounds` |
| `layers` | `layers` (max 100 items) | Same idea; V2 caps the list at 100 items |
| `iccProfile` | `iccProfile` (not for PSDC output) | Same idea; PSDC output is restricted in V2 |

### Output array constraints

Each V1 or V2 request must specify between 1 and 25 outputs.

## 6. JPEG quality mapping

| V1 (numeric) | V2 (string enum) |
| --- | --- |
| 1 | `"very_poor"` |
| 2 | `"poor"` |
| 3-4 | `"medium"` |
| 5-6 | `"high"` |
| 7 | `"maximum"` |
| _(not in V1)_ | `"low"` |
| _(not in V1)_ | `"photoshop_max"` |

For production workflows, make `"photoshop_max"` the default because it gives JPEG output the highest quality. A numeric value such as `7` produces a V2 validation error.

## 7. PNG compression mapping

| V1 (string) | V2 (string) | Level |
| --- | --- | --- |
| `"small"` | `"maximum"` | Most compression; smallest file |
| `"medium"` | `"medium"` | Middle-ground compression |
| `"large"` | `"low"` | Lowest compression; largest file |
| _(not in V1)_ | `"none"` | Compression disabled |
| _(not in V1)_ | `"very_low"` |  |
| _(not in V1)_ | `"medium_low"` |  |
| _(not in V1)_ | `"medium_high"` |  |
| _(not in V1)_ | `"default"` | Level 6 (library default) |
| _(not in V1)_ | `"high"` |  |
| _(not in V1)_ | `"very_high"` |  |

## 8. Supported output formats

| Format | V1 `type` | V2 `mediaType` | Notes |
| --- | --- | --- | --- |
| JPEG | `image/jpeg` | `image/jpeg` |  |
| PNG | `image/png` | `image/png` |  |
| TIFF | `image/tiff` | `image/tiff` |  |
| PSD | `image/vnd.adobe.photoshop` or `vnd.adobe.photoshop` | `image/vnd.adobe.photoshop` | V2 normalizes |
| PSDC | Not supported | `document/vnd.adobe.cpsd+dcxucf` | **New in V2** |
| PSDC (alternate) | Not supported | `document/vnd.adobe.cpsd+dcx` | **New in V2** |

## 9. Destination types (V2 new capability)

V1 paired `href` with the `storage` enum. In V2, output targets are modeled as the `destination` union:

| Destination type | Fields | Purpose |
| --- | --- | --- |
| **URL** | `url` (required), `storageType` (`azure`/`dropbox`, optional) | Presigned URL targets such as S3, Azure, Dropbox, or Frame.io |
| **Creative Cloud** | `creativeCloudPath` (required), `creativeCloudProjectId` (optional) | Storage in ACP / CC |
| **Hosted** | `validityPeriod` (required, 60-86400 seconds) | Temporary Adobe-managed output when no existing bucket is available |

### Mapping V1 storage to destinations

| V1 output `storage` | V2 `destination` |
| --- | --- |
| `"external"` | `{"url": "<presigned URL>"}` |
| `"acp"` | `{"url": "<ACP presigned URL>"}` |
| `"adobe"` + CC path | `{"creativeCloudPath": "folder/file.psd"}` |
| `"adobe"` + URN | `{"creativeCloudFileId": "urn:aaid:sc:..."}` |
| `"azure"` | `{"url": "<Azure URL>", "storageType": "azure"}` |
| `"dropbox"` | `{"url": "<Dropbox URL>", "storageType": "dropbox"}` |
| _(not in V1)_ | `{"validityPeriod": 3600}` |

For Creative Cloud paths, omit the initial slash. Use `"folder/file.psd"`, not `"/folder/file.psd"`.

## 10. Crop mode (replaces V1 trim booleans)

V1 put two separate boolean flags on each output. V2 folds those choices into one enum:

| V1 | V2 `cropMode` |
| --- | --- |
| `trimToCanvas: true` | `"document_bounds"` |
| `trimToLayer: true` | `"layer_bounds"` |
| `trimToCanvas: true` + transparent pixels | `"trim_to_transparency"` |
| Both false (default) | Omit `cropMode` |

## 11. Status response changes

V2 changes the status response shape significantly compared with V1:

|  | V1 | V2 | Notes |
| --- | --- | --- | --- |
| **Status location** | `outputs[n].status` | `status` (top-level) | Breaking |
| **Status values** | `succeeded`, `failed`, `pending` | `pending`, `running`, `succeeded`, `failed` | Adds `running` |
| **Timestamps** | `outputs[n].created`, `outputs[n].modified` | `createdTime`, `modifiedTime` (top-level) | Breaking |
| **Output URL** | `outputs[n]._links.renditions[m].href` | `result.outputs[n].destination.url` | Breaking |
| **Outputs location** | `outputs[]` (top-level) | `result.outputs[]` | Breaking |
| **Input echo** | `outputs[n].input[m].href` | Not returned | Removed |
| **Error structure** | `outputs[n].errors.code` (number) | `errorDetails[n].errorCode` (string) | Breaking |
| **Hypermedia links** | `_links.self.href` | Not present | Removed |

See [Status Migration](api-status-migration.md) for the full status response reference.

## 12. Complete V1 → V2 request example

**V1:**

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/artboardCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "options": {
    "artboard": [
      {"href": "<IMAGE_1_URL>", "storage": "external"},
      {"href": "<IMAGE_2_URL>", "storage": "external"}
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    },
    {
      "href": "<JPEG_URL>",
      "storage": "external",
      "type": "image/jpeg",
      "quality": 7,
      "width": 2000
    }
  ]
}'
```

**V2:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-artboard \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "images": [
    {"source": {"url": "<IMAGE_1_URL>"}},
    {"source": {"url": "<IMAGE_2_URL>"}}
  ],
  "artboardSpacing": 50,
  "outputs": [
    {
      "destination": {"url": "<SIGNED_POST_URL>"},
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {"url": "<JPEG_URL>"},
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2000
    }
  ]
}'
```

**Key transformation summary:**

1. `options.artboard[]` -> `images[]` (remove `options` wrapper)
2. `href` + `storage` -> `source.url` (on inputs)
3. `href` + `storage` -> `destination.url` (on outputs; `storageType` only for Azure/Dropbox)
4. `type` -> `mediaType`
5. `quality: 7` -> `quality: "maximum"`
6. Add `artboardSpacing` if custom spacing is needed (default is 50)

## 13. Migration checklist

- [ ] Promote `options.artboard[]` into the root-level `images[]` array
- [ ] For each image, map `href` + `storage` to `source.url`; for CC assets, use `source.creativeCloudPath` or `source.creativeCloudFileId`
- [ ] Move `outputs[].href` into `outputs[].destination.url`
- [ ] Drop `outputs[].storage`; add `destination.storageType` only for Azure or Dropbox
- [ ] Rename `outputs[].type` as `outputs[].mediaType`
- [ ] Convert JPEG `quality` from numeric values (1-7) to string enums such as `"maximum"` or `"high"`
- [ ] Convert PNG `compression` from `small`/`medium`/`large` to V2 enums such as `"maximum"`, `"medium"`, or `"low"`
- [ ] Map `overwrite` to `shouldOverwrite`
- [ ] Use the `cropMode` enum instead of `trimToCanvas`/`trimToLayer` booleans
- [ ] Add `artboardSpacing` if the V1 workflow depended on custom spacing
- [ ] For status polling, read top-level `status` instead of `outputs[n].status`; read `result.outputs[n].destination.url` instead of `outputs[n]._links.renditions[m].href`
- [ ] Keep the image count at 25 or below because V2 enforces that limit
- [ ] Omit the leading slash from Creative Cloud paths
