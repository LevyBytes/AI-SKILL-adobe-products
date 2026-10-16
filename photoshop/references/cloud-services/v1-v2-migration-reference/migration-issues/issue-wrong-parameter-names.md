# Issue: Wrong parameter names

**Problem:** Using V1 PascalCase

```json
{
  "options": {
    "Exposure": 1.2,
    "Contrast": 10
  }
}
```

**Solution:** Use V2 camelCase with categories

```json
{
  "edits": {
    "light": {
      "exposure": 1.2,
      "contrast": 10
    }
  }
}
```
