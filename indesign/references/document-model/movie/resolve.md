# resolve

> Mixed **resolve**( Mixed **location**, CoordinateSpaces **in**, Boolean **consideringRulerUnits** )
>
> Returns coordinates for `location` after evaluating it in the requested coordinate system.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | location | Specifies the requested location. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| CoordinateSpaces | in | Selects the coordinate space for the result. |
| Boolean | consideringRulerUnits | When true, ruler-based positions use ruler units instead of points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |
