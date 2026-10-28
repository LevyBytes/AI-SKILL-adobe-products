# JPEG export example

```javascript
// Exports current document to dest as a JPEG file with specified options,
// dest contains the full path including the file name

function exportFileToJPEG(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsJPEG();
        exportOptions.antiAliasing = false;
        exportOptions.qualitySetting = 70;

        var type = ExportType.JPEG;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```
