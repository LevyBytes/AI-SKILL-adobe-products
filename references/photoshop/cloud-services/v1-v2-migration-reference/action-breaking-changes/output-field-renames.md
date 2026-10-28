# Output field renames

| V1 | V2 |
| --- | --- |
| `quality` (numeric 1–12) | `quality` (string enum: `"very_poor"`, `"poor"`, `"low"`, `"medium"`, `"high"`, `"maximum"`, `"photoshop_max"`) |
| `compression` (`"small"`/`"medium"`/`"large"`) | `compression` (10-level enum: `"none"` through `"maximum"`) |
| `overwrite` | `shouldOverwrite` |
