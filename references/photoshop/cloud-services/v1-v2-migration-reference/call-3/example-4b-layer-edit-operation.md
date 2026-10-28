# Example 4b: Layer edit operation

**V1 Code (with edit: \{\}):**

```shell
curl -X POST https://image.adobe.io/pie/psdService/documentOperations \
  -d '{
  "inputs": [{
    "href": "<`DOCUMENT_URL`>",
    "storage": "external"
  }],
  "options": {
    "layers": [
      {
        "id": 123,
        "type": "layer",
        "edit": {},
        "text": {
          "content": "Updated text"
        }
      }
    ]
  },
  "outputs": [{
    "href": "<`OUTPUT_URL`>",
    "storage": "external",
    "type": "image/vnd.adobe.photoshop"
  }]
}'
```

**V2 Code (explicit edit operation):**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<`DOCUMENT_URL`>"
    }
  },
  "edits": {
    "layers": [
      {
        "id": 123,
        "type": "text_layer",
        "text": {
          "content": "Updated text"
        },
        "operation": {
          "type": "edit"
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<`OUTPUT_URL`>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**Key Transformations:**

1. Layer type: `type: "layer"` → `type: "text_layer"` (specify actual layer type)
2. Operation: V1 `"edit": {}` → V2 `"operation": {"type": "edit"}`
3. Edit operation is now explicit and required (not implicit)
4. When V1 layer has `"edit": {}` with no add/delete, use edit operation in V2
