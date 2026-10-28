# CharacterRange.fillColor

CharacterRange.fillColor

### Description

The Fill Color CharacterRange attribute for the Text layer range, given as an array of [r, g, b] floating-point values.

To illustrate, an 8-bpc project renders a red value of 255 as 1.0, while a 32-bpc project can push an overbright blue value as high as something like 3.2.

Writing this value additionally flips applyFill to true over the affected characters.

Where the attribute holds a mixed value across the character range, the read returns undefined.

Warning

Unlike the matching attribute on the TextDocument API, no exception is thrown on read here when applyFill is not true.

### Type

Array [r, g, b] of floating-point values; read/write.
