# Smart-object layer migration: V2 payload

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
        "type": "smart_object_layer",
        "name": "Logo",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "smartObject": {
          "isLinked": false,
          "smartObjectFile": {
            "source": {
              "url": "<LOGO_PSD_URL>"
            }
          }
        },
        "transformMode": "custom",
        "transform": {
          "offset": {
            "horizontal": 50,
            "vertical": 50
          },
          "dimension": {
            "width": 400,
            "height": 400
          }
        }
      },
      {
        "type": "smart_object_layer",
        "name": "Product Image",
        "operation": {
          "type": "add",
          "placement": {
            "type": "above",
            "referenceLayer": {
              "name": "Logo"
            }
          }
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<PRODUCT_IMAGE_URL>"
            }
          }
        },
        "blendOptions": {
          "opacity": 85
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

Related: [Smart-object layer migration: V1 payload](smart-object-layer-migration.md).
