# Example 5: Action execution

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/pie/psdService/photoshopActions \
  -d '{
  "inputs": [{
    "href": "<`IMAGE_URL`>",
    "storage": "external"
  }],
  "options": {
    "actions": [
      {
        "href": "<`ACTION_FILE_URL`>",
        "storage": "external"
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
curl -X POST https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<`IMAGE_URL`>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "url": "<`ACTION_FILE_URL`>"
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

1. Endpoint: `/photoshopActions` → `/execute-actions`
2. Input: `inputs[0].href` → `image.source.url`
3. Action: `actions[0].href` → `actions[0].source.url`
4. Storage: Removed from action and input
