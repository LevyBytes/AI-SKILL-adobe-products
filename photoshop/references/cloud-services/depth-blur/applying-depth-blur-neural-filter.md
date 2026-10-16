# Applying depth blur neural filter

The following implementation sample sends a depth blur request:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/depthBlur \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<your_signed_get_url>",
      "storage": "<your_storage>"
    }
  ],
  "options": {
    "haze": 25,
    "blurStrength": 30,
    "focalSelector": {
        "x": 0.22,
        "y": 0.33
    }
  },
  "outputs": [
    {
      "storage": "<your_storage>",
      "type": "image/jpeg",
      "href": "<your_signed_post_url>"
    }
  ]
}'
```
