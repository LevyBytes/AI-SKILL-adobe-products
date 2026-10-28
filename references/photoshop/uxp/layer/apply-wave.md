# applyWave

24.0

**async** : _Promise_`<void>`

Executes Wave.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

## See also

- [Unsupported](../unsupported.md)

### applyWave

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `generatorNumber` | _number_ | Whole-number generator count [1,999]. |
| `minimumWavelength` | _number_ | Lower wave-length bound [1,(maximum wave length - 1)] (whole number). |
| `maximumWavelength` | _number_ | Upper wave-length bound [(minimum wave length + 1),999] (whole number). |
| `minimumAmplitude` | _number_ | Lower amplitude bound [1,(maximum amplitude - 1)] (whole number). |
| `maximumAmplitude` | _number_ | Upper amplitude bound [(minimum amplitude + 1),999] (whole number). |
| `horizontalScale` | _number_ | Horizontal scale percentage [1,100] (whole number). |
| `verticalScale` | _number_ | Vertical scale percentage [1,100] (whole number). |
| `waveType` | [_WaveType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#wavetype) | Optional wave type. |
| `undefinedAreas` | [_UndefinedAreas_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#undefinedareas) | Optional handling for regions left blank by the distortion. |
| `randomSeed` | _number_ | Optional random seed. |
