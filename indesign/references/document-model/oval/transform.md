# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform operation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |
| Mixed | from | Temporary transformation origin. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Specifies transform components to evaluate; when this optional argument is provided, matching existing target components are swapped for new values. If omitted, the supplied matrix is concatenated with the target's current transform so both effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. The default value is false. Only page-relative reference points use this setting. (Optional) |
