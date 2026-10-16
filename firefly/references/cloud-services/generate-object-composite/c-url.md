# cURL

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-object-composite-async' \
  --header 'Authorization: Bearer $ACCESS_TOKEN' \
  --header 'x-api-key: $API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "prompt": "a product on a wooden table in a cozy kitchen",
    "image": {
      "source": { "url": "https://example.com/product.png" }
    }
  }'
```
