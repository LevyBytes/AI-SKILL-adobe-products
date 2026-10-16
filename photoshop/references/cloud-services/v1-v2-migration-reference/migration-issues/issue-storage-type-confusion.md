# Issue: storageType confusion

**Problem:** Adding storageType for AWS S3

```json
{
  "destination": {
    "url": "<S3_URL>",
    "storageType": "external"
  }
}
```

NOT needed!

**Solution:** Omit storageType for standard URLs

```json
{
  "destination": {
    "url": "<S3_URL>"
  }
}
```

No storageType needed

Only use storageType for:

- Azure: `"storageType": "azure"`
- Dropbox: `"storageType": "dropbox"`
