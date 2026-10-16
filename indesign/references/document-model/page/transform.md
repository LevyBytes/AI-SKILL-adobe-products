# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |
| Mixed | from | Transformation's temporary origin. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to replace. Supplying this optional parameter swaps existing target transform components for new values. If omitted, the given matrix is concatenated onto the target's existing transform so both effects combine. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. Default value: false. This parameter applies only when the reference point is page-relative. (Optional) |
