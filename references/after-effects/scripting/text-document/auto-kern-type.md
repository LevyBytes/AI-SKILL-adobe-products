# TextDocument.autoKernType

textDocument.autoKernType

Note

This functionality was added in After Effects 24.0

### Description

The auto-kern-type option for the Text layer.

Warning

Only the Text layer's opening character is mirrored in this value.

Writing to it pushes the given setting onto every character throughout the Text layer.

### Type

An AutoKernType enumerated value; read/write. One of:

- AutoKernType.`NO_AUTO_KERN`
- AutoKernType.`METRIC_KERN`
- AutoKernType.`OPTICAL_KERN`
