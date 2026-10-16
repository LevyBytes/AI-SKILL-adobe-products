# Saving with IllustratorSaveOptions

```javascript
// Saves the current document to dest as an AI file with specified options,
// dest specifies the full path and file name of the new file

function exportFileToAI(dest) {
    if (app.documents.length > 0) {
        var ai8Doc = new File(dest);
        var saveOptions = new IllustratorSaveOptions();
        saveOptions.compatibility = Compatibility.ILLUSTRATOR8;
        saveOptions.flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;

        app.activeDocument.saveAs(ai8Doc, saveOptions);
    }
}
```
