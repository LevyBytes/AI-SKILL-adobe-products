# TextDocument.strokeWidth

textDocument.strokeWidth

### Description

How thick the Text layer's stroke is, measured in pixels.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

You may pass a minimum of 0, but it gets quietly bumped up to 0.01.

### Type

Floating-point value (0 to 1000, inclusive); read/write.
