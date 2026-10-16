# TextDocument.boxTextPos

textDocument.boxTextPos

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

As of After Effects 14 (CC2017), it seems this is also writeable.

### Description

Gives, as a [width, height] array measured in pixels, the layer coordinates taken from the anchor point of a paragraph (box) Text layer.

Warning

Unless boxText reads true for the Text layer, accessing this raises an exception.

### Type

Array of ([X,Y]) position coordinates; read/write.

### Example

```javascript
// For a paragraph Text layer returns [x, y] position from layer anchor point in layer coordinates.
// e.g. approximately [0, -25] with default character panel settings.
var boxTextLayerPos = myTextLayer.sourceText.value.boxTextPos;
```
