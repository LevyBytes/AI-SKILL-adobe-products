# Creating with initial layers

One request can both create a document and add its starting content layers:

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": {"unit": "density_unit", "value": 72},
    "fill": "white",
    "mode": "rgb",
    "depth": 8
  },
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "Background Image",
        "image": {
          "source": {
            "url": "<IMAGE_URL>"
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "bottom"
          }
        }
      },
      {
        "type": "text_layer",
        "name": "Title",
        "text": {
          "content": "Hello World",
          "characterStyles": [
            {
              "characterStyle": {
                "fontSize": 72,
                "fontColor": {
                  "type": "rgb",
                  "red": 0,
                  "green": 0,
                  "blue": 0
                }
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
