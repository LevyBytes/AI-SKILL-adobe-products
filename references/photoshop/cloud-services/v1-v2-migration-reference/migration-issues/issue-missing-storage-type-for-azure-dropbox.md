# Issue: Missing storage type for Azure/Dropbox

**Problem:** An Azure or Dropbox destination is used without `storageType`.

**Error:** `Azure Blob Storage URL requires 'storageType': 'azure'`

**Solution:** Supply `storageType` for Azure and Dropbox destinations.

```json
{
  "destination": {
    "url": "<AZURE_URL>",
    "storageType": "azure"
  }
}
```
