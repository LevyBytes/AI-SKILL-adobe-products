# Solid color layer critical changes

| V1 | V2 | Impact |
| --- | --- | --- |
| `type: "fillLayer"` | `type: "solid_color_layer"` | Type rename only |
| `fill.solidColor.rgb.red/green/blue` | `fill.solidColor.rgb.red/green/blue` | Unchanged — `rgb` wrapper required in both |

V1 and V2 both use `fill.solidColor.rgb.{red, green, blue}`, so the structure stays the same; only the layer type name is different.

**V1 and V2 (identical structure):**

```json
{ "fill": { "solidColor": { "rgb": { "red": 255, "green": 0, "blue": 0 } } } }
```

If the `rgb` wrapper is absent, the error reads: `"edits.layers[1].fill.solidColor.rgb: rgb is required"`.

> **TRAP — map V1 `fillLayer` to `type: "solid_color_layer"` even when `input.href` is present:**
> A V1 `fillLayer` can carry layer-level `input.href` alongside `fill.solidColor.rgb.*`. V2 `solid_color_layer` has no `input` field, so remove that layer-level `input.href`.
> When V1 `MaskDetails` also contains `mask.input.href`, interpret that reference as a pixel mask; the V2 target field is `pixelMask.source.url`.
