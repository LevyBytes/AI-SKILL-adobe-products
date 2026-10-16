# Storage parameter not recognized

**Problem:** A v1 `storage` parameter is included

```json
{
  "storage": "external"
}
```

**Solution:** For standard URLs, remove the storage parameter

```json
{
  "destination": {
    "url": "<URL>"
  }
}
```

storageType NOT required for S3/HTTPS URLs

Only use storageType for Azure ("azure") or Dropbox ("dropbox")
