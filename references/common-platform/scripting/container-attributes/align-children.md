# alignChildren

windowOrContainerObj.alignChildren

### Description

Controls how the layout manager aligns differently sized children inside a container's row or column. Creation order decides which children appear at the top of a column or at the left of a row; earlier children are placed nearer that top or left position.

When a child element defines alignment, that child setting takes precedence over the parent container's alignChildren value.

With one string value, the permitted choices vary according to orientation.

For orientation=row:

- top
- bottom
- center (default)
- fill

For orientation=column:

- left
- right
- center (default)
- fill

For orientation=stack:

- top
- bottom
- left
- right
- center (default)
- fill

With an array value, the first string element supplies horizontal alignment and the second supplies vertical alignment. Horizontal choices are left, right, center, or fill. Vertical choices are top, bottom, center, or fill.

Case does not matter for these values.

### Type

String, or Array of 2 Strings
