# CharacterRange.text

CharacterRange.text

### Description

The text content of the Text layer range.

A read hands back the same number of characters as the range spans. Where the span is zero — an insertion point — it returns an empty string.

A write swaps the characters in the range for whatever string you pass. An empty string in effect erases the characters in the range.

To add characters without removing any that exist, call TextDocument.characterRange() using the same value for start and end so as to obtain an insertion-point range.

### Type

String; read/write.
