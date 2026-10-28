# Issue: Embedded storage for images

**Problem:** Using embedded for image output

```json
{
  "destination": {
    "embedded": "base64"
  },
  "mediaType": "image/jpeg"
}
```

Too large!

**Solution:** Use external or hosted storage for images

```json
{
  "destination": {
    "url": "<OUTPUT_URL>"
  },
  "mediaType": "image/jpeg"
}
```

Use embedded output only when returning XMP metadata or JSON manifest content.
