# Modifying and applying pattern colors

```javascript
// Rotates the color of each pattern in the current document,
// then applies the last pattern to the first path item
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    var doc = app.activeDocument;
    var swatchIndex = 0;

    for (i = 0; i < doc.swatches.length; i++) {
        // Get the generic color object of the swatch
        var currentSwatch = doc.swatches[i];
        var swatchColor = currentSwatch.color;

        // Only operate on patterns
        if (currentSwatch.color.typename == "PatternColor") {
            // Change a pattern property
            currentSwatch.color.rotation = 10;
            swatchIndex = i;
        }
    }

    // Apply the last pattern color swatch to the frontmost path
    var firstPath = app.activeDocument.pathItems[0];
    firstPath.filled = true;
    firstPath.fillColor = doc.swatches[swatchIndex].color;
}
```
