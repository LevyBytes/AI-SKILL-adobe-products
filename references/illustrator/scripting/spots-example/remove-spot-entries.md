# Remove spot entries

```javascript
// Deletes all spots colors from the current document
if ( app.documents.length > 0 ) {
    var spotCount = app.activeDocument.spots.length;

    if (spotCount > 0) {
        app.activeDocument.spots.removeAll();
    }
}
```
