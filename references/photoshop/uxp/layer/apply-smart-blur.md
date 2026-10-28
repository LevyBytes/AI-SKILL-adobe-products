# applySmartBlur

24.0

**async** : _Promise_`<void>`

Executes Smart Blur.

Supported color modes: RGB 8 bits, CMYK 8 bits, Duotone 8 bits,

Grayscale 8 bits, Lab 8 bits, Multichannel 8 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `radius` | _number_ | Blur radius [0.1,100]. |
| `threshold` | _number_ | Blur threshold [0.1,100]. |
| `blurQuality` | [_SmartBlurQuality_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#smartblurquality) | Blurred-image smoothness/graininess. |
| `mode` | [_SmartBlurMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#smartblurmode) | Smart Blur mode setting. |
