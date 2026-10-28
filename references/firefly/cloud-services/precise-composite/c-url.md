# cURL

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/precise-composite' \
  --header 'Authorization: Bearer $ACCESS_TOKEN' \
  --header 'x-api-key: $API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "background": {
      "image": {
        "source": { "url": "https://example.com/background.jpg" }
      },
      "fillAreaMask": {
        "source": { "url": "https://example.com/placement-mask.png" }
      }
    },
    "object": {
      "image": {
        "source": { "url": "https://example.com/product.png" }
      }
    },
    "blend": 0.5,
    "output": { "mediaType": "image/jpeg" }
  }'
```
