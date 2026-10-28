# Thumbnail generation

Create thumbnails by resizing first, with crop added when the thumbnail shape requires it:

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 400
        },
        "constrainProportions": true,
        "resample": "bicubic_sharper"
      }
    }
  }
}
```
