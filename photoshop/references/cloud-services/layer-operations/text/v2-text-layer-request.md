# Text layer migration: V2 payload

**V2 create-composite payload:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "text_layer",
        "name": "Headline",
        "text": {
          "content": "Welcome",
          "frame": {
            "type": "area",
            "bounds": {
              "top": 100,
              "left": 0,
              "right": 1920,
              "bottom": 250
            }
          },
          "characterStyles": [
            {
              "characterStyle": {
                "fontSize": 72,
                "font": {
                  "postScriptName": "Arial-BoldMT"
                },
                "fontColor": {
                  "rgb": {
                    "red": 0,
                    "green": 0,
                    "blue": 0
                  }
                }
              }
            }
          ],
          "paragraphStyles": [
            {
              "paragraphStyle": {
                "alignment": "center"
              }
            }
          ]
        },
        "operation": {
          "type": "add"
        }
      }
    ]
  },
  "fontOptions": {
    "missingFontStrategy": "use_default"
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

Related: [Text layer migration: V1 payload](text-layer-migration.md).
