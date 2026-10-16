# 2. Schema and operation identifiers renamed

All `Creative*` upsampler identifiers are now `Precise*`, matching the actual underlying model. Update any generated SDK usage or direct schema `$ref` references accordingly.

| Old name (beta) | New name (GA) |
| --- | --- |
| `creativeUpsamplerV3Async` | `preciseUpsamplerV3Async` |
| `CreativeUpsamplerRequestV3` | `PreciseUpsamplerRequestV3` |
| `CreativeUpscaleAcceptResponseV3` | `PreciseUpscaleAcceptResponseV3` |
| `CreativeUpscaleTaskLink` | `PreciseUpscaleTaskLink` |
| `CreativeUpsamplerResponse` | `PreciseUpsamplerResponse` |

> **Note:** Request payloads and response structures stay the same; this rename does not add, remove, or change fields.
