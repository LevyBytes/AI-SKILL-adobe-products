# TextDocument.hangingRoman

textDocument.hangingRoman

Note

This functionality was added in After Effects 24.0

### Description

Holds the Roman Hanging Punctuation paragraph setting for the Text layer. It matters solely for box Text layers, where it lets punctuation spill past the box edge instead of wrapping onto the following line.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

Boolean; read/write.
