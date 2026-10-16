# V2 create-composite sample

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
        "type": "background_layer",
        "name": "Background",
        "image": {
          "source": {
            "url": "<BACKGROUND_IMAGE_URL>"
          }
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
}
```
