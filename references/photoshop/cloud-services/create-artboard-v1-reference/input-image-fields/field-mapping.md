# Field mapping

| V1 (`options.artboard[n].*`) | V2 (`images[n].source.*`) | Notes |
| --- | --- | --- |
| `href` (any URL) | `url` (presigned HTTPS URL) | Breaking: field is now `url` under `source` |
| `storage: "external"` | _(omit storageType)_ | External URL inputs omit storage type |
| `storage: "adobe"` + CC path | `creativeCloudPath: "folder/file.jpg"` | Breaking: use the dedicated CC path field; **no leading slash** |
| `storage: "adobe"` + URN | `creativeCloudFileId: "urn:aaid:sc:..."` | Breaking: CC file ID is supplied in its own field |
| `storage: "acp"` | `url` (ACP presigned URL) | Supply the presigned URL directly |
| `storage: "azure"` | `url` (Azure presigned URL) | Omit storageType on inputs |
| `storage: "dropbox"` | `url` (Dropbox URL) | Omit storageType on inputs |
| `storage: "cclib"` | `creativeCloudFileId: "urn:aaid:sc:..."` | Use the file ID for CC Library content |
| _(not in V1)_ | `lightroomPath` | New: catalog path for Lightroom |
