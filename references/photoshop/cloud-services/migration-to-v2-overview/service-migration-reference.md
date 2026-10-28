# Service migration reference

The table below maps each v1 endpoint to its v2 counterpart:

| V1 Endpoint | V2 Endpoint | Guide |
| --- | --- | --- |
| `/lrService/autoTone` | `/v2/edit` | [Edit Operations](../edit-operations/reference-index.md) |
| `/lrService/autoStraighten` | `/v2/edit` | [Edit Operations](../edit-operations/reference-index.md) |
| `/lrService/presets` | `/v2/edit` | [Edit Operations](../edit-operations/reference-index.md) |
| `/lrService/xmp` | `/v2/edit` | [Edit Operations](../edit-operations/reference-index.md) |
| `/lrService/edit` | `/v2/edit` | [Edit Operations](../edit-operations/reference-index.md) |
| `/pie/psdService/smartObject` | `/v2/create-composite` | [Smart Object](../smart-object-replace-migration/reference-index.md) |
| `/pie/psdService/renditionCreate` | `/v2/create-composite` | [Format Conversion](../format-conversion-migration/reference-index.md) |
| `/pie/psdService/documentCreate` | `/v2/create-composite` | [Document Creation](../document-creation-migration/reference-index.md) |
| `/pie/psdService/documentOperations` | `/v2/create-composite` | [Document Operations](../document-operations-migration/reference-index.md) |
| `/pie/psdService/photoshopActions` | `/v2/execute-actions` | [Actions Migration](../actions-migration/reference-index.md) |
| `/pie/psdService/actionJSON` | `/v2/execute-actions` | [Actions Migration](../actions-migration/reference-index.md) |
| `/pie/psdService/productCrop` | `/v2/execute-actions` | [Product Crop](../product-crop-migration/reference-index.md) |
| `/pie/psdService/text` | `/v2/execute-actions` | [Text Layer Operations](../text-layer-operations/reference-index.md) |
| `/pie/psdService/artboardCreate` | `/v2/create-artboard` | [Artboard Migration](../artboard-migration/reference-index.md) |
| `/pie/psdService/documentManifest` | `/v2/generate-manifest` | [Manifest Migration](../manifest-migration/reference-index.md) |
| `/pie/psdService/status/{jobId}` | `/v2/status/{jobId}` | [Status Migration](../status-migration/reference-index.md) |
| `/lrService/status/{jobId}` | `/v2/status/{jobId}` | [Status Migration](../status-migration/reference-index.md) |
| Layer operations | `/v2/create-composite` | [Layer Operations](../layer-operations-migration/reference-index.md) (see sub-guides) |
