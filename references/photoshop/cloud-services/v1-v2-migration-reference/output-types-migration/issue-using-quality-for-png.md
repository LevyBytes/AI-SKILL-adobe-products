# Issue: Using quality for PNG

**Problem:**

```json
{
  "mediaType": "image/png",
  "quality": "high"
}
```

**Error:**

```text
'quality' parameter is not supported for PNG format
```

**Solution:**

```json
{
  "mediaType": "image/png",
  "compression": "high"
}
```
