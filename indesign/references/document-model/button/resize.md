# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to resize. Accepts CoordinateSpaces enumerator, BoundingBoxLimits enumerator, or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transform origin. Accepted legal specifications include: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepts Array of 2 Reals, AnchorPoint enumerator, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| ResizeMethods | by | How the supplied values affect current dimensions. |
| Mixed | values | Dimension values for width and height. Accepted dimension forms: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; where x and y are real numbers and coordinate space is used to determine _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Accepts Array of Reals, ResizeConstraints enumerators, or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and multiple page items are targeted, individual items move to reach the new dimensions instead of being resized. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location uses ruler units rather than points. Default false. It matters only when the reference point is page-relative. (Optional) |
