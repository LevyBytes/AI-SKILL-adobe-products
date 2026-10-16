# TextDocument.tsume

textDocument.tsume

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

The tsume amount on this Text layer, expressed as a normalized fraction running 0.0 -> 1.0.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

Although the attribute will take values from 0.0 -> 100.0, what it really wants is a normalized 0.0 -> 1.0 figure. Going above 1.0 yields unexpected results; the Character Panel in AE caps the display at 100% even when scripting set something larger (that is, TextDocument.tsume = 100 _really_ sets a value of 10,000%)

### Type

Floating-point value; read-write.
