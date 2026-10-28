# applyLensBlur

23.5

**async** : _Promise_`<void>`

Executes Lens Blur.

Unsupported color modes: Indexed Color, Bitmap, RGB 32 bits, Grayscale 32 bits

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `source` | [_DepthMapSource_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#depthmapsource) | - | Depth-map source (default: `DepthMapSource.NONE`) |
| `focalDistance` | _number_ | 0 | Depth-map blur focal distance [0,255] (default: `0`). |
| `invertDepthMask` | _boolean_ | false | Inverts the depth map when true (default: `false`) |
| `shape` | [_Geometry_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#geometry) | - | Iris shape (default: `Geometry.HEXAGON`) |
| `radius` | _number_ | 15 | Iris radius [0,100] (default: 15) |
| `bladeCurvature` | _number_ | 0 | Iris blade curvature [0,100] (default: `0`) |
| `rotation` | _number_ | 0 | Iris rotation [0,360] (default: `0`) |
| `brightness` | _number_ | 0 | Specular-highlight brightness [0,100] (default: `0`) |
| `threshold` | _number_ | 0 | Specular-highlight threshold [0,255] (default: `0`) |
| `amount` | _number_ | 0 | Noise amount [0,100] (default: `0`) |
| `distribution` | [_NoiseDistribution_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#noisedistribution) | - | Noise distribution value (default: `NoiseDistribution.UNIFORM`) |
| `monochromatic` | _boolean_ | false | Monochromatic-noise flag (default: `false`) |
