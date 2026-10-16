# Request envelope (breaking)

| V1 | V2 |
| --- | --- |
| `inputs[0].href` | `image.source.url` |
| `inputs[0].storage: "external"` | _(omit — inferred)_ |
| `inputs[0].storage: "adobe"` (path) | `image.source.creativeCloudPath` |
| `inputs[0].storage: "adobe"` (URN) | `image.source.creativeCloudFileId` |
| `outputs[].href` | `outputs[].destination.url` |
| `outputs[].storage` | `outputs[].destination.storageType` (Azure/Dropbox only) |
| `outputs[].type` | `outputs[].mediaType` |
