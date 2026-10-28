# Transform mode rules (violation returns 400) migration

**Transform mode rules (violation returns 400):**

- **`fit` / `fill`**: omit the `transform` object. These modes scale the layer to fit or fill the canvas and place it at `(0, 0)`. To move it afterward, make a **second request** for that same layer using `transformMode: "custom"` and the wanted offset.
- **`custom`**: choose this mode when using any combination of `dimension`, `angle`, `skew`, `anchor`, or `offset`.
- **`none`**: performs no scale or position change; do not include a `transform` object.
