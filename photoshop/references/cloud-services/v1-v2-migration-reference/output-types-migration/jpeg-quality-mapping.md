# JPEG quality mapping

| V1 Numeric | V2 String | Use Case |
| --- | --- | --- |
| 1-2 | `"low"` | Thumbnails, small previews |
| 3-4 | `"medium"` | Standard web images |
| 5-6 | `"high"` | High-quality web images |
| 7 | `"maximum"` | Print, production |
| N/A | `"photoshop_max"` | Professional print, highest quality (recommended default) |
| N/A | `"very_poor"` | Smallest file size (V2 only) |
| N/A | `"poor"` | Very small files (V2 only) |

**Default:** For production workflows, use `"photoshop_max"`.

> **V1 implicit quality:** If a V1 `execute-actions` or `actionJSON` payload leaves out `quality`, V1 chooses the top JPEG encoder setting. During migration, set `quality: "photoshop_max"` in V2 whenever the V1 payload had no quality field; otherwise V2 may choose a lower default and create pixel-level differences from V1 reference outputs.

> **execute-actions pixel fidelity:** Different JPEG encoders are used by V1 and V2. Even identical quality settings can produce sub-1% pixel differences. Use `"photoshop_max"` as the baseline when pixel fidelity matters, and treat sub-1% JPEG diffs across API versions as normal.

**V1 Example:**

```json
{
  "type": "image/jpeg",
  "quality": 7,
  "width": 2000
}
```

**V2 Example:**

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum",
  "width": 2000
}
```
