# Missing unit object

❌ **Problem:** `width` and `height` are supplied as plain numbers.

```json
{
  "resize": {
    "width": 1920,
    "height": 1080
  }
}
```

✅ **Solution:** Use the required object shape for unit-based dimensions.

```json
{
  "resize": {
    "width": {
      "unit": "pixels_unit",
      "value": 1920
    },
    "height": {
      "unit": "pixels_unit",
      "value": 1080
    }
  }
}
```
