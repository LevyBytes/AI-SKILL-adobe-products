# Output Types Migration Guide — Summary of changes

Every output format in v2 follows the same broad structural updates:

| Change | v1 | v2 |
| --- | --- | --- |
| **Location URL** | `outputs[].href` | `outputs[].destination.url` |
| **Format Type** | `outputs[].type` | `outputs[].mediaType` |
| **Storage Type** | `outputs[].storage` (required) | `outputs[].destination.storageType` (optional) |
| **Quality (JPEG)** | Numeric 1-7 (or 1-12) | String enum |
| **Compression (PNG)** | "small", "medium", "large" | Detailed string enum |
| **ICC Profile** | Not available | Optional `iccProfile` for color management (see [ICC Profile Migration](../icc-profile-migration-guide-overview/reference-index.md)) |
