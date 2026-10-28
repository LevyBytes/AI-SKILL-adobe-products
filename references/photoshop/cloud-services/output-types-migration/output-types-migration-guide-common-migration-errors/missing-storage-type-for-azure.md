# Missing storage type for Azure

❌ **Problem:**

```json
{
  "destination": {
    "url": "https://myaccount.blob.core.windows.net/..."
  }
}
```

❌ **Error:**

```txt
Azure Blob Storage URL requires 'storageType': 'azure'
```

✅ **Solution:**

```json
{
  "destination": {
    "url": "https://myaccount.blob.core.windows.net/...",
    "storageType": "azure"
  }
}
```
