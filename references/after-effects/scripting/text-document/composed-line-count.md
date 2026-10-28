# TextDocument.composedLineCount

textDocument.composedLineCount

### Description

Gives back how many composed lines the Text layer has; this can be zero when every line is overset.

Because the TextDocument object instance is seeded from the composed state, editing that instance afterward will not trigger recomposition.

So even after you strip every bit of text out of the TextDocument object instance, the figure reported here stays the same.

### Type

Integer; read-only.
