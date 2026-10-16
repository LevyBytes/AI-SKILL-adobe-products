# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary transform origin. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transformation. Can accept: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to use; when supplied, this optional parameter substitutes new values for the target's current transform components. If omitted, the given matrix concatenates with the target's current transform so the effects combine. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | True interprets a ruler based origin with ruler units rather than points. Defaults to false. It only matters for a page-relative reference point. (Optional) |
