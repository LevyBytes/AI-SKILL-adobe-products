# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns the coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Boolean | consideringRulerUnits | When true, a ruler location is read in ruler units instead of points. Default value: false. This parameter applies only when the reference point is page-relative. (Optional) |
