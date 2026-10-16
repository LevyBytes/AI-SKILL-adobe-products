# Resize parameter details

**`width` and `height`**

Each dimension is represented by an object with `unit` and `value`:

```json
{
  "width": {
    "unit": "pixels_unit",
    "value": 1920
  },
  "height": {
    "unit": "pixels_unit",
    "value": 1080
  }
}
```

**Supported unit types:**

- `pixels_unit` - Fixed measurements in pixels
- `percent_unit` - Scaling expressed as a percentage
- `distance_unit` - Physical sizing expressed in points

**`constrainProportions`**

- Type: Boolean
- Default: `true`
- Description: keeps resizing from changing the aspect ratio
- When `true`: Specify only one dimension if the other side should be derived

**`resample`**

- Type: String
- Default: `"bicubic"`
- Options:
  - `"nearest_neighbor"` - Fastest, with the lowest output quality
  - `"bilinear"` - Quick option with moderate quality
  - `"bicubic"` - Balances quality and speed, and is the recommended choice
  - `"bicubic_smoother"` - Works well for enlarging images
  - `"bicubic_sharper"` - Works well for reducing image size
- Description: chooses the resampling algorithm used for the resize

**`scaleStyles`**

- Type: Boolean
- Default: `true`
- Description: adjusts layer styles (effects) in proportion with the resize

**`rasterize`**

- Type: Boolean
- Default: `false`
- Description: rasterizes layers as part of the resize operation
