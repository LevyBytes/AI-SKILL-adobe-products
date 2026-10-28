# Crop bounds outside canvas

❌ **Problem:** Crop coordinates go past the canvas.

```json
{
  "bounds": {
    "left": 0,
    "top": 0,
    "right": 5000,
    "bottom": 3000
  }
}
```

Exceeds document width

Exceeds document height

✅ **Fix:** Keep bounds within the document canvas.

```json
{
  "bounds": {
    "left": 0,
    "top": 0,
    "right": 1920,
    "bottom": 1080
  }
}
```

Within document width

Within document height
