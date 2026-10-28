# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use |
| Mixed | from | Temporary origin used during transformation. Accepted forms include AnchorPoint enumerator, CoordinateSpaces enumerators, BoundingBoxLimits enumerators, Array of 2 Reals, Array of Arrays of 2 Reals or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; supplying this optional parameter replaces the target's current transform components with new values. Without it, the given matrix is concatenated onto the target's existing transform, combining both effects. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin with ruler units instead of points. Default: false. This matters only when the reference point is page-relative. (Optional) |
