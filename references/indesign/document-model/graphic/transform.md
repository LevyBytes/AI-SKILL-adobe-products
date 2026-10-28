# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space used for the operation. |
| Mixed | from | Temporary transformation origin. Accepted forms include Long Integers, BoundingBoxLimits enumerators, AnchorPoint enumerators, CoordinateSpaces enumerators, Array of Arrays of 2 Reals, an AnchorPoint enumerator, or an Array of 2 Reals. |
| Mixed | withMatrix | Matrix used for the transform. Accepts an Array of 6 Reals or a TransformationMatrix. |
| Mixed | replacingCurrent | Transform components considered for replacement; when this optional value is supplied, the target's current components are replaced by the new values. If omitted, the supplied matrix is appended to the target's current transform so both effects combine. Accepts a MatrixContent enumerator, an Array of MatrixContent enumerators, or a Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin is read in ruler units instead of points. Default value: false. This matters only when the reference point is page-relative. (Optional) |
