# Python

```python
result = pdf_services_response.getResult()
asset = result.getAsset()

### refresh the download URI in case it expires or is null for the uploaded asset

refreshed_asset = pdf_services.refreshDownloadURI(asset);
```

### Python

```python
create_pdf_result = pdf_services_response.getResult()
output_asset = create_pdf_result.getAsset()

### delete asset

pdf_services.deleteAsset(output_asset);
```
