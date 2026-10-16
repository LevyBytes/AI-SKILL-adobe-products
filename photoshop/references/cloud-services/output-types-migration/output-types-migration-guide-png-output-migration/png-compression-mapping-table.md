# PNG compression mapping table

| v1 Compression | v2 Recommended | v2 Alternatives | Notes |
| --- | --- | --- | --- |
| `"small"` | `"maximum"` | `"very_high"`, `"high"` | Smallest file size, slower |
| `"medium"` | `"medium"` | `"default"`, `"medium_high"`, `"medium_low"` | Balanced performance |
| `"large"` | `"low"` | `"very_low"`, `"none"` | Fastest, larger files |

`compression` is optional. When it is absent, Create Composite and Generate Manifest both use `default` (level 6), a middle setting for size and runtime.
