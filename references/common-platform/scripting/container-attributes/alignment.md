# alignment

windowOrContainerObj.alignment

### Description

Used on a container's child elements. When present, this value takes precedence over the parent's alignChildren setting.

With one string value, the available choices vary according to orientation.

For orientation = row:

- top
- bottom
- center (default)
- fill

For orientation=column:

- left
- right
- center (default)
- fill

For orientation = stack:

- top
- bottom
- left
- right
- center (default)
- fill

With an array value, the first string element supplies horizontal alignment and the second supplies vertical alignment.

Horizontal choices are left, right, center, or fill. Vertical choices are top, bottom, center, or fill.

Case does not matter for these values.

### Type

String, or Array of 2 Strings
