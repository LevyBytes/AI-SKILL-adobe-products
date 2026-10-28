# XMP with Auto Tone

**Example: Auto Tone with XMP Output**

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
    "autoTone": true
  },
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_OUTPUT_URL>"
      },
      "mediaType": "image/jpeg"
    },
    {
      "destination": {
        "url": "<XMP_OUTPUT_URL>"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}'
```

That request produces two outputs:

1. A JPEG image with auto tone applied
2. An XMP file with the applied adjustment values
