# When to use `storageType`

In v2, `storageType` is optional except when the destination uses one of the storage providers that require it:

| Storage Provider | storageType Required | Value |
| --- | --- | --- |
| AWS S3 (presigned URLs) | ❌ No | Not needed |
| Azure Blob Storage | ✅ Yes | `"azure"` |
| Dropbox | ✅ Yes | `"dropbox"` |
| Frame.io | ❌ No | Not needed |
| Google Drive | ❌ No | Not needed |
