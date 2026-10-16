# Brightness/Contrast

For **V2**, include `type` inside `adjustments`:

```json
{
  "type": "adjustment_layer",
  "name": "Brightness/Contrast",
  "adjustments": {
    "type": "brightness_contrast",
    "brightnessContrast": {
      "brightness": 25,
      "contrast": -10
    }
  }
}
```

**Parameters:**

- `brightness`: -150 to 150 (default: 0)
- `contrast`: -150 to 150 (default: 0)
