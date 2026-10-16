# Oversized dimensions

**Problem:** The requested dimensions are above the maximum limits.

```json
{
  "width": 35000,
  "height": 35000
}
```

**Solution:** Keep width and height between 1 and 32000 pixels.

```json
{
  "width": 32000,
  "height": 32000
}
```
