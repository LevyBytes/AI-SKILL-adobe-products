# Status response mapping table

| Request Destination Type | V1 Status Response | V2 Status Response | Status Field Location |
| --- | --- | --- | --- |
| External URL (S3, Azure, etc.) | `outputs[]._links.self.href: "<URL>"` | `result.outputs[].destination.url: "<URL>"` | `result.outputs[].destination.url` |
| Embedded (string/json/base64) | Limited/Not standard | `result.outputs[].destination.{embedded, content}` | `result.outputs[].destination.content` |
| Hosted (Adobe temp storage) | N/A (V2 new feature) | `result.outputs[].destination.url: "<TEMP_URL>"` | `result.outputs[].destination.url` |
| Creative Cloud Path | `outputs[]._links.self.href: "path/to/file"` | `result.outputs[].destination.creativeCloudPath: "path/to/file"` | `result.outputs[].destination.creativeCloudPath` |
| Creative Cloud File ID | `outputs[]._links.self.href: "urn:aaid:..."` | `result.outputs[].destination.creativeCloudFileId: "urn:aaid:..."` | `result.outputs[].destination.creativeCloudFileId` |
| Script Pattern (glob) | N/A (V2 new feature) | Expands to multiple outputs, one per matched file | Multiple `result.outputs[]` entries |
