# Vector mask — NEW in V2

The old `fillLayer` response does not expose vector mask details. The new `solid_color_layer` response includes:

```json
{
  "vectorMask": {
    "hasMask": true,
    "bounds": { "left": 0, "top": 0, "right": 500, "bottom": 500 }
  }
}
```

Additional mask offset data can appear under `layerSettings.vectorMask`.
