# strokePath

23.3

_Promise_`<void>`

Uses the specified tool to stroke the path.

`tool` is optional; the default is `ToolType.PENCIL`.

`simulatePressure` defaults to false.

When the tool is `ToolType.CLONESTAMP` or `ToolType.HEALINGBRUSH`, provide `sourceOrigin` as an object with x and y properties (in pixels) to identify the stroke source location. `sourceLayer` is optional; when omitted, the active document layer is used.

### Parameters

| Name | Type | Default value |
| --- | --- | --- |
| `tool` | [_ToolType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#tooltype) | - |
| `simulatePressure` | _boolean_ | false |
| `sourceOrigin?` | _object_ | - |
| `sourceOrigin.x` | _number_ | - |
| `sourceOrigin.y` | _number_ | - |
| `sourceLayer?` | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) | - |
