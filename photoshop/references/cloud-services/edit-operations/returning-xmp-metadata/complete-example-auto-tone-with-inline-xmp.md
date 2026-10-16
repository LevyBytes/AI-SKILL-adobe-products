# Complete Example: Auto Tone with Inline XMP

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "edits": {
    "autoTone": true,
    "autoStraighten": {
      "enabled": true
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    },
    {
      "destination": {
        "embedded": "string"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}'
```

**Why Use Embedded XMP:**

- **Immediate Access** - Receive XMP in the status response without fetching another file
- **No Storage Needed** - Avoid managing separate XMP file storage
- **Simplified Workflow** - One status check returns both the image URL and the XMP data
- **Perfect for Automation** - Easy to parse and persist in your database

Use embedded storage only for text outputs such as XMP metadata. For image results, choose external, hosted, or Creative Cloud storage.

**Use Cases:**

- **Preset Creation** - Generate presets automatically from successful edits
- **Batch Processing** - Reuse the same adjustments across many images
- **Audit Trail** - Capture the adjustments that were applied
- **Learning Tool** - Inspect the values that `autoTone` chose automatically
