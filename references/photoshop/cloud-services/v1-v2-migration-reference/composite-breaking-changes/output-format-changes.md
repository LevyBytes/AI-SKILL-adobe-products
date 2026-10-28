# Output format changes

| Feature | V1 | V2 |
| --- | --- | --- |
| JPEG quality | Numeric 1–7 | String enum: `"low"`, `"medium"`, `"high"`, `"maximum"`, `"photoshop_max"` |
| PNG compression | `"small"`, `"medium"`, `"large"` | `"maximum"`, `"medium"`, `"low"` (and more) |
| Storage: external | `"storage": "external"` | `destination: {url: "..."}` |
| Storage: CC | `"storage": "adobe"` | `destination: {creativeCloudPath: "..."}` |
| ICC profile | Not supported | `iccProfile` on output (new) |
| Hosted storage | Not supported | `destination: {validityPeriod: N}` (new) |
