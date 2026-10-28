# PSD to JPEG

Export a PSD into JPEG format.

**Key Changes:**

- `inputs[0].href` -> `image.source.url`
- `outputs[].href` -> `outputs[].destination.url`
- `storage` -> `storageType`
- `type` -> `mediaType`
- `quality` (1-7 numeric scale) -> `quality` (string: "very_poor", "poor", "low", "medium", "high", "maximum", "photoshop_max")

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/renditionCreate \
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
      "type": "image/jpeg",
      "quality": 7,
      "width": 1920
    }
  ]
}'
```

**V2 Approach:**

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
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 1920
    }
  ]
}'
```
