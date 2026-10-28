# applyLensFlare

23.5

**async** : _Promise_`<void>`

Executes Lens Flare.

Supported color modes: RGB 8 bits, RGB 16 bits, RGB 32 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `brightness` | _number_ | Brightness percentage applied [10,300]. |
| `flareCenter` | _object_ | Flare center as `{x: number, y: number}`. |
| `flareCenter.x` | _number_ | Horizontal pixel coordinate. |
| `flareCenter.y` | _number_ | Vertical pixel coordinate. |
| `lensType` | [_LensType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#lenstype) | Lens type for producing the result (default: `LensType.ZOOMLENS`). |
