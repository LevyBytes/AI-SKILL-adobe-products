# V2 approach

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "document": {
    "width": 1000,
    "height": 1000,
    "resolution": {"unit": "density_unit", "value": 72},
    "fill": {
      "solidColor": {
        "red": 255,
        "green": 255,
        "blue": 255
      }
    },
    "mode": "rgb"
  },
  "edits": {
    "layers": [
      {
        "type": "text_layer",
        "name": "My Title",
        "text": {
          "content": "Hello World",
          "antiAliasing": "smooth",
          "textOrientation": "horizontal",
          "characterStyles": [
            {
              "characterStyle": {
                "fontSize": 48,
                "font": {
                  "postScriptName": "ArialMT"
                },
                "fontColor": {
                  "rgb": {
                    "red": 255,
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
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```
