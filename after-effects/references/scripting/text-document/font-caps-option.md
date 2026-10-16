# TextDocument.fontCapsOption

textDocument.fontCapsOption

Note

This functionality was added in After Effects 24.0

### Description

Carries the font caps setting for the Text layer.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

A FontCapsOption enumerated value; read/write. One of:

- FontCapsOption.`FONT_NORMAL_CAPS`
- FontCapsOption.`FONT_SMALL_CAPS`
- FontCapsOption.`FONT_ALL_CAPS`
- FontCapsOption.`FONT_ALL_SMALL_CAPS`
