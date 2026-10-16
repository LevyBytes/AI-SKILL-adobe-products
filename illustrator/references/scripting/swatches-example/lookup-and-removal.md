# Lookup and removal

```javascript
// Deletes swatch 4 from the current document
if ( app.documents.length > 0 ) {
  if (app.activeDocument.swatches.length > 4) {
    var swatchToDelete = app.activeDocument.swatches[3];
    swatchToDelete.remove();
  }
}
```
