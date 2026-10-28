# 6. JPEG quality mapping

| V1 (numeric) | V2 (string enum) |
| --- | --- |
| 1 | `"very_poor"` |
| 2 | `"poor"` |
| 3-4 | `"medium"` |
| 5-6 | `"high"` |
| 7 | `"maximum"` |
| _(not in V1)_ | `"low"` |
| _(not in V1)_ | `"photoshop_max"` |

For production workflows, make `"photoshop_max"` the default because it gives JPEG output the highest quality. A numeric value such as `7` produces a V2 validation error.
