# Saving to PDF format

```javascript
// Saves the current document as PDF to dest with specified options
// dest contains the full path and file name to save to
function saveFileToPDF(dest) {
    var doc = app.activeDocument;

    if (app.documents.length > 0) {
        var saveName = new File(dest);
        saveOpts = new PDFSaveOptions();

        saveOpts.compatibility = PDFCompatibility.ACROBAT5;
        saveOpts.generateThumbnails = true;
        saveOpts.preserveEditability = true;

        doc.saveAs(saveName, saveOpts);
    }
}
```
