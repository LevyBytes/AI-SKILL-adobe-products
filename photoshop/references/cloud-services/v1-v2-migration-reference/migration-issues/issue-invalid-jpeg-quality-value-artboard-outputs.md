# Issue: Invalid JPEG quality value (artboard outputs)

**Problem:** Quality is numeric instead of a string enum.

**Error:** `Invalid value '7' at path 'outputs[0].quality'. Accepted values are: very_poor, poor, low, medium, high, maximum, photoshop_max`

**Solution:** Use a string enum value for `quality`.

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```
