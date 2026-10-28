# 5. Output fields

**V2 replaces three V1 boolean output fields with a renamed boolean plus one enum:** `overwrite: boolean` becomes `shouldOverwrite: boolean`; `trimToCanvas: boolean` maps to `cropMode: "trim_to_transparency"` or `"document_bounds"`; `trimToLayer: boolean` maps to `cropMode: "layer_bounds"`.

| V1 field | V2 field | Notes |
| --- | --- | --- |
| `href` | `destination.url` | Breaking: field moves under `destination` |
| `storage` | `destination.storageType` (Azure/Dropbox only) | Breaking: most storage types no longer use it |
| `type` | `mediaType` | Breaking: name changes |
| `quality` (number 1-7) | `quality` (string enum) | Breaking: value type changes |
| `compression` (`small`/`medium`/`large`) | `compression` (10-level enum) | Breaking: enum values differ |
| `width` | `width` | Unchanged |
| `maxWidth` | `maxWidth` | Unchanged |
| `overwrite` | `shouldOverwrite` | Breaking: name changes |
| `trimToCanvas` | _(removed)_ | Breaking: replace with `cropMode` |
| `trimToLayer` | _(removed)_ | Breaking: replace with `cropMode` |
| _(not in V1)_ | `height` | New: output height can be set directly |
| _(not in V1)_ | `cropMode` | New: accepts `trim_to_transparency`, `document_bounds`, `layer_bounds` |
| `layers` | `layers` (max 100 items) | Same idea; V2 caps the list at 100 items |
| `iccProfile` | `iccProfile` (not for PSDC output) | Same idea; PSDC output is restricted in V2 |
