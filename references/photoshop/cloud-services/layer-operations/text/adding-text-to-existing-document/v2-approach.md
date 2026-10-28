# V2 approach

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
  "fontOptions": {
    "additionalFonts": [
      { "source": { "url": "<FONT_FILE_URL>" } }
    ],
    "defaultFontPostScriptName": "Arial_BoldMT",
    "missingFontStrategy": "use_default"
  },
  "edits": {
    "layers": [
      {
        "type": "text_layer",
        "name": "New Text Layer",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "text": {
          "content": "NEW TEXT LAYER",
          "antiAliasing": "smooth",
          "textOrientation": "horizontal",
          "frame": {
            "type": "area",
            "bounds": {
              "top": 42,
              "left": 25,
              "right": 1002,
              "bottom": 309
            }
          },
          "characterStyles": [
            {
              "apply": { "from": 0, "to": 13 },
              "characterStyle": {
                "font": { "postScriptName": "AcerFoco-SemiboldItalic" },
                "fontSize": 56,
                "fontColor": {
                  "rgb": {
                    "red": 0,
                    "green": 0,
                    "blue": 0
                  }
                }
              }
            }
          ]
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": { "url": "<SIGNED_POST_URL>" },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```
