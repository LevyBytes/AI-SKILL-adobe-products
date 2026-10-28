# TextDocument.kerning

textDocument.kerning

Note

This functionality was added in After Effects 24.0

### Description

Carries the kerning setting for the Text layer.

For AutoKernType.`METRIC_KERN` and AutoKernType.`OPTICAL_KERN` it gives back zero.

Writing it also turns on AutoKernType.`NO_AUTO_KERN` across the characters involved.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

Integer value; read/write.
