# Example 4: Layer addition

**V1 Code:**

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
        "type": "layer",
        "name": "New Image",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<`IMAGE_URL`>",
          "storage": "external"
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

**V2 Code:**

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
        "type": "layer",
        "name": "New Image",
        "image": {
          "source": {
            "url": "<`IMAGE_URL`>"
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
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

1. Endpoint: `/documentOperations` → `/create-composite`
2. Structure: `options.layers` → `edits.layers`
3. Add operation: `add: {insertTop: true}` → `operation: {type: "add", placement: {type: "top"}}`
4. Layer source: `input.href` → `image.source.url`
