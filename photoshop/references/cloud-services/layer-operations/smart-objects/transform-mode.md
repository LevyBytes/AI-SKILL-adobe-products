# Transform Mode

In V2, `transformMode` sets the way the smart object **layer** is placed and resized in the document:

- **`"none"`** - leaves the layer at its original size and position with no transform applied
- **`"custom"`** - uses explicit transform fields such as `offset`, `dimension`, `angle`, `skew`, `anchor`, and related values; include the required `transform` object
- **`"fit"`** - resizes the layer so it fits inside the canvas without changing aspect ratio; the layer is placed at `(0, 0)`. **Do not include a `transform` object** — requests that include one fail with 400.
- **`"fill"`** - resizes the layer so it covers the canvas, with possible cropping; the layer is placed at `(0, 0)`. **Do not include a `transform` object** — requests that include one fail with 400.

With either `fit` or `fill`, scaling leaves the layer positioned at `(0, 0)`. To place it elsewhere, send the fit/fill request without `transform`, then make a **second request** against that same layer using `transformMode: "custom"` and the required `transform.offset`.

```json
{
  "type": "smart_object_layer",
  "transformMode": "fit",
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<SMART_OBJECT_URL>"
      }
    }
  }
}
```

**`transformMode` operates at the document layer level; it does not define how replacement pixels are resized inside the smart object canvas.** Scaling inside the SO canvas is handled by `transform.dimension`:

- **No `transform.dimension`** (default) - the replacement image is resized proportionally to fit the SO canvas while keeping its aspect ratio. This rule applies no matter which `transformMode` is used. Use it for transparent-background assets such as cutout player photos when distortion must be avoided.
- **With `transform.dimension`** - the replacement image is stretched to the exact SO canvas dimensions. Choose this when the SO canvas size must be controlled pixel for pixel.

For example, `transformMode: "fill"` with no `transform.dimension` first scales the replacement proportionally onto the SO canvas; after that, `fill` is applied to the document layer. These are separate operations.
