# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transform operation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for transformation. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; when supplied, this optional parameter replaces the target's existing transform components with new values. If omitted, the given matrix is concatenated onto the target's existing transform so both effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is interpreted with ruler units instead of points. The default value is false. This parameter only affects reference points specified relative to a page. (Optional) |
