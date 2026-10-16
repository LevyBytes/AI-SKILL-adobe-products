# 3. Adjustments Structure - Required `type` in V2

**V1:** Inside `adjustments`, there is no `type`; only the adjustment payload appears, for example `brightnessContrast`.

**V2:** The `adjustments` object **must** carry a snake_case `type` parameter naming the adjustment, along with the matching payload.

**V1 (no type):**

```json
{
  "adjustments": {
    "brightnessContrast": {
      "brightness": 25,
      "contrast": 10
    }
  }
}
```

**V2 (type required):**

```json
{
  "adjustments": {
    "type": "brightness_contrast",
    "brightnessContrast": {
      "brightness": 25,
      "contrast": 10
    }
  }
}
```

Valid V2 `type` values are `brightness_contrast`, `exposure`, `hue_saturation`, and `color_balance`.
