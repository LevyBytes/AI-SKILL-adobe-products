# Combining multiple document operations

Several document operations can be placed in one request. Processing follows this order: resize, crop, then trim.

**Key Points:**

- Put `resize`, `crop`, and `trim` together inside a single `edits.document` object.
- Execution order is resize -> crop -> trim.

**V2 request:**

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
          "value": 2000
        },
        "constrainProportions": true,
        "resample": "bicubic"
      },
      "crop": {
        "bounds": {
          "left": 100,
          "top": 100,
          "right": 1900,
          "bottom": 1000
        },
        "hide": false
      },
      "trim": {
        "trimUpon": "transparent_pixels"
      }
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```
