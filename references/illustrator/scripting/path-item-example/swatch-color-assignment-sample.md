# Swatch color assignment sample

```javascript
// Sets the stroke and fill of a path item to colors of a randomly selected swatch
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    var doc = app.activeDocument;

    for (var i = 0; i < doc.pathItems.length; i++) {
        var pathRef = doc.pathItems[i];
        pathRef.filled = true;
        pathRef.stroked = true;

        var swatchIndex = Math.round(Math.random() * (doc.swatches.length - 1));
        pathRef.fillColor = doc.swatches[swatchIndex].color;
        pathRef.strokeColor = doc.swatches[swatchIndex].color;
    }
}
```
