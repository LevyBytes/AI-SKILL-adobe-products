# Example name

```javascript
// Locks all mesh items in the current document
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    for (var i = 0; i < doc.meshItems.length; i++) {
        doc.meshItems[i].locked = true;
    }
}
```
