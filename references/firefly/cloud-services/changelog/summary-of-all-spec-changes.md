# Summary of all spec changes

| Area | Before (beta) | After (GA) |
| --- | --- | --- |
| `x-model-version` accepted values | `creative_upsampler_v1` | `precise_upsampler_v1` |
| `x-model-version` default | `creative_upsampler_v1` | `precise_upsampler_v1` |
| Invalid model version response | Undefined behaviour | `422` with `validation_error` |
| `operationId` | `creativeUpsamplerV3Async` | `preciseUpsamplerV3Async` |
| Request schema | `CreativeUpsamplerRequestV3` | `PreciseUpsamplerRequestV3` |
| Accept response schema | `CreativeUpscaleAcceptResponseV3` | `PreciseUpscaleAcceptResponseV3` |
| Task link schema | `CreativeUpscaleTaskLink` | `PreciseUpscaleTaskLink` |
| Result schema | `CreativeUpsamplerResponse` | `PreciseUpsamplerResponse` |
| Endpoint summary | `Upscale image (beta)` | `Upscale image` |
| `Upscale` tag description | `...creative upsampler (beta)` | `...precise upsampler` |
