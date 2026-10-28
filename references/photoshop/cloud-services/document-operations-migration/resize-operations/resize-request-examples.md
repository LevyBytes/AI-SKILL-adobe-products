# Resize request dimensions and proportions

**Constrained-proportion resize:**

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

With `constrainProportions` set to `true`, supply width OR height; Photoshop calculates the remaining dimension.

**Percentage-based resize:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "percent_unit",
          "value": 50
        },
        "height": {
          "unit": "percent_unit",
          "value": 50
        },
        "resample": "bicubic_sharper"
      }
    }
  }
}
```

**Exact-dimension resize:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 800
        },
        "height": {
          "unit": "pixels_unit",
          "value": 600
        },
        "constrainProportions": false,
        "resample": "bicubic"
      }
    }
  }
}
```

Related references:

- [Resize interpolation examples](resize-interpolation-examples.md)
