# Image-layer migration: V1 payload

**V1 documentOperations:**

```json
{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "type": "layer",
        "name": "Hero Image",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<IMAGE_URL>",
          "storage": "external"
        },
        "bounds": {
          "left": 0,
          "top": 0,
          "width": 1920,
          "height": 600
        }
      },
      {
        "type": "fillLayer",
        "name": "Background",
        "add": {
          "insertBottom": true
        },
        "fill": {
          "solidColor": {
            "rgb": {
              "red": 240,
              "green": 240,
              "blue": 240
            }
          }
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
}
```

Related references:

- [Image-layer migration: V2 payload](v2-image-layer-request.md)
