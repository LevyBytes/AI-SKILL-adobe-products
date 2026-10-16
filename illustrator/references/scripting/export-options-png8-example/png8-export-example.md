# PNG8 export example

```javascript
// Exports current document to dest as a PNG8 file with specified options,
// dest contains the full path including the file name

function exportFileToPNG8(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsPNG8();
        exportOptions.colorCount = 8;
        exportOptions.transparency = false;

        var type = ExportType.PNG8;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```
