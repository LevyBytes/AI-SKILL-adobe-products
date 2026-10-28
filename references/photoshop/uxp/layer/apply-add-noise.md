# applyAddNoise

23.5

**async** : _Promise_`<void>`

Executes Add Noise.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | Noise percentage to apply [0.1,400]. |
| `distribution` | [_NoiseDistribution_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#noisedistribution) | Distribution method used. |
| `monochromatic` | _boolean_ | When true, adds black-and-white noise. |
