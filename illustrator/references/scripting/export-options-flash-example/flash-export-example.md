# Flash export example

```javascript
// Exports current document to destFile as a flash file with specified options,
// destFile contains the full path including the file name

function exportToFlashFile(destFile) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsFlash();
        exportOptions.resolution = 150;

        var type = ExportType.FLASH;
        var fileSpec = new File(destFile);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```
