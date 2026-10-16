# Positioning and sizing

**V1:** Position and size are supplied through `bounds`

```json
{
  "name": "Transformed Layer",
  "bounds": {
    "left": 100,
    "top": 100,
    "width": 500,
    "height": 300
  }
}
```

**V2:** Position and size are supplied through `transform`, `offset`, and `dimension`

```json
{
  "name": "Transformed Layer",
  "transformMode": "custom",
  "transform": {
    "offset": {
      "horizontal": 100,
      "vertical": 100
    },
    "dimension": {
      "width": 500,
      "height": 300
    }
  }
}
```

When a request includes the `transform` object, V2 also needs `transformMode: "custom"`. Beyond simple placement and sizing, `transform` can also carry `horizontalAlign`, `verticalAlign`, `anchor`, `skew`, and degree-based `angle` values.

**`transform` object is only valid with `transformMode: "custom"`**. Sending `transform` with `fit`, `fill`, or `none` makes the service respond with HTTP 400.

**After scaling, `fit` and `fill` place the layer at `(0, 0)`**. For any nonzero placement, first send the fit/fill request without `transform`, then issue another request for the same layer with `transformMode: "custom"` and the target `offset`.

**Custom mode uses two passes when `dimension`, `angle`, or `skew` is present:**

1. **Pass 1** - if `anchor` is missing, PIE uses `(0, 0)`; otherwise geometry (`dimension` + `angle` + `skew`) pivots on `anchor`.
2. **Pass 2** - `setOffset` chooses `offset` first, then `horizontalAlign`/`verticalAlign`, and finally the fallback that restores original x, y so the layer does not drift.

**Geometry-only** requests, meaning dimension/angle/skew without offset or alignment, use the fallback; the original position is preserved silently. That matches V1 behavior.
