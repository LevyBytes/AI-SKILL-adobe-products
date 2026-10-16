# V1 JPEG quality (numeric)

```json
{
  "type": "image/jpeg",
  "quality": 7
}
```

The v1 API accepts numeric quality settings:

- Range: 1-7 (some versions supported 1-12)
- Larger numbers choose higher quality
- If omitted, v1 resolves to 7, the maximum-quality setting
