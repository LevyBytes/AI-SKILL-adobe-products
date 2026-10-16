# Storage / destination mapping

| V1 (`outputs[].storage`) | V2 (`outputs[].destination`) |
| --- | --- |
| `"external"` + `href` | `{"url": "<presigned URL>"}` |
| `"acp"` + `href` | `{"url": "<ACP presigned URL>"}` |
| `"adobe"` + CC path | `{"creativeCloudPath": "folder/file.ext"}` (no leading slash) |
| `"adobe"` + URN | `{"creativeCloudFileId": "urn:aaid:..."}` |
| `"dropbox"` + `href` | `{"url": "...", "storageType": "dropbox"}` |
| `"azure"` + `href` | `{"url": "...", "storageType": "azure"}` |
| _(not in V1)_ | `{"validityPeriod": N}` — hosted, Adobe-managed temporary storage |
| _(not in V1)_ | `{"embedded": "string"/"json"/"base64"}` — inline in response |
