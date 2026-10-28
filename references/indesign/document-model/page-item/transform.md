# transform

> **transform**( CoordinateSpaces **in**, Mixed **from**, Mixed **withMatrix**, Mixed **replacingCurrent**, Boolean **consideringRulerUnits** )
>
> Applies a transform to the page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CoordinateSpaces | in | Coordinate space to use. |
| Mixed | from | Temporary origin used during transformation. Accepted values: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers. |
| Mixed | withMatrix | Matrix used for the transformation. Accepted values: Array of 6 Reals or TransformationMatrix. |
| Mixed | replacingCurrent | Transform components to include for replacement; when this optional parameter is supplied, the target's current transform components are replaced by the new values. If omitted, the supplied matrix is concatenated with the target's current transform so both effects are combined. Accepted values: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. (Optional) |
| Boolean | consideringRulerUnits | true interprets a ruler-based origin with ruler units instead of points. false is the default. This parameter only matters when the reference point is relative to a page. (Optional) |
