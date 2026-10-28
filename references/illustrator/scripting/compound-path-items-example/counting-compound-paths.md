# Counting compound paths

```javascript
// Counts all compound path items in layer 1 of the current document
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var numCompoundPaths = doc.layers[0].compoundPathItems.length;
}
```
