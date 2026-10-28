# Resize (`edits.document.imageSize`)

| V1 | V2 | Notes |
| --- | --- | --- |
| `width`, `height` | `width`, `height` | Unchanged |
| `resolution` (number) | `resolution: {"unit": "density_unit", "value": N}` | Breaking: number → object |
| `constrainProportions` | `constrainProportions` | Unchanged |
| _(not in V1)_ | `resample` | New: `nearest_neighbor`, `bilinear`, `bicubic`, `bicubic_smoother`, `bicubic_sharper` |
| _(not in V1)_ | `scaleStyles` | New in V2 |
| _(not in V1)_ | `rasterize` | New in V2 |
