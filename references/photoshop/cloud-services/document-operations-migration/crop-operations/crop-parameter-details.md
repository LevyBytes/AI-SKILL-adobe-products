# Crop parameter details

**`bounds`**

This object specifies the pixel rectangle used for cropping:

```json
{
  "bounds": {
    "left": 100,
    "top": 100,
    "right": 1820,
    "bottom": 980
  }
}
```

Left edge X coordinate

Top edge Y coordinate

Right edge X coordinate

Bottom edge Y coordinate

- Every coordinate value uses pixels
- The document origin is the reference point, with (0,0 at top-left)

**`hide`**

- Type: Boolean
- Default: `false`
- Description:
  - `false` - Deletes pixels outside the bounds for a destructive crop
  - `true` - Hides out-of-bounds pixels while retaining the data
