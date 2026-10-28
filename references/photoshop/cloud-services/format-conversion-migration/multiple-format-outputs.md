# Multiple format outputs

Produce several output formats from one PSD during a single API call.

**V2 Approach:**

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
        "url": "<PSD_OUTPUT_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
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
        "url": "<JPEG_THUMB_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "high",
      "width": 400
    },
    {
      "destination": {
        "url": "<PNG_URL>"
      },
      "mediaType": "image/png",
      "compression": "small",
      "shouldTrimToCanvas": true
    }
  ]
}'
```

A request can include no more than 25 outputs.
