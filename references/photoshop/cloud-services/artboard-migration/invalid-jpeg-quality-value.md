# Invalid JPEG quality value

**Problem:** Quality is numeric rather than one of the named enum values

**Error:**

```text
Invalid value '7' at path 'outputs[0].quality'. Accepted values are: very_poor, poor, low, medium, high, maximum, photoshop_max
```

**Fix:** Provide one of the string enum values for `quality`

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```
