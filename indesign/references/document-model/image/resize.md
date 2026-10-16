# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize target bounding box. Accepted forms: CoordinateSpaces enumerator; BoundingBoxLimits enumerator; or Ordered array containing coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transform origin. Legal specifications: for bounding-box-relative origins, anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; for coordinate-space-relative origins, \{x,y} \{\{x,y}[, coordinate space]}; for layout-window-ruler origins, \{\{x,y}, page index bounds kind}. Accepted types include Array of 2 Reals; AnchorPoint enumerator; Array of Arrays of 2 Reals; and, as separate accepted forms, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the supplied values affect the current dimensions. |
| Mixed | values | Supplied width/height pair. Dimension specifications may be \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space supplies only the unit of length for x and y. The 'current dimensions times' resize method ignores coordinate space. Accepted types include Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | false, when multiple page items are targeted, reaches the new dimensions by moving individual items instead of resizing them. (Optional) |
| Boolean | consideringRulerUnits | true interprets a ruler location with ruler units instead of points. Default: false. This only matters when the reference point is relative to a page. (Optional) |
