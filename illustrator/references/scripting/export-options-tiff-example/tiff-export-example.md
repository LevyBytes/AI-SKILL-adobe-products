# TIFF export example

```javascript
// Exports current document to dest as a TIFF file with specified options,
// dest contains the full path including the file name

function exportFileToPSD(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsTIFF();
        exportOptions.resolution = 150;
        exportOptions.byteOrder = TIFFByteOrder.IBMPC;
        exportOptions.lZWCompression = false;

        var type = ExportType.TIFF;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```
