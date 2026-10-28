# Creating and modifying a compound path item

```javascript
// Creates a new compound path item containing 3 path
// items, then sets the width and the color of the stroke
// to all items in the compound path

if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var newCompoundPath = doc.activeLayer.compoundPathItems.add();

    // Create the path items
    var newPath = newCompoundPath.pathItems.add();
    newPath.setEntirePath(Array(Array(30, 50), Array(30, 100)));

    newPath = newCompoundPath.pathItems.add();
    newPath.setEntirePath(Array(Array(40, 100), Array(100, 100)));

    newPath = newCompoundPath.pathItems.add();
    newPath.setEntirePath(Array(Array(100, 110), Array(100, 300)));

    // Set stroke and width properties of the compound path
    newPath.stroked = true;
    newPath.strokeWidth = 3.5;
    newPath.strokeColor = app.activeDocument.swatches[3].color;
}
```
