# Auto tone

**Important migration changes:**

- Input payloads move from `inputs.href` to `image.source.url`
- Output payloads move from `outputs[].href` to `outputs[].destination.url`
- Media type is now supplied as `outputs[].mediaType` rather than `outputs[].type`
- `storageType` can be omitted for external presigned URLs; Azure and Dropbox still require it

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/lrService/autoTone \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
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
    "autoTone": true
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
