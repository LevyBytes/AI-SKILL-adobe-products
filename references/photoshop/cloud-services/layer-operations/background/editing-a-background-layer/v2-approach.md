# V2 Approach

For v2 edits, include an explicit `operation` block and identify the target layer by the `id` or `name` that the manifest returned.
These properties can be changed **directly** on a background layer without converting it first:

- `isVisible` - changes whether the layer is visible
- `image.source` - supplies new pixels for the background

```json
{
  "edits": {
    "layers": [
      {
        "type": "background_layer",
        "id": 1,
        "operation": {
          "type": "edit"
        },
        "isVisible": false
      }
    ]
  }
}
```

Properties such as `transform`, `transformMode`, `pixelMask`, `protection`, and `blendOptions` are **not supported** directly on a background layer. Convert the background to a regular layer with `convertToLayer: true` before applying those options.

V2 layer edits **require** an explicit `operation` block with `type: "edit"`. Use the `id` or `name` from the manifest when referencing the background layer:
