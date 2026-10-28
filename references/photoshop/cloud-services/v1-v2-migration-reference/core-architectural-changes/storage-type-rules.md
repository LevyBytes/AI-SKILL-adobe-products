# 3. Storage type rules

**V1:** Required for every storage option

```json
{
  "storage": "external"
}
```

**V2:** For external presigned URLs, omit it; only Azure and Dropbox require it

```json
{
  "destination": {
    "url": "<URL>",
    "storageType": "azure"
  }
}
```

Only for Azure/Dropbox

**When to use `storageType` in V2:**

- **REQUIRED:** Azure Blob Storage → `"storageType": "azure"`
- **REQUIRED:** Dropbox → `"storageType": "dropbox"`
- **NOT REQUIRED:** AWS S3, Frame.io, Google Drive, standard HTTPS URLs
