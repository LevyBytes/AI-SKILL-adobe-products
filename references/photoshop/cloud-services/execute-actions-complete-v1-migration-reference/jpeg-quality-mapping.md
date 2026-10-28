# 9. JPEG quality mapping

| V1 (numeric) | V2 (string enum) |
| --- | --- |
| 1–2 | `"very_poor"` / `"poor"` |
| 3–4 | `"low"` / `"medium"` |
| 5–6 | `"high"` |
| 7–8 | `"maximum"` |
| 9–12 | `"photoshop_max"` |

For final production output at the top quality setting, choose `"photoshop_max"`. V2 rejects numeric quality input during validation.
