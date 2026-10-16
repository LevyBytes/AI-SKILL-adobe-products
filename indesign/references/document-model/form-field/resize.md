# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box that is resized. Accepts: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Method used to apply the supplied values to the current dimensions |
| Mixed | values | Width and height inputs. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, coordinate space determines _only_ the length unit for x and y, and for the 'current dimensions times' resize method the coordinate space has no effect). Accepts: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and the target contains multiple page items, the new dimensions are achieved by moving the separate items rather than resizing each one. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. The default value is false. This matters only when the reference point is page-relative. (Optional) |
