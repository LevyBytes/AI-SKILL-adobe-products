# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Transforms the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin for the transformation. Accepted forms include Array of 2 Reals; AnchorPoint enumerator; Array of Arrays of 2 Reals, with CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix value for the transformation; accepted forms are Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to consider; when this optional parameter is provided, the target's current transform components are replaced by new values. Without it, the supplied matrix is concatenated with the target's current transform so the two effects combine. Accepted forms include MatrixContent enumerator, an Array of MatrixContent enumerators, or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | true interprets a ruler-based origin with ruler units instead of points. Default: false. This only matters when the reference point is relative to a page. (Optional) |
