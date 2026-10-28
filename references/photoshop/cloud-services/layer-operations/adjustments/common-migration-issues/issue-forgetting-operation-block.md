# Issue: Forgetting operation block

**Problem:** New layers in V2 need an explicit operation

**Solution:** Include an operation block whenever you add a layer

```json
{
  "type": "adjustment_layer",
  "adjustments": {
    "type": "brightness_contrast",
    "brightnessContrast": { "brightness": 30, "contrast": 20 }
  },
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  }
}
```
