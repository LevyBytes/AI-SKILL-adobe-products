# Manual adjustments

**Important migration changes:**

- Adjustments now live inside `edits` and are grouped by purpose: `light`, `color`, `effects`, `sharpen`
- Parameter naming changes from PascalCase to camelCase
- V2 exposes a broader set of adjustment controls

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/lrService/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  },
  "options": {
    "Exposure": 1.2,
    "Contrast": 10,
    "Saturation": 20
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "light": {
      "exposure": 1.2,
      "contrast": 10
    },
    "color": {
      "saturation": 20
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```
