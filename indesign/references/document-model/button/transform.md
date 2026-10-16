# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Accepts Array of 2 Reals, AnchorPoint enumerator, or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators, or Long Integers. |
| Mixed | withMatrix | Transformation matrix. Accepts Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components that participate. Supplying this optional value replaces the target's current transform components with new values; when omitted, the given matrix is concatenated with the target's existing transform so both effects combine. Accepts MatrixContent enumerator, Array of MatrixContent enumerators, or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units rather than points. Default false. It matters only when the reference point is page-relative. (Optional) |
