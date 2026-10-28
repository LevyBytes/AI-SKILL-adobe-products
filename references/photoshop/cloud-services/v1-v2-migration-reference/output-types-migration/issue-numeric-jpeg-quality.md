# Issue: Numeric JPEG quality

**Problem:**

```json
{
  "mediaType": "image/jpeg",
  "quality": 7
}
```

**Error:**

```text
Invalid value '7' at path 'outputs[0].quality'.
Accepted values are: very_poor, poor, low, medium, high, maximum, photoshop_max
```

**Solution:**

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```
