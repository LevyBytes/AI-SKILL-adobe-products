# TextDocument.direction

textDocument.direction

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph direction the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

A ParagraphDirection enumerated value; read/write. One of:

- ParagraphDirection.`DIRECTION_LEFT_TO_RIGHT`
- ParagraphDirection.`DIRECTION_RIGHT_TO_LEFT`
