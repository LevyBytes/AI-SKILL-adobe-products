# Complete example with all options

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/generate-manifest \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "includeLayerThumbnails": true,
  "maximumThumbnailDepth": 5,
  "includeXmp": true,
  "trimToTransparency": true,
  "exportOptions": {
    "mediaType": "image/jpeg",
    "quality": "high"
  },
  "outputs": [
    {
      "destination": {
        "url": "<MANIFEST_OUTPUT_URL>"
      },
      "mediaType": "application/json"
    }
  ]
}'
```
