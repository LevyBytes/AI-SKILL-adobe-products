# `pixelMask` — CHANGED (was `mask`)

In the old response, layer-level mask data sits in `mask`:

```json
{
  "mask": {
    "enabled": true,
    "linked": true,
    "offset": {
      "x": 0,
      "y": 0
    },
    "type": "layer"
  }
}
```

The new response moves that data into `pixelMask`, which may be either `null` or a populated object:

```json
{
  "pixelMask": {
    "hasMask": true,
    "extendOpaque": true,
    "bounds": {
      "left": 0,
      "top": 0,
      "right": 2100,
      "bottom": 1500
    },
    "enabled": true,
    "linked": true,
    "offset": {
      "horizontal": 0,
      "vertical": 0
    }
  }
}
```

| Change | Notes |
| --- | --- |
| `mask` → `pixelMask` | Field renamed |
| `type: "layer"` removed | Discriminant removed |
| `extendOpaque` (NEW) | boolean — extend mask opacity |
| `bounds` (NEW) | Mask bounds added `{left,top,right,bottom}` |
| `offset.x` → `offset.horizontal`, `offset.y` → `offset.vertical` | Key names changed |
