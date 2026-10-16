# Photoshop export example

```javascript
// Exports current document to dest as a PSD file with specified options,
// dest contains the full path including the file name

function exportFileToPSD(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsPhotoshop();
        exportOptions.resolution = 150;

        var type = ExportType.PHOTOSHOP;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```
