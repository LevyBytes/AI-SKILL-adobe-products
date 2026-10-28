# Example 3: Format conversion (PSD to JPEG)

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/pie/psdService/renditionCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "https://my-storage.com/document.psd",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "https://my-storage.com/output.jpg",
      "storage": "external",
      "type": "image/jpeg",
      "quality": 7,
      "width": 1920
    }
  ]
}'
```

**V2 Code:**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://my-storage.com/document.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://my-storage.com/output.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 1920
    }
  ]
}'
```

**Key Transformations:**

1. Endpoint: `/pie/psdService/renditionCreate` → `/v2/create-composite`
2. Input: `inputs[0].href` → `image.source.url`
3. Output: `outputs[0].href` → `outputs[0].destination.url`
4. Quality: Numeric `7` → String `"maximum"`
5. Storage: Removed (not needed)
6. No `edits` block (just format conversion)
