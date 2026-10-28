# TextDocument.fauxBold

textDocument.fauxBold

Note

The read functionality was added in After Effects 13.2 (CC 2014.2).

The write functionality was added in After Effects 24.0

### Description

true if a Text layer has faux bold enabled; otherwise false.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Boolean; read/write.

### Example

```javascript
var isFauxBold = myTextLayer.sourceText.value.fauxBold;
```
