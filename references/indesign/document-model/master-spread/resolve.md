# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Converts the requested location into coordinates in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepts: Array of 2 Reals, AnchorPoint enumerator, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| CoordinateSpaces | in | Coordinate space used by the operation. |
| Boolean | consideringRulerUnits | When true, a ruler location is interpreted in ruler units rather than points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |
