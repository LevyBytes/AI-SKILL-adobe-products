# Node.js

```javascript
const result = pdfServicesResponse.result;
const asset = result.asset;

// refresh the download URI in case it expires or is null for the uploaded asset
const refreshedAsset = await pdfServices.refreshDownloadURI({ asset });
```

### Node.js

```javascript
const result = pdfServicesResponse.result;
const asset = result.asset;

// delete asset
await pdfServices.deleteAsset({ asset });
```
