# 8. Error Handling

| HTTP Code | `error_code` | Meaning / Action |
| --- | --- | --- |
| 400 | `input_validation_error` | Malformed request body. Check required fields and data types. |
| 401 | `unauthorized` | Missing or invalid bearer token. Re-authenticate. |
| 403 | `forbidden` | Valid token but insufficient permissions. Verify API entitlements. |
| 429 | `too_many_requests` | Rate limit exceeded. Implement exponential backoff. |
| 500 | `internal_server_error` | Transient server error. Retry with backoff before escalating. |

_Adobe Firefly Photoshop API — Generate Human Item Masks Granular Labels Guide • April 2026 • v1_
