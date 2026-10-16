# alignment

controlObj.alignment

### Description

This applies to child elements inside a container. When present, it takes precedence over the parent container's alignChildren setting.

With a single string value, the permitted values are determined by the parent container's orientation value.

| orientation Value | Allowed values |
| --- | --- |
| "row" | - "bottom"<br>- "center" (default)<br>- "fill"<br>- "top" |
| "column" | - "center" (default)<br>- "fill"<br>- "left"<br>- "right" |
| "stack" | - "bottom"<br>- "center" (default)<br>- "fill"<br>- "left"<br>- "right"<br>- "top" |

For arrays, string element 1 controls horizontal alignment, and string element 2 controls vertical alignment.

Valid horizontal alignment values are "left", "right", "center" and "fill".

Valid vertical alignment values are "top", "bottom", "center", and "fill".

Note

Case does not matter for these values.

### Type

String or Array of 2 Strings
