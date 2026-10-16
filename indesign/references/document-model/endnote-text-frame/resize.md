# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Resize bounding box. Accepted forms: BoundingBoxLimits enumerator, CoordinateSpaces enumerator or Ordered array containing boundsKind:BoundingBoxLimits enumerator, coordinateSpace:CoordinateSpaces enumerator. |
| Mixed | from | Origin for the transform. Allowed specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepted forms include AnchorPoint enumerator, BoundingBoxLimits enumerators, CoordinateSpaces enumerators, Array of 2 Reals, Array of Arrays of 2 Reals or Long Integers. |
| ResizeMethods | by | How the provided values affect the current dimensions |
| Mixed | values | Dimensions supplied as width and height. Allowed dimension specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space only chooses the length unit for x and y; for the 'current dimensions times' resize method, coordinate space is ignored). Accepts: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | False, when multiple page items are targeted, makes the new dimensions happen only by moving individual items rather than resizing them. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. Default: false. This matters only when the reference point is page-relative. (Optional) |
