# Edit Operations

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this migration note when moving from separate Lightroom v1 endpoints to the unified `/v2/edit` endpoint.

Lightroom v1 spread editing work across several endpoints. In V2, edit behavior is gathered under one `/v2/edit` endpoint so a request can carry multiple adjustments together.

**V1 endpoints covered by `/v2/edit`:**

| V1 Endpoint | V2 Equivalent |
| --- | --- |
| `/lrService/autoTone` | `/v2/edit` with `autoTone: true` |
| `/lrService/autoStraighten` | `/v2/edit` with `autoStraighten` object |
| `/lrService/presets` | `/v2/edit` with `presets` array |
| `/lrService/xmp` | `/v2/edit` with `xmp` object |
| `/lrService/edit` | `/v2/edit` with adjustment parameters |
