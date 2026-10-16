# Crop operations

Crop cuts away document areas according to the boundaries supplied in the request.

**Key Points:**

- `bounds`: Rectangle in pixels, using (`left`, `top`, `right`, `bottom`) coordinates from the document origin.
- `hide`: Set `false` for a destructive crop that removes pixels; set `true` to hide pixels while retaining their data.

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
      "crop": {
        "bounds": {
          "left": 100,
          "top": 100,
          "right": 1820,
          "bottom": 980
        },
        "hide": false
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
