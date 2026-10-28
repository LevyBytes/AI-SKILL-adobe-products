# CharacterRange.strokeColor

CharacterRange.strokeColor

### Description

The stroke-color character property of the Text layer CharacterRange, given as an array of [r, g, b] floating-point values.

To illustrate, an 8-bpc project renders a red value of 255 as 1.0, while a 32-bpc project can push an overbright blue value as high as something like 3.2.

Where the attribute holds a mixed value, the read returns undefined.

Writing this value additionally flips applyStroke to true over the affected characters.

Warning

Unlike the matching attribute on the TextDocument API, no exception is thrown on read here when applyStroke is not true.

### Type

Array [r, g, b] of floating-point values; read/write.
