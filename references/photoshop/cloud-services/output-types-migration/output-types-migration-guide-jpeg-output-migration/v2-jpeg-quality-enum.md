# V2 JPEG quality enum

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```

The v2 API expects a descriptive string value:

- `"very_poor"` - produces the lowest quality and smallest file
- `"poor"` - selects poor quality
- `"low"` - selects low quality
- `"medium"` - balances image quality with file size
- `"high"` - selects high quality
- `"maximum"` - selects maximum quality
- `"photoshop_max"` - uses Photoshop maximum quality and is the recommended default
