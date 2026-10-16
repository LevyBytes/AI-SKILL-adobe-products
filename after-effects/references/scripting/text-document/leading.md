# TextDocument.leading

textDocument.leading

Note

This functionality was added in After Effects 14.2 (CC 2017.1)

### Description

How much vertical space the Text layer puts between lines.

Comes back as zero when TextDocument.autoLeading is true.

Writing it also turns on TextDocument.autoLeading across the characters involved.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

You may pass a minimum of 0, but it gets quietly bumped up to 0.01.

### Type

Floating-point value; read/write.

### Example

```javascript
// This creates a Text layer and sets the leading to 100

var composition = app.project.activeItem;
var myTextLayer = comp.layers.addText("Spring\nSummer\nAutumn\nWinter");
var myTextSource = myTextLayer.sourceText;
var myTextDocument = myTextSource.value;
myTextDocument.leading = 100;
myTextSource.setValue(myTextDocument);
```
