# 10. Crop mode (replaces V1 trim booleans)

V1 put two separate boolean flags on each output. V2 folds those choices into one enum:

| V1 | V2 `cropMode` |
| --- | --- |
| `trimToCanvas: true` | `"document_bounds"` |
| `trimToLayer: true` | `"layer_bounds"` |
| `trimToCanvas: true` + transparent pixels | `"trim_to_transparency"` |
| Both false (default) | Omit `cropMode` |
