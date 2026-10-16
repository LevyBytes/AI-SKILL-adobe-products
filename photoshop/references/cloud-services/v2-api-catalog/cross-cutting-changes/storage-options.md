# Storage options

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
