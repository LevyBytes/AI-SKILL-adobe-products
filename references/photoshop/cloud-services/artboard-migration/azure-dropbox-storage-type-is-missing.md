# Azure/Dropbox storage type is missing

**Problem:** Azure or Dropbox is used without `storageType`

**Error:**

```text
Azure Blob Storage URL requires 'storageType': 'azure'
```

**Fix:** Supply `storageType` when using Azure or Dropbox

```json
{
  "destination": {
    "url": "<AZURE_URL>",
    "storageType": "azure"
  }
}
```
