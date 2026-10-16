# Example 1: Simple edit (auto tone)

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/lrService/autoTone \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "https://my-storage.com/input.jpg",
    "storage": "external"
  },
  "outputs": [
    {
      "href": "https://my-storage.com/output.jpg",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

**V2 Code:**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://my-storage.com/input.jpg"
    }
  },
  "edits": {
    "autoTone": true
  },
  "outputs": [
    {
      "destination": {
        "url": "https://my-storage.com/output.jpg"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

**Key Transformations:**

1. Base URL: `image.adobe.io` → `photoshop-api.adobe.io`
2. Endpoint: `/lrService/autoTone` → `/v2/edit`
3. Input: `inputs.href` → `image.source.url`
4. Operation: Implicit → `edits.autoTone: true`
5. Output: `outputs[].href` → `outputs[].destination.url`
6. Type: `type` → `mediaType`
7. Storage: Removed (not needed for standard URLs)
