# Key Field Mapping

| V1 Field | V2 Field | Notes |
| --- | --- | --- |
| `inputs[0].href` | `image.source.url` | PSD input |
| `inputs[0].storage` | _(removed)_ | Not needed for presigned URLs |
| `options.layers[].name` | `edits.layers[].name` | Layer name unchanged |
| `options.layers[].add.insertTop` | `edits.layers[].operation.type: "add"` + `placement.type: "top"` | See [Placement Options](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/convenience-apis/smart-object-replace.md#placement-options) |
| `options.layers[].add.insertBottom` | `placement.type: "bottom"` |  |
| `options.layers[].add.insertAbove` | `placement.type: "above"` + `referenceLayer` |  |
| `options.layers[].add.insertBelow` | `placement.type: "below"` + `referenceLayer` |  |
| `options.layers[].input.href` | `edits.layers[].smartObject.smartObjectFile.source.url` | Smart object source file |
| `options.layers[].input.storage` | _(removed)_ | Not needed for presigned URLs |
| _(no field — replace implied by omitting `add`)_ | `operation.type: "edit"` | V2 requires explicit operation |
| `outputs[0].href` | `outputs[0].destination.url` | Output destination |
| `outputs[0].type: "vnd.adobe.photoshop"` | `outputs[0].mediaType: "image/vnd.adobe.photoshop"` | Format field renamed |
