# `adjustments` block — CHANGED (restructured with type discriminant)

In the old shape, each adjustment type is represented by a camelCase sub-object key:

Separate example

```json
{
  "adjustments": {
    "vibrance": {
      "saturation": -24,
      "vibrance": 15
    }
  }
}
```

Separate example

```json
{
  "adjustments": {
    "brightnessContrast": {
      "brightness": 18,
      "contrast": 36
    }
  }
}
```

The new shape introduces a snake_case `type` discriminant and changes some nested fields:

Separate example

```json
{
  "adjustments": {
    "type": "vibrance",
    "vibrance": 15,
    "saturation": -24
  }
}
```

Separate example

```json
{
  "adjustments": {
    "type": "brightness_contrast",
    "brightnessContrast": {
      "brightness": 18,
      "contrast": 36
    }
  }
}
```
