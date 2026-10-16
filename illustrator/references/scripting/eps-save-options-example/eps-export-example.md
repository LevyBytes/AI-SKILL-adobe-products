# EPS export example

```javascript
// Exports current document to destFile as an EPS file with specified options,
// destFile contains the full path including the file name

function exportFileAsEPS(destFile) {
    var newFile = new File(destFile);
    var saveDoc;
    if (app.documents.length == 0) {
        saveDoc = app.documents.add();
    } else {
        saveDoc = app.activeDocument;
    }

    var saveOpts = new ePSSaveOptions();
    saveOpts.cmykPostScript = true;
    saveOpts.embedAllFonts = true;

    saveDoc.saveAs(newFile, saveOpts);
}
```
