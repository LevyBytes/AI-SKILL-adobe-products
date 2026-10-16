# Shape.featherRelSegLocs

shapeObject.value.featherRelSegLocs

### Description

An array giving each feather point's relative position, ranging 0 to 1, along its mask path segment (the stretch of mask path between vertices, numbered from 0).

Tip

The array keeps values in the same order the feather points were created. Shifting a feather point onto a different mask path segment means first updating the featherSegLocs attribute value, then this one.

### Type

Array of floating-point values (0 to 1); read/write.
