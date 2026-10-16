# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Calculates coordinates for the requested location in the chosen coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Requested location. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Coordinate space for interpreting the location. |
| Boolean | consideringRulerUnits | When true, a ruler location is evaluated with ruler units rather than points. The default value is false. Only page-relative reference points use this setting. (Optional) |
