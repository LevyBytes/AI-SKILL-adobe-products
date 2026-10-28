# Resize interpolation examples

**Smooth interpolation for upscaling:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 4000
        },
        "constrainProportions": true,
        "resample": "bicubic_smoother",
        "scaleStyles": true
      }
    }
  }
}
```

**Sharp interpolation for downscaling:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 800
        },
        "constrainProportions": true,
        "resample": "bicubic_sharper",
        "scaleStyles": true
      }
    }
  }
}
```

Related: [Resize request dimensions and proportions](resize-request-examples.md).
