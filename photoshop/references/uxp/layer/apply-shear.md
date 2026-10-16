# applyShear

23.5

**async** : _Promise_`<void>`

Executes Shear.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `curve` | \{ `x`: _number_ ; `y`: _number_ }[] | Shear curve specified as coordinate-point objects with x and y properties, for example [\{x:-20, y:1}, \{x:30, y:128}]. More than 2 coordinate objects may be supplied. For the "x" coordinate, use the range [-63,64]; for "y", use [1,128]. To show the curve correctly in the dialog UI, keep the first point at 0 on the "y" axis, keep the last point at 128 on the "y" axis, and sort points by ascending "y" value. |
| `undefinedArea` | [_UndefinedAreas_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#undefinedareas) | Treatment for distortion-created blank regions. |
