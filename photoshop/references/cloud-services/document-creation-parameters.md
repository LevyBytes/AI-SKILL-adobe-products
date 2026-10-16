# 3. Document creation parameters

V2 moves `documentCreate` `options.document.*` settings into top-level `image.*` fields:

| V1 (`options.document.*`) | V2 (`image.*`) | Notes |
| --- | --- | --- |
| `width` | `width` | 1–32000 px |
| `height` | `height` | 1–32000 px |
| `resolution` (number, e.g. `72`) | `resolution: {"unit": "density_unit", "value": 72}` | Breaking: number → object |
| `fill: "white"` | `fill: "white"` | Preserved string shortcut |
| `fill: "transparent"` | `fill: "transparent"` | Preserved string shortcut |
| `fill: "backgroundColor"` | `fill: "background_color"` | Breaking: spelling changed |
| `fill: "white"` (explicit color) | `fill: {"solidColor": {"rgb": {"red": 255, "green": 255, "blue": 255}}}` | V2 adds object form for custom colors |
| `mode: "greyscale"` | `mode: "grayscale"` | Breaking: spelling fixed |
| `mode: "rgb"` / `"cmyk"` / `"lab"` etc. | Same values | Unchanged |
| `depth: 8` | `depth: 8` | Unchanged (integer) |
| _(not in V1)_ | `pixelScaleFactor` | New: number, min 0.1 |
| _(not in V1)_ | `name` | New: string, max 255 chars |
| _(not in V1)_ | `iccProfile: {"type": "standard", "name": "..."}` | New: standard ICC profiles only |

For custom colors, V2 changes `fill` from a string-only shortcut into an object-capable field. V1 accepted `"white"` as a shortcut string; V2 keeps `"white"` and `"transparent"` as shortcuts, while solid colors need the object syntax. Also keep the enum rename in mind: V1 used `"backgroundColor"`, and V2 expects `"background_color"`.

**V1 (string):**

```json
{ "fill": "white" }
```

**V2 (object form for custom RGB):**

```json
{ "fill": { "solidColor": { "rgb": { "red": 255, "green": 255, "blue": 255 } } } }
```
