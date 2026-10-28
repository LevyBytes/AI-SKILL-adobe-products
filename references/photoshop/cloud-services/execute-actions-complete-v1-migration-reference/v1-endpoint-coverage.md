# 1. V1 endpoint coverage

| V1 Endpoint | V2 Endpoint | Notes |
| --- | --- | --- |
| `POST /pie/psdService/photoshopActions` | `POST /v2/execute-actions` | `.atn` file execution |
| `POST /pie/psdService/actionJSON` | `POST /v2/execute-actions` | Inline ActionJSON (stringified in V2) |
| `POST /pie/psdService/productCrop` | `POST /v2/execute-actions` (published action) | Convenience API |
| `POST /pie/psdService/depthBlur` | **Not yet supported** | Neural Filters unavailable in V2 |
| `POST /pie/psdService/text` | `/v2/execute-actions` | Use UXP/actions instead |
| `POST /pie/psdService/smartObjectV2` | `/v2/execute-actions` | Use UXP/actions instead |

The currently known API-visible gap is Neural Filters (Depth Blur); V2 does not yet expose them.
