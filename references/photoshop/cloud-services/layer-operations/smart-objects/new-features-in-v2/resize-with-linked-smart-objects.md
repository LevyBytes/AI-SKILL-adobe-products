# Resize with linked smart objects

V1 rejected every resize (`width`/`maxWidth`) for documents that contained linked smart objects. V2 removes that restriction.

| Scenario | Linked SO with content provided | Other linked SOs (no content) |
| --- | --- | --- |
| Width resize only (no edits) | N/A | Rasterized to pixel layer |
| Edit/add linked SO + width resize | Stays linked smart object | Rasterized to pixel layer |

**Example — Width resize only:**

If no edits are included, the engine has no linked file content available. During the resize, every linked smart object layer is rasterized into a pixel layer.

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_INPUT_PSD_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_OUTPUT_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop",
      "width": 200
    }
  ]
}
```

**Result:** The output PSD becomes 200px wide while preserving aspect ratio. Each linked smart object layer in the document is converted to a regular pixel (image) layer.

**Example — Edit linked SO + width resize:**

If the same request edits or adds a linked smart object and also resizes the document, the edited or added layer remains a linked smart object because its content came through the API. Preexisting linked SO layers that are not edited turn into pixel layers.

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_INPUT_PSD_GET_URL>"
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
              "url": "<SIGNED_REPLACEMENT_FILE_GET_URL>"
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
      "mediaType": "image/vnd.adobe.photoshop",
      "width": 200
    }
  ]
}
```

**Result:** The output PSD is resized to 200px width. The edited layer stays a linked smart object, since the edit supplied its content. Every other linked SO layer in the document is rasterized into a pixel layer.
