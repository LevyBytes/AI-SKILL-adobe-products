# Selecting paths in a document

```javascript
// Selects all paths not part of a compound path
if ( app.documents.length > 0 ) {
    var doc = app.activeDocument;
    var count = 0;
    if ( doc.pathItems.length > 0 ) {
        var thePaths = doc.pathItems;
        var numPaths = thePaths.length;
        for ( var i = 0; i < doc.pathItems.length; i++ ) {
        var pathArt = doc.pathItems[i];
        if ( pathArt.parent.typename != "CompoundPathItem" ) {
            pathArt.selected = true;
            count++;
        }
    }
}
}
```
