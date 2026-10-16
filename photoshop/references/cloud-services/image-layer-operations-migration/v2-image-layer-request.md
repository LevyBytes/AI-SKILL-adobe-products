# Image-layer migration: V2 payload

**V2 create-composite:**

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
        "type": "layer",
        "name": "Hero Image",
        "image": {
          "source": {
            "url": "<IMAGE_URL>"
          }
        },
        "bounds": {
          "left": 0,
          "top": 0,
          "width": 1920,
          "height": 600
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      },
      {
        "type": "solid_color_layer",
        "name": "Background",
        "fill": {
          "solidColor": {
            "rgb": {
              "red": 240,
              "green": 240,
              "blue": 240
            }
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "bottom"
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
}
```

Related: [Image-layer migration: V1 payload](image-layer-migration.md).
