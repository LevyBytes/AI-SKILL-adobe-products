# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Selects the coordinate space to use. |
| Mixed | from | Temporary origin used for the transformation. Accepted forms: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Provides the transform matrix. Accepted forms: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Names transform components to consider; supplying this optional argument replaces the target's current transform components with new values. Without it, the given matrix is concatenated onto the target's current transform so the two effects are combined. Accepted forms: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | When true, a ruler-based origin uses ruler units rather than points. The default value is false. This argument matters only when the reference point is page-relative. (Optional) |
