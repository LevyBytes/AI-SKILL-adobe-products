# Resizing during conversion

During conversion, images can be resized to create thumbnails or scaled derivatives.

**Sizing Options:**

- Specify `width` only - the API calculates `height` to preserve aspect ratio
- Specify `height` only - the API calculates `width` to preserve aspect ratio
- Specify both `width` and `height` - the image is constrained inside those bounds while retaining aspect ratio
- Size range: 1 to 32000 pixels

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
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "high",
      "width": 800,
      "height": 600
    }
  ]
}'
```
