# Solid Color Layer Mapping

**V1:** `type: "fillLayer"` and an `rgb` object nested under `fill.solidColor`

```json
{
  "type": "fillLayer",
  "fill": {
    "solidColor": {
      "rgb": {
        "red": 255,
        "green": 0,
        "blue": 0
      }
    }
  }
}
```

**V2:** `type: "solid_color_layer"` using the same wrapping around `rgb`

```json
{
  "type": "solid_color_layer",
  "fill": {
    "solidColor": {
      "rgb": {
        "red": 255,
        "green": 0,
        "blue": 0
      }
    }
  }
}
```

**Mapping note:**

Map any V1 `fillLayer` indicated by `type: "fillLayer"` or `fill.solidColor.rgb.*` to V2 `type: "solid_color_layer"`. When a V1 layer also includes layer-level `input.href`, remove that field because V2 `solid_color_layer` does not accept `input`. Preserve only `mask.input.href` from V1 `MaskDetails`, translating it to `pixelMask.source.url`.
