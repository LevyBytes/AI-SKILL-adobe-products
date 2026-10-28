# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Allowed values include AnchorPoint enumerator, Array of 2 Reals, CoordinateSpaces enumerators, BoundingBoxLimits enumerators, Long Integers, AnchorPoint enumerators, or Array of Arrays of 2 Reals. |
| Mixed | withMatrix | Transformation matrix. Allowed values: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; supplying this optional parameter replaces the target's current transform components with new values. If omitted, the given matrix concatenates with the current target transform so both effects combine. Allowed values: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin with ruler units instead of points. The default value is false. This parameter only matters when the reference point is specified relative to a page. (Optional) |
