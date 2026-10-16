# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Resizes the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box selected for resizing. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Transformation origin. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | How the supplied values affect the current dimensions. |
| Mixed | values | Width and height values. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space determines _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | If false and more than one page item is targeted, the new dimensions are reached by moving individual items rather than resizing them. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler location uses ruler units instead of points. Defaults to false. This matters only for page-relative reference points. (Optional) |
