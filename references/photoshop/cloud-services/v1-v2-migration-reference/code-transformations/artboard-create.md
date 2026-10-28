# Example 7: Artboard create

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/pie/psdService/artboardCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {"href": "<`IMAGE_1_URL`>", "storage": "external"},
    {"href": "<`IMAGE_2_URL`>", "storage": "external"}
  ],
  "outputs": [
    {
      "href": "<`SIGNED_POST_URL`>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**V2 Code:**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/create-artboard \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "images": [
    {"source": {"url": "<`IMAGE_1_URL`>"}},
    {"source": {"url": "<`IMAGE_2_URL`>"}}
  ],
  "outputs": [
    {
      "destination": {"url": "<`SIGNED_POST_URL`>"},
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**Key Transformations:**

1. Endpoint: `/pie/psdService/artboardCreate` → `/v2/create-artboard`
2. Input: `inputs[]` → `images[]`; `href` + `storage` → `source.url`
3. Output: `outputs[].href` → `outputs[].destination.url`; `type` → `mediaType`
4. Optional: Add `artboardSpacing` (integer, pixels) for horizontal spacing between artboards (default 50)
5. Storage: Omit for standard URLs; use `destination.storageType` only for Azure/Dropbox
