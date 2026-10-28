# JPEG quality mapping table

| v2 Quality | v1 Quality | Use Case |
| --- | --- | --- |
| `"very_poor"` | N/A | Smallest files (v2 only) |
| `"poor"` | N/A | Very small files (v2 only) |
| `"low"` | 1-2 | Thumbnails, small previews |
| `"medium"` | 3-4 | Standard web images |
| `"high"` | 5-6 | High-quality web images |
| `"maximum"` | 7 | Print, production |
| `"photoshop_max"` | N/A | Professional print, highest quality (recommended) |

`quality` can be omitted. Defaults vary by operation:

- **Create Composite** (`/v2/create-composite`): omitted `quality` resolves to `photoshop_max`
- **Generate Manifest** (`/v2/generate-manifest`): layer thumbnails use `medium` when no quality is supplied
- **Execute Actions** (`/v2/execute-actions`): no default is guaranteed. If a V1 request left out `quality`, V1 used the highest-quality JPEG encoder. Set `quality: "photoshop_max"` explicitly when migrating those V1 execute-actions requests so pixel output stays aligned with V1 reference files.
