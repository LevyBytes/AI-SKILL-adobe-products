# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Mixed | from | Temporary origin for the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to evaluate; when this optional parameter is supplied, the target's current transform components are replaced by new values. Without it, the given matrix is concatenated with the target's current transform and both effects are combined. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units instead of points. Defaults to false. This matters only for page-relative reference points. (Optional) |
