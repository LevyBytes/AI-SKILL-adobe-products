# Mapping V1 storage to destinations

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
