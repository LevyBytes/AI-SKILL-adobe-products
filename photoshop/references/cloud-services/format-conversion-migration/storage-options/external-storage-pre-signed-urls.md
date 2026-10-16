# External storage (pre-signed URLs)

```json
{
  "destination": {
    "url": "<SIGNED_POST_URL>"
  }
}
```

For AWS S3 presigned URLs and ordinary HTTPS URLs, omit `storageType`. Reserve `storageType` for Azure Blob Storage (`"storageType": "azure"`) and Dropbox (`"storageType": "dropbox"`).
