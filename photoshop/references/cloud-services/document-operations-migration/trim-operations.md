# Trim operations

Trim detects transparent pixels at document edges and removes those edge areas automatically.

**Key Points:**

- `trimUpon` provides the v2 trim basis, replacing the v1 `"transparent_pixels"` field usage.

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
