# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the dimensions of the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Identifies the bounding box that will be resized. Accepted forms: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Defines the transformation origin. Allowed specifications include: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Determines how `values` changes the current dimensions. |
| Mixed | values | Supplies width and height data. Allowed dimensions specifications include: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers. Coordinate space determines just the length unit for x and y, and the 'current dimensions times' resize method ignores coordinate space). Accepted forms: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and the target contains multiple page items, the result is reached by moving the separate items rather than resizing each one. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler-based positions use ruler units instead of points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |
