# 7c. Solid color layers (`fillLayer` → `solid_color_layer`)

**Type rename:** `"fillLayer"` → `"solid_color_layer"`

| V1 | V2 |
| --- | --- |
| `type: "fillLayer"` | `type: "solid_color_layer"` |
| `fill.solidColor.rgb.red` | `fill.solidColor.rgb.red` (unchanged) |
| `fill.solidColor.rgb.green` | `fill.solidColor.rgb.green` (unchanged) |
| `fill.solidColor.rgb.blue` | `fill.solidColor.rgb.blue` (unchanged) |

> **Note:** Only the layer type name changes. V1 and V2 both use `fill.solidColor.rgb.{red, green, blue}`; keep the required `rgb` wrapper in place.
>
> **V1 and V2 (identical structure):** `{"fill": {"solidColor": {"rgb": {"red": 255, "green": 0, "blue": 0}}}}`
>
> Error when `rgb` wrapper is omitted: `"edits.layers[1].fill.solidColor.rgb: rgb is required"`.
