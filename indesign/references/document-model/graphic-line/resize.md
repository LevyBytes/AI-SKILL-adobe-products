# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box targeted for resizing. Accepts a CoordinateSpaces enumerator, a BoundingBoxLimits enumerator, or an ordered array with coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin point for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted forms include Long Integers, BoundingBoxLimits enumerators, AnchorPoint enumerators, CoordinateSpaces enumerators, Array of Arrays of 2 Reals, an AnchorPoint enumerator, or an Array of 2 Reals. |
| ResizeMethods | by | How the supplied values alter the current dimensions. |
| Mixed | values | Width and height data. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, coordinate space supplies only their length unit, and the 'current dimensions times' resize method ignores coordinate space). Accepted values can be Array of Reals, ResizeConstraints enumerators, or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false with multiple targeted page items, the new dimensions are achieved by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. Default value: false. This matters only when the reference point is page-relative. (Optional) |
