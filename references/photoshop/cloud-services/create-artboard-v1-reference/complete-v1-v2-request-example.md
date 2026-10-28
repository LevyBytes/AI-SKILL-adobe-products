# 12. Complete V1 → V2 request example

**V1:**

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/artboardCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "options": {
    "artboard": [
      {"href": "<IMAGE_1_URL>", "storage": "external"},
      {"href": "<IMAGE_2_URL>", "storage": "external"}
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    },
    {
      "href": "<JPEG_URL>",
      "storage": "external",
      "type": "image/jpeg",
      "quality": 7,
      "width": 2000
    }
  ]
}'
```

**V2:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-artboard \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "images": [
    {"source": {"url": "<IMAGE_1_URL>"}},
    {"source": {"url": "<IMAGE_2_URL>"}}
  ],
  "artboardSpacing": 50,
  "outputs": [
    {
      "destination": {"url": "<SIGNED_POST_URL>"},
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {"url": "<JPEG_URL>"},
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2000
    }
  ]
}'
```

**Key transformation summary:**

1. `options.artboard[]` -> `images[]` (remove `options` wrapper)
2. `href` + `storage` -> `source.url` (on inputs)
3. `href` + `storage` -> `destination.url` (on outputs; `storageType` only for Azure/Dropbox)
4. `type` -> `mediaType`
5. `quality: 7` -> `quality: "maximum"`
6. Add `artboardSpacing` if custom spacing is needed (default is 50)
