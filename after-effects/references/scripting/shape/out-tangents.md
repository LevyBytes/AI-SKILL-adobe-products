# Shape.outTangents

shapeObject.value.outTangents

### Description

The outgoing tangent vectors — the direction handles — paired with the shape's vertices. Give each vector as a two-element array of floating-point values, and gather those vectors into an array matching the length of the vertices array.

Every tangent value starts out at [0,0]. On a mask that isn't RotoBezier, that produces a straight line segment.

Should the shape belong to a RotoBezier mask, all tangent values are disregarded and the tangents are computed automatically.

### Type

Array of floating-point pair arrays; read/write.
