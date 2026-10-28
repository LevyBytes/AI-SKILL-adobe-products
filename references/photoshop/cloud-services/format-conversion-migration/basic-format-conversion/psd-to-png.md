# PSD to PNG

Export a PSD as PNG when transparency must be retained.

**PNG-Specific Options:**

- `compression`: chooses the compression setting for PNG output ("none", "very_low", "low", "medium_low", "medium", "medium_high", "default", "high", "very_high", "maximum")
- `shouldTrimToCanvas`: crops away transparent edge pixels from the image

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/renditionCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/png",
      "width": 2048
    }
  ]
}'
```

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
      "mediaType": "image/png",
      "compression": "medium",
      "width": 2048
    }
  ]
}'
```
