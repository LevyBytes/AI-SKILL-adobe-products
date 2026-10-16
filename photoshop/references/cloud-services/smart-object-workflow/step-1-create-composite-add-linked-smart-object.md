# Step 1 — Create composite (add linked smart object)

**Endpoint:** `POST /v2/create-composite`

**Request payload:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_INPUT_ASSET_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Linked Added Smart Object",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<SIGNED_SMART_OBJECT_ASSET_GET_URL>"
            }
          }
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_OUTPUT_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

The result PSD contains a new linked smart object at the top of the layer stack, matching the images below.

**Before:** Original PSD.
[Figure: Before adding linked smart object](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/add-linked-before.png?raw=true)
**After:** PSD with linked smart object layer on top.
[Figure: After adding linked smart object](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/add-linked-after.png?raw=true)
