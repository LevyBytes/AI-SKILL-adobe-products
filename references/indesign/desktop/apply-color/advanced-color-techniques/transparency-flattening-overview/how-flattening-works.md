# How flattening works

The flattener evaluates transparent objects that overlap and breaks them into individual opaque sections. Together, those sections reproduce the original transparency effect.

For example, when a transparent blue circle overlaps a yellow rectangle, InDesign can divide the artwork into three areas: the yellow rectangle, the blue circle outside the intersection, and a green area where they overlap. Each resulting area is opaque, but the combined appearance still reads as transparent.

More intricate documents, including artwork with images, gradients, text, spot colors, and blend modes, can need additional rasterization to preserve quality.
