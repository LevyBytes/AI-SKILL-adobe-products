# TextDocument.lineJoinType

textDocument.lineJoinType

Note

This functionality was added in After Effects 24.0

### Description

Holds the Stroke line-join-type setting for the Text layer.

Warning

Only the layer's first character is reflected in this value.

Assigning a new value pushes that setting onto every character in the Text layer.

### Type

A LineJoinType enumerated value; read/write. One of:

- LineJoinType.`LINE_JOIN_MITER`
- LineJoinType.`LINE_JOIN_ROUND`
- LineJoinType.`LINE_JOIN_BEVEL`
