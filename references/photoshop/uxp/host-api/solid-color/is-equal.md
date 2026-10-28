# isEqual

23.0

_boolean_

Returns true when the target SolidColor is visually equivalent to `color`.

The comparison first converts both colors to Lab colorspace. It then averages, across the three channels, the normalized squared Euclidian-distance sum and tests that value against 3.5e-6.

Because color-space coverage and clamping differ, an RGB value that round-trips through CMYK may fail the visual-equality test.

### Parameters

| Name | Type |
| --- | --- |
| `color` | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) |
