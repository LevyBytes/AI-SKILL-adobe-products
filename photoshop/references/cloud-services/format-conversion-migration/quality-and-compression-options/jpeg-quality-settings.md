# JPEG quality settings

V2 selects JPEG quality with names instead of numbers:

| V2 Quality | V1 Quality (1-7) | Description |
| --- | --- | --- |
| `very_poor` | N/A | V2-only output with the smallest size |
| `poor` | N/A | V2-only output with very compact size |
| `low` | 1-2 | Thumbnails and compact previews |
| `medium` | 3-4 | Typical web image output |
| `high` | 5-6 | Higher-quality web output |
| `maximum` | 7 | Print and production use |
| `photoshop_max` | N/A | Highest-quality professional print output |

The `quality` parameter can be omitted. When it is absent, defaults depend on the operation:

- **Create Composite** (`/v2/create-composite`): `photoshop_max` is the default quality
- **Generate Manifest** (`/v2/generate-manifest`): layer thumbnails default to `medium`

**Example:**

```json
{
  "mediaType": "image/jpeg",
  "quality": "high"
}
```
