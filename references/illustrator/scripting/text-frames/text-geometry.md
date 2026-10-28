# Text Geometry

All three text-frame kinds share traits such as orientation, but each kind also has its own properties on the text frame object. For example:

- Area text frames support rows and columns, available through the row count and column count properties.
- For path text, the start T value and end T value properties mark the points on the path where the text starts and stops.
- Area and path text frames reference a text path object through the text path property of the text frame object. The text path controls the text frame's artboard position and orientation (horizontal or vertical), while the text frame object's orientation property controls text orientation inside the frame. Point text does not use the text path property, because its position and orientation are fully described by the text frame object's own properties.

Note

A text path differs from a path art item. Text paths connect to path art items, and those path art items can be accessed and edited to change how the related text frame appears.
