# Invalid pixelScaleFactor

**Problem:** `pixelScaleFactor` cannot be zero or a negative number.

```json
{
  "pixelScaleFactor": 0
}
```

**Solution:** Send a positive value; the minimum is 0.1.

```json
{
  "pixelScaleFactor": 1.0
}
```
