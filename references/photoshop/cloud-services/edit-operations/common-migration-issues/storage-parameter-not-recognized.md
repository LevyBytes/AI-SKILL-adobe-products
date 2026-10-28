# Storage parameter not recognized

**Problem:** A v1 `storage` parameter is still in the payload

```json
{
  "outputs": [
    {
      "url": "<SIGNED_POST_URL>",
      "storage": "external"
    }
  ]
}
```

**Solution:** Use the destination object structure. For external presigned URLs, `storageType` is not required.

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      }
    }
  ]
}
```

Add `storageType` when the destination is Azure or Dropbox:

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>",
        "storageType": "azure"
      }
    }
  ]
}
```
