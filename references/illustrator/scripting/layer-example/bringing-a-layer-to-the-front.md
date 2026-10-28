# Bringing a layer to the front

```javascript
// Moves the bottom layer to become the topmost layer

if (documents.length > 0) {
    var countOfLayers = activeDocument.layers.length;
    if (countOfLayers > 1) {
        var bottomLayer = activeDocument.layers[countOfLayers - 1];
        bottomLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
    } else {
        alert("The active document only has only 1 layer");
    }
}
```
