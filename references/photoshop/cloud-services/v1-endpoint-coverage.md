# 1. V1 endpoint coverage

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
