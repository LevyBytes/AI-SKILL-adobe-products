# Output field changes

| V1 | V2 | Breaking? |
| --- | --- | --- |
| `href` + `storage` | `destination.url` (or CC / hosted / embedded) | Yes |
| `type` | `mediaType` | Yes |
| `quality` 1–7 (number) | `quality` string enum | Yes |
| `compression` `small`/`medium`/`large` | `compression` 10-level enum | Yes |
| `overwrite` | `shouldOverwrite` | Yes (renamed) |
| `trimToCanvas: true` | `cropMode: "document_bounds"` or `"trim_to_transparency"` | Yes |
| `trimToLayer: true` | `cropMode: "layer_bounds"` | Yes |
| _(not in V1)_ | `height` | New |
