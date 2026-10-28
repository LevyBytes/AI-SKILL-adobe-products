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

For provider setup and generating input or output URLs, use [Storage solutions](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/getting-started/storage-solutions/index.md).
