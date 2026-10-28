# Placing a text file

Import a text file after the headline in the first page's first text frame. The script opens a dialog for choosing the `.txt` content to place.

```javascript
function placeTextAfterHeadline(textFrame, textFilePath) {
    if (!textFrame || !textFrame.isValid) {
        throw new Error("Provide a valid text frame.");
    }
    if (!textFilePath) return;
    textFrame.insertionPoints.item(-1).place(textFilePath);
}
module.exports = { placeTextAfterHeadline };
```

Pass the InDesign text frame containing the headline and a valid text-file path. The last insertion point places imported text after the existing content.
