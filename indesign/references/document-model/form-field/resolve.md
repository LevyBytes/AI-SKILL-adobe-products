# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Resolves the requested location to coordinates in the chosen coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for resolution. |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. The default value is false. This matters only when the reference point is page-relative. (Optional) |
