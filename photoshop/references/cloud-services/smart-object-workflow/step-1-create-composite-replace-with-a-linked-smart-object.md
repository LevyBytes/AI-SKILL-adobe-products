# Step 1 - Create composite (replace with a linked smart object)

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
        "name": "<EXISTING_SMART_OBJECT_LAYER_NAME>",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<SIGNED_NEW_SMART_OBJECT_GET_URL>"
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

The output PSD contains the replacement linked smart object, corresponding to the images below.

**Before:** PSD with linked smart object (from Example 1).
[Figure: Before replacing with linked smart object](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/add-linked-after.png?raw=true)
**After:** PSD with replaced linked smart object.
[Figure: After replacing with linked smart object](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/replace-after.png?raw=true)
