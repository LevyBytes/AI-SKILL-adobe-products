# Collecting external file references from page items

```javascript
// Gets all file-references in the current document using the pageItems object,
// then displays them in a new document

if (app.documents.length > 0) {
    var fileReferences = new Array();
    var sourceDoc = app.activeDocument;

    for (var i = 0; i < sourceDoc.pageItems.length; i++) {
        var artItem = sourceDoc.pageItems[i];
        switch (artItem.typename) {
        case "PlacedItem":
            fileReferences.push(artItem.file.fsName);
            break;
        case "RasterItem":
            if (!artItem.embedded) {
                fileReferences.push(artItem.file.fsName);
            }
            break;
        }
    }

    // Write the file references to a new document
    var reportDoc = documents.add();
    var areaTextPath = reportDoc.pathItems.rectangle(reportDoc.height, 0, reportDoc.width, reportDoc.height);
    var fileNameText = reportDoc.textFrames.areaText(areaTextPath);
    fileNameText.textRange.size = 24;
    var paragraphCount = 3;
    var sourceName = sourceDoc.name;
    var text = "File references in \'" + sourceName + "\':\r\r";
    for (i = 0; i < fileReferences.length; i++) {
        text += (fileReferences[i] + "\r");
        paragraphCount++;
    }
    fileNameText.contents = text;
}
```
