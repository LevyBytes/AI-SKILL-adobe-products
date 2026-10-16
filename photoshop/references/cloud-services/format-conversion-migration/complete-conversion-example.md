# Complete conversion example

Here is a full example that converts one PSD into several formats while using different output options:

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<CLOUD_PSD_URL>"
      },
      "mediaType": "document/vnd.adobe.cpsd+dcxucf"
    },
    {
      "destination": {
        "url": "<JPEG_FULL_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    },
    {
      "destination": {
        "url": "<JPEG_LARGE_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "high",
      "width": 2048
    },
    {
      "destination": {
        "url": "<JPEG_MEDIUM_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "medium",
      "width": 1024
    },
    {
      "destination": {
        "url": "<JPEG_THUMB_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "medium",
      "width": 400
    },
    {
      "destination": {
        "url": "<PNG_URL>"
      },
      "mediaType": "image/png",
      "compression": "medium",
      "shouldTrimToCanvas": true
    }
  ]
}'
```
