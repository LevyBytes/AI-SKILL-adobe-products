# .NET

```csharp
CreatePDFResult result = pdfServicesResponse.Result;
IAsset asset = result.Asset;

// refresh the download URI in case it expires or is null for the uploaded asset
pdfServices.RefreshDownloadURI(asset);
```

### .NET

```csharp
CreatePDFResult result = pdfServicesResponse.Result;
IAsset asset = result.Asset;

// delete asset
pdfServices.deleteAsset(asset);
```
