# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transformation to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation |
| Mixed | from | Transform's temporary origin. Accepted values: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transform. Accepted values: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to replace; passing this optional value swaps the target's current transform components for new ones. When omitted, the given matrix is concatenated with the target's existing transform, combining both effects. Accepted values: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, an origin based on the ruler is read in ruler units instead of points. The default value is false. This matters only when the reference point is page-relative. (Optional) |
