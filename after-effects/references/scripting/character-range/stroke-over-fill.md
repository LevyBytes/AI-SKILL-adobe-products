# CharacterRange.strokeOverFill

CharacterRange.strokeOverFill

### Description

The Stroke Over Fill character property of the Text layer CharacterRange.

It signals the order in which fill and stroke render for the characters in the range. A true value places the stroke above the fill.

Where the attribute holds a mixed value, the read returns undefined.

Warning

A Text layer can override the per-character setting by way of the All Strokes First or All Fills First option on the CharPanel.

The value reported here reflects what is applied to the characters, leaving aside any possible Text layer override.

### Type

Boolean; read/write.
