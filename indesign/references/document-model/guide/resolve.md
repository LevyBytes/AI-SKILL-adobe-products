# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Converts the requested location into coordinates for the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted inputs: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Boolean | consideringRulerUnits | true interprets a ruler location in ruler units instead of points. The default value is false. This parameter matters only when the reference point is page-relative. (Optional) |
