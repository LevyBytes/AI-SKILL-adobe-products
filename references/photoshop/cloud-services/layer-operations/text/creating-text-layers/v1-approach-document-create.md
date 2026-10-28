# V1 approach: documentCreate

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "options": {
    "document": {
      "width": 1000,
      "height": 1000,
      "resolution": 72,
      "fill": "white",
      "mode": "rgb"
    },
    "layers": [
      {
        "type": "textLayer",
        "name": "My Title",
        "text": {
          "content": "Hello World",
          "characterStyles": [
            {
              "fontSize": 48,
              "fontName": "Arial-BoldMT",
              "fontColor": {
                "rgb": {
                  "red": 255,
                  "green": 0,
                  "blue": 0
                }
              }
            }
          ],
          "paragraphStyles": [
            {
              "alignment": "center"
            }
          ]
        }
      }
    ]
  },
  "outputs": [{
    "href": "<SIGNED_POST_URL>",
    "storage": "external",
    "type": "image/vnd.adobe.photoshop"
  }]
}'
```
