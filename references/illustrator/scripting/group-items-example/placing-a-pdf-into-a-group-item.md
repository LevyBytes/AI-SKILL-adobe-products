# Placing a PDF into a group item

The script below demonstrates importing a PDF document through the GroupItems.createFromFile() function.

Note

Before running the script, create a one page PDF file at /temp/testfile1.pdf.

```javascript
// Embeds a new group item in to the current document from a file specified by dest
// dest should contain the full path and file name

function embedPDF(dest) {
    var embedDoc = new File(dest);
    if (app.documents.length > 0 && embedDoc.exists) {
        var doc = app.activeDocument;
        var placed = doc.groupItems.createFromFile(embedDoc);
    }
}
```
