# Endpoints covered

| V1 | V2 |
| --- | --- |
| `POST /pie/psdService/photoshopActions` | `POST /v2/execute-actions` |
| `POST /pie/psdService/actionJSON` | `POST /v2/execute-actions` |
| `POST /pie/psdService/productCrop` | `POST /v2/execute-actions` (published action) |
| `POST /pie/psdService/splitView` | `POST /v2/execute-actions` (published action) |
| `POST /pie/psdService/sideBySide` | `POST /v2/execute-actions` (published action) |
| `POST /pie/psdService/depthBlur` | Not yet supported (Neural Filters) |
| `POST /pie/psdService/text` | `POST /v2/execute-actions` (ActionJSON or UXP) |
| `POST /pie/psdService/smartObjectV2` | Not execute-actions — use document edit operations |

At the API-visible level, the known missing item is Neural Filters (Depth Blur), which V2 does not yet expose.
