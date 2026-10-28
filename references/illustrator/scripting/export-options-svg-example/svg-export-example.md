# SVG export example

```javascript
// Exports current document to dest as an SVG file with specified options,
// dest contains the full path including the file name

function exportFileToSVG(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsSVG();
        exportOptions.embedRasterImages = true;
        exportOptions.embedAllFonts = false;
        exportOptions.fontSubsetting = SVGFontSubsetting.GLYPHSUSED;

        var type = ExportType.SVG;
        var fileSpec = new File(dest);

        app.activeDocument.exportFile(fileSpec, type, exportOptions);
    }
}
```
