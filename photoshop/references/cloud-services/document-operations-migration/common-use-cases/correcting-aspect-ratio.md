# Correcting aspect ratio

Use crop bounds to reach the target aspect ratio, such as 16:9:

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 0,
          "top": 120,
          "right": 1920,
          "bottom": 1200
        },
        "hide": false
      }
    }
  }
}
```
