# Invalid unit type

❌ **Problem:** The request uses an unsupported unit type.

```json
{
  "width": {
    "unit": "px",
    "value": 1920
  }
}
```

✅ **Solution:** Use one of the accepted unit types.

```json
{
  "width": {
    "unit": "pixels_unit",
    "value": 1920
  }
}
```
