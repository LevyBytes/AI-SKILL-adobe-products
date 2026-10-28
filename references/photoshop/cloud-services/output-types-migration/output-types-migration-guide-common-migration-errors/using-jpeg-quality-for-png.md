# Using JPEG quality for PNG

❌ **Problem:**

```json
{
  "mediaType": "image/png",
  "quality": "high"
}
```

❌ **Error:**

```txt
'quality' parameter is not supported for PNG format
```

✅ **Solution:**

Set PNG compression through `compression`:

```json
{
  "mediaType": "image/png",
  "compression": "high"
}
```
