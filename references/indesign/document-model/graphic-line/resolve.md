# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted forms include Long Integers, BoundingBoxLimits enumerators, AnchorPoint enumerators, CoordinateSpaces enumerators, Array of Arrays of 2 Reals, an AnchorPoint enumerator, or an Array of 2 Reals. |
| CoordinateSpaces | in | Coordinate space used for resolution. |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. Default value: false. This matters only when the reference point is page-relative. (Optional) |
