# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary transformation origin. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix supplied for the transformation. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to replace; when supplied, the target's existing transform components are overwritten with new values. Without it, the matrix is concatenated with the target's existing transform so both effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler-based origin in ruler units rather than points. Default value is false. It matters only when the reference point is relative to a page. (Optional) |
