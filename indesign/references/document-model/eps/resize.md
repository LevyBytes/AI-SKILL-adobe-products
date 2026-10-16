# resize

> **resize**( Mixed **in**, Mixed **from**, ResizeMethods **by**, Mixed **values**, Boolean **resizeIndividually**, Boolean **consideringRulerUnits** )
>
> Changes the page item's size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | in | Bounding box that will be resized. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator. |
| Mixed | from | Origin point for the transform. Legal specifications: relative to bounding box: anchor \{anchor \{x,y}, bounds kind [, coordinate space]}; relative to coordinate space: \{x,y} \{\{x,y}[, coordinate space]}; relative to layout window ruler: \{\{x,y}, page index bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| ResizeMethods | by | Method that controls how the provided values alter the current dimensions. |
| Mixed | values | Width and height inputs. Legal dimensions specifications: \{x, y [, coordinate space]}, \{x, resize constraint [, coordinate space]}, or \{resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space controls _only_ the length unit for x and y; for the 'current dimensions times' resize method, coordinate space is ignored). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators. |
| Boolean | resizeIndividually | When false and the target contains multiple page items, the requested dimensions are reached by moving separate items rather than resizing each item. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler-unit values are used to interpret a ruler location instead of points. The default value is false. This argument has an effect only for page-relative reference points. (Optional) |
