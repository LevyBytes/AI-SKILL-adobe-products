# Finding and deleting layers

```javascript
// Deletes all layers whose name begins with "Temp" in all open documents

var layersDeleted = 0;
for (var i = 0; i < app.documents.length; i++) {
    var targetDocument = app.documents[i];
    var layerCount = targetDocument.layers.length;

    // Loop through layers from the back, to preserve index
    // of remaining layers when we remove one
    for (var ii = layerCount - 1; ii >= 0; ii--) {
        var targetLayer = targetDocument.layers[ii];
        var layerName = new String(targetLayer.name);
        if (layerName.indexOf("Temp") == 0) {
            targetDocument.layers[ii].remove();
            layersDeleted++;
        }
    }
}
```
