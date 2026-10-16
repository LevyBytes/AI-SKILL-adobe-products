# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Gets coordinates for the requested location in the specified coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Accepted forms include AnchorPoint enumerator, CoordinateSpaces enumerators, BoundingBoxLimits enumerators, Array of 2 Reals, Array of Arrays of 2 Reals or Long Integers. |
| CoordinateSpaces | in | Coordinate space to use. |
| Boolean | consideringRulerUnits | True interprets a ruler location with ruler units instead of points. Default: false. This matters only when the reference point is page-relative. (Optional) |
