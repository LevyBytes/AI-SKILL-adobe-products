# V1 API (deprecated)

**Endpoint:** `/pie/psdService/text`

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/text \
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
  "options": {
    "layers": [
      {
        "name": "your-text-layer-name",
        "text": {
          "orientation": "horizontal",
          "characterStyles": [
            {
              "size": 100,
              "orientation": "horizontal",
              "fontPostScriptName": "BrushScriptMT",
              "fontName": "Brush Script MT",
              "fontStyleName": "Regular",
              "color": {
                "red": 255,
                "green": 207,
                "blue": 104
              }
            }
          ]
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}'
```
