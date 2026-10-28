# Invalid parameter names

**Problem:** V1-style PascalCase parameter names are still being sent

```json
{
  "Exposure": 1.2,
  "Contrast": 10
}
```

**Solution:** Switch to camelCase and place the fields in categories under `edits`

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
