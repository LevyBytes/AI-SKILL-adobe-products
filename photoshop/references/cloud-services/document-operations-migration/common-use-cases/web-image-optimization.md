# Web image optimization

Prepare images for web delivery by resizing:

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 1920
        },
        "constrainProportions": true,
        "resample": "bicubic"
      }
    }
  }
}
```
