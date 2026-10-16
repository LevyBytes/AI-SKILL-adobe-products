# GIF export example

```javascript
// Exports current document to dest as a GIF file with specified options,
// dest contains the full path including the file name

function exportToGIFFile(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsGIF();
        exportOptions.antiAliasing = false;
        exportOptions.colorCount = 64;
        exportOptions.colorDither = ColorDitherMethod.DIFFUSION;

        var type = ExportType.GIF;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```
