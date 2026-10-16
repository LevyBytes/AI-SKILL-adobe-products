# Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Endpoint per operation type | `/lrService/autoTone`, `/lrService/autoStraighten`, etc. | Single `/v2/edit` for all | Breaking Change |
| Input specification | `inputs[0].href` + `"storage": "external"` | `image.source.url` | Breaking Change |
| Adjustment parameters location | `options` block | Top-level fields (`autoTone`, `light`, `color`, etc.) | Breaking Change |
| Output destination | `outputs[0].href` + `"storage": "external"` | `outputs[0].destination.url` | Breaking Change |
| Output format field | `"type": "image/jpeg"` | `"mediaType": "image/jpeg"` | Breaking Change |
| Multiple operations per request | Unsupported; one operation per call | Supported; combine any adjustments | Net New |
| Adjustment parameter values | Same | Same | Unchanged |
| Authentication | OAuth Server-to-Server | OAuth Server-to-Server (unchanged) | Unchanged |
