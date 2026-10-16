# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Resolves the requested location to coordinates in the chosen coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. The default value is false. It matters only when the reference point is relative to a page. (Optional) |
