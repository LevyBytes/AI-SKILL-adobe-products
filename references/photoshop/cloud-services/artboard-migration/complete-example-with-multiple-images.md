# Complete example with multiple images

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-artboard \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "artboardSpacing": 100,
  "images": [
    {
      "source": {
        "url": "<IMAGE_1_URL>"
      }
    },
    {
      "source": {
        "url": "<IMAGE_2_URL>"
      }
    },
    {
      "source": {
        "url": "<IMAGE_3_URL>"
      }
    },
    {
      "source": {
        "url": "<IMAGE_4_URL>"
      }
    }
  ],
  "outputs": [
    {
      "destination": {
        "url": "<PSD_OUTPUT_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {
        "url": "<JPEG_OUTPUT_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2400
    },
    {
      "destination": {
        "validityPeriod": 7200
      },
      "mediaType": "image/png",
      "compression": "high"
    }
  ]
}'
```

This example:

1. Builds artboards from 4 images, separating them by 100px
2. Produces PSD output at its original resolution
3. Produces a high-quality JPEG with width set to 2400px
4. Produces PNG output in hosted storage with 2-hour validity
