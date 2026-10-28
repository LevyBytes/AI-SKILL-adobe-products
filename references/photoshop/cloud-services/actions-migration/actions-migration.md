# Actions Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide when moving from v1 Photoshop action endpoints to the unified `/v2/execute-actions` endpoint.

v1 distributed Photoshop actions across several endpoints. v2 brings the action-based surfaces together under `/v2/execute-actions`; the covered areas include:

- Traditional Photoshop action files using `.atn`
- Inline ActionJSON actions
- Convenience APIs: productCrop, depthBlur, text
- UXP scripts, with limited availability

The consolidated v1 endpoints are:

| v1 Endpoint | v2 Equivalent |
| --- | --- |
| `/pie/psdService/photoshopActions` | `/v2/execute-actions` with `.atn` files |
| `/pie/psdService/actionJSON` | `/v2/execute-actions` with inline actionJSON |
| `/pie/psdService/productCrop` | `/v2/execute-actions` with published action |
| `/pie/psdService/depthBlur` | ⚠️ Not yet supported (Neural Filters unavailable) |
| `/pie/psdService/text` | `/v2/execute-actions` with inline actionJSON or UXP scripts |
