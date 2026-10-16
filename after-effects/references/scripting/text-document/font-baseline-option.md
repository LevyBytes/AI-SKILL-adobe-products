# TextDocument.fontBaselineOption

textDocument.fontBaselineOption

Note

This functionality was added in After Effects 24.0

### Description

Carries the font baseline setting for the Text layer, which is how you push a textDocument into superscript or subscript.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

A FontBaselineOption enumerated value; read/write. One of:

- FontBaselineOption.`FONT_NORMAL_BASELINE`
- FontBaselineOption.`FONT_FAUXED_SUPERSCRIPT`
- FontBaselineOption.`FONT_FAUXED_SUBSCRIPT`
