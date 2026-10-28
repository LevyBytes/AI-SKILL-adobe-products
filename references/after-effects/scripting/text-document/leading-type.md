# TextDocument.leadingType

textDocument.leadingType

Note

This functionality was added in After Effects 24.0

### Description

Selects the paragraph leading-type setting the Text layer applies.

A mixed value across the layer reads back as undefined.

Warning

Every paragraph in the Text layer is covered by this value.

Assigning a new value pushes that setting onto every paragraph in the Text layer.

### Type

A LeadingType enumerated value; read/write. One of:

- LeadingType.`ROMAN_LEADING_TYPE`
- LeadingType.`JAPANESE_LEADING_TYPE`
