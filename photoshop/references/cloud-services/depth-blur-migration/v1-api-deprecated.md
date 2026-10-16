# V1 API (deprecated)

**Endpoint:** `/pie/psdService/depthBlur`

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/depthBlur \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```
