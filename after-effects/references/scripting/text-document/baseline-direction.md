# TextDocument.baselineDirection

textDocument.baselineDirection

Note

This functionality was added in After Effects 24.0

### Description

The baseline-direction option for the Text layer. It matters for the Japanese language in vertical texts. "`BASELINE_VERTICAL_CROSS_STREAM`" also goes by the name Tate-Chu-Yoko.

Warning

Only the Text layer's opening character is mirrored in this value.

Writing to it pushes the given setting onto every character throughout the Text layer.

### Type

A BaselineDirection enumerated value; read/write. One of:

- BaselineDirection.`BASELINE_WITH_STREAM`
- BaselineDirection.`BASELINE_VERTICAL_ROTATED`
- BaselineDirection.`BASELINE_VERTICAL_CROSS_STREAM`
