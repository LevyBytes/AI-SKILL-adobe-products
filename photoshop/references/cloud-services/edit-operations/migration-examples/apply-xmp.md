# Apply XMP

**Important migration changes:**

- XMP now lives under the `edits` object
- Replace `options.xmp.href` with `edits.xmp.source.url`

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/lrService/xmp \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  },
  "options": {
    "xmp": {
      "href": "<XMP_URL>",
      "storage": "external"
    }
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
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      }
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
