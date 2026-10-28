# V1 approach: documentOperations

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentOperations \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [{
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  }],
  "options": {
    "fonts": [
      {
        "href": "<FONT_FILE_URL>",
        "storage": "external"
      }
    ],
    "layers": [
      {
        "add": { "insertTop": true },
        "type": "textLayer",
        "bounds": {
          "left": 25,
          "top": 42,
          "width": 977,
          "height": 267
        },
        "text": {
          "content": "NEW TEXT LAYER",
          "characterStyles": [
            {
              "fontSize": 56,
              "orientation": "horizontal",
              "fontColor": {
                "rgb": {
                  "red": 0,
                  "green": 0,
                  "blue": 0
                }
              },
              "fontName": "AcerFoco-SemiboldItalic"
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
