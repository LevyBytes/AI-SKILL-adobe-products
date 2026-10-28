# Combining with output conversion

One request can both apply document operations and convert the result to other formats:

**Key Points:**

- Use `edits.document` for the operations, and add multiple `outputs[]` entries when you need more than one format, such as PSD and JPEG from one API request.

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
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 1920
        },
        "constrainProportions": true,
        "resample": "bicubic"
      }
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<PSD_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "high"
    }
  ]
}'
```
