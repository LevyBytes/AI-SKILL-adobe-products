# applyCustomFilter

23.5

**async** : _Promise_`<void>`

Executes Custom.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `characteristics` | _number_[] | Square matrix (5 x 5) used for the filter calculation. |
| `scale` | _number_ | Divisor applied to the summed pixel values included in the calculation |
| `offset` | _number_ | Value added after the scale calculation completes. |
