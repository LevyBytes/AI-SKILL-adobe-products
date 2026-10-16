# Remove Background

This API applies advanced AI to find and isolate the main image subject automatically, then remove the background.

### Overview

The `/v2/remove-background` endpoint identifies an image subject, removes the background, and returns the subject as output. See [Photoshop API v2 reference](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/photoshop-v2/index.md) for interactive OpenAPI details covering this endpoint and related v2 operations.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/imagecutout-cutout-example.png?raw=true)

```shell
curl -i -X POST \
  https://image.adobe.io/v2/remove-background \
  -H 'Authorization: Bearer $token' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: $apiKey' \
  -d '{
    "image": {
      "source": {
        "url": "<signed_get_url>"
      }
    },
    "mode": "cutout",
    "output": {
      "mediaType": "image/png"
    }
  }'
```

The response contains `jobId` and `statusUrl`. Use either `statusUrl` polling or `GET https://image.adobe.io/v2/status/{jobId}` with that `jobId`; stop after `status` reaches `succeeded` or `failed`.
