# 1. External storage (presigned URLs)

**Supports:** AWS S3, Azure Blob, Dropbox, Frame.io, Google Drive

**For Input:**

```json
{
  "image": {
    "source": {
      "url": "<PRESIGNED_GET_URL>"
    }
  }
}
```

**For Output:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<PRESIGNED_PUT_URL>",
        "storageType": "azure"
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

Only for Azure or Dropbox

**When to use `storageType`:**

- Azure: `"storageType": "azure"`
- Dropbox: `"storageType": "dropbox"`
- AWS S3, Frame.io, Google Drive: NOT required
