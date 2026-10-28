# TextDocument.baselineLocs

textDocument.baselineLocs

Note

This functionality was added in After Effects 13.6 (CC 2015)

### Description

A Text layer's baseline (x,y) locations. Within a paragraph text box, line wraps count as separate lines.

Tip

On a line holding no characters, both the start and end x and y values come back as the largest float value (3.402823466e+38F).

### Type

Array of floating-point values in the form of

Array layout: each line contributes start_x, start_y, end_x and end_y in order; the ellipsis indicates additional line records.

```text
[
    line0.start_x,
    line0.start_y,
    line0.end_x,
    line0.end_y,
    line1.start_x,
    line1.start_y,
    line1.end_x,
    line1.end_y,
    ...
    lineN-1.start_x,
    lineN-1.start_y,
    lineN-1.end_x,
    lineN-1.end_y
]
```
