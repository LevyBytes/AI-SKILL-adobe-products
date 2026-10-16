# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space for the operation. |
| Mixed | from | Temporary origin used while transforming. Accepts: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Accepts: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components included in replacement; when this optional value is supplied, the target's current transform components are replaced by new values. Without it, the supplied matrix is concatenated with the target's current transform so both effects combine. Accepts: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units instead of points. The default value is false. This setting only matters when the reference point is page-relative. (Optional) |
