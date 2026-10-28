# TextDocument.strokeColor

textDocument.strokeColor

### Description

Holds the stroke color of the Text layer as an [r, g, b] array of floating-point values. To illustrate, an 8-bpc project represents a red value of 255 as 1.0, while a 32-bpc project can carry an overbright blue as high as something like 3.2.

Reading it raises an exception unless applyStroke is true.

Writing it additionally flips applyStroke to true on the characters involved.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Array [r, g, b] of floating-point values; read/write.
