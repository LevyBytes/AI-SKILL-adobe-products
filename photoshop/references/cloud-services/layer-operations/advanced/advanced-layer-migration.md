# Advanced layer migration: V1 payload

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
        "name": "Background",
        "move": {
          "insertBottom": true
        }
      },
      {
        "name": "Old Layer",
        "delete": {}
      },
      {
        "type": "layerSection",
        "name": "Effects Group",
        "add": {
          "insertTop": true
        }
      },
      {
        "type": "layer",
        "name": "Overlay",
        "add": {
          "insertInto": {
            "name": "Effects Group"
          }
        },
        "input": {
          "href": "<OVERLAY_URL>",
          "storage": "external"
        },
        "blendOptions": {
          "opacity": 60,
          "blendMode": "overlay"
        }
      },
      {
        "name": "Existing Layer",
        "edit": {},
        "mask": {
          "input": {
            "href": "<MASK_URL>",
            "storage": "external"
          },
          "linked": true,
          "enabled": true
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

- [Advanced layer migration: V2 payload](v2-advanced-layer-request.md)
