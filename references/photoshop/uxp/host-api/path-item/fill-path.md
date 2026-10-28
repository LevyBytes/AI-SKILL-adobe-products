# fillPath

23.3

_Promise_`<void>`

Paints the area enclosed by this path.

Treat `opacity` as a percentage in the `[0.0 ... 100.0]` range.

Measure `feather` in pixels within the `[0.0 ... 250.0]` range.

When `wholePath` is true, the fill uses all subpaths.

### Parameters

| Name | Type | Default value |
| --- | --- | --- |
| `fillColor?` | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | - |
| `mode?` | [_ColorBlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#colorblendmode) | - |
| `opacity` | _number_ | 100.0 |
| `preserveTransparency` | _boolean_ | false |
| `feather` | _number_ | 0.0 |
| `wholePath` | _boolean_ | true |
| `antiAlias` | _boolean_ | true |
