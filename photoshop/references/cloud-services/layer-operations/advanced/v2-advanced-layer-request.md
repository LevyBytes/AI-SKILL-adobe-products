# Advanced layer migration: V2 payload

**V2 create-composite:** A group layer still cannot be created as part of new-document creation; that support remains an upcoming feature. For an existing document, the overlay can use `into` placement with `referenceLayer` when the PSD already contains the group.

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
        "name": "Background",
        "operation": {
          "type": "move",
          "placement": {
            "type": "bottom"
          }
        }
      },
      {
        "name": "Old Layer",
        "operation": {
          "type": "delete"
        }
      },
      {
        "type": "layer",
        "name": "Overlay",
        "image": {
          "source": {
            "url": "<OVERLAY_URL>"
          }
        },
        "opacity": 60,
        "blendMode": "overlay",
        "operation": {
          "type": "add",
          "placement": {
            "type": "into",
            "referenceLayer": {
              "name": "Effects Group"
            }
          }
        }
      },
      {
        "name": "Existing Layer",
        "operation": { "type": "edit" },
        "pixelMask": {
          "source": {
            "url": "<MASK_URL>"
          },
          "isLinked": true,
          "isEnabled": true
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

Related: [Advanced layer migration: V1 payload](advanced-layer-migration.md).
