# Graph item rotation example

```javascript
// Rotates each graph item in the current document 90 degrees.

// Verify a document with a graph item is open
var ok = false;

if (documents.length > 0) {
    var docRef = activeDocument;
    var iCount = docRef.graphItems.length;
    if (iCount > 0) {
        ok = true;
        for (var i = 0; i < iCount; i++) {
            var graphRef = docRef.graphItems[i];
            graphRef.selected = true;
            graphRef.rotate(90); //rotate clockwise 90 degrees
        }
        redraw();
    }
}
```
