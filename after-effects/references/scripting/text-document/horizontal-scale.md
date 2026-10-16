# TextDocument.horizontalScale

textDocument.horizontalScale

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

How wide the Text layer is scaled horizontally, in pixels.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Floating-point value; read-write.

### Example

```javascript
var valOfHScale = myTextLayer.sourceText.value.horizontalScale;
```
