# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Optional selector for transform components. Supplying it replaces those target components with new values; omitting it concatenates the given matrix with the target's current transform so the effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, ruler units rather than points interpret a ruler-based origin. Default: false. Applies only when the reference point is page-relative. (Optional) |
