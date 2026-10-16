# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box to resize. Accepts: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transform origin. Allowed forms: bounding-box relative: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; coordinate-space relative: \{x,y} \{\{x,y}[, coordinate space]}; layout-window-ruler relative: \{\{x,y}, page index bounds kind}. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the given values affect the current dimensions. |
| Mixed | values | Width and height values. Allowed dimension forms: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and the coordinate space contributes _only_ their length unit; the 'current dimensions times' resize method ignores coordinate space. Accepts: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | If false and several page items are targeted, individual items are moved to reach the new dimensions instead of being resized. (Optional) |
| Boolean | consideringRulerUnits | If true, a ruler location uses ruler units rather than points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |
