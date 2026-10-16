# Copying mesh items to another document

Run the script with two documents open. One document needs at least one mesh item, while the other may be empty. Before running the script, bring the empty document to the front.

```javascript
// Copies all mesh items from one document to a new document
if (app.documents.length > 0) {
    var srcDoc = documents[0];
    var locationOffset = 0;
    var targetDoc = documents.add();
    for (var i = 0; i < srcDoc.meshItems.length; i++) {
        var srcItem = srcDoc.meshItems[i];
        var dupItem = srcDoc.meshItems[i].duplicate(targetDoc, ElementPlacement.PLACEATEND);

        // offset the copied items' position on the y axis
        dupItem.position = Array(100, 50 + locationOffset);
        locationOffset += 50;
    }
}
```
