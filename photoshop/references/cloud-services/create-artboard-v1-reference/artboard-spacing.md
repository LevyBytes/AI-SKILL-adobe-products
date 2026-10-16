# 4. Artboard spacing

| Field | V1 | V2 |
| --- | --- | --- |
| `artboardSpacing` | Not present | Optional pixel integer |
| Default | N/A | 50 pixels |
| Location | N/A | Root-level peer of `images` and `outputs` |

The service places artboards in a left-to-right horizontal row. It inserts the configured gap between each neighboring pair. Total output width = sum of image widths + (spacing × (image count − 1)).
