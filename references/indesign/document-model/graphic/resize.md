# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Defines which bounding box is resized. Accepted forms include a CoordinateSpaces enumerator, a BoundingBoxLimits enumerator, or an ordered array with coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Sets the transform origin. Valid origin syntax includes bounding-box-relative forms such as anchor, \{anchor \| \{x,y}, bounds kind [, coordinate space]}; coordinate-space-relative forms such as \{x,y} or \{\{x,y}[, coordinate space]}; and layout-window-ruler forms such as \{\{x,y}, page index \| bounds kind}. Accepted values include an array of 2 Reals, an AnchorPoint enumerator, or arrays containing 2-Reals arrays, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| ResizeMethods | by | Specifies the way the supplied values change the current dimensions. |
| Mixed | values | Supplies width and height data. Legal dimension syntaxes are \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, and \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space contributes only the length unit for x and y. For the 'current dimensions times' resize method, coordinate space is disregarded. Accepted values include arrays of Reals, ResizeConstraints enumerators, or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and several page items are selected, individual items are moved to reach the new overall dimensions instead of being resized. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler-relative locations use ruler units instead of points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |
