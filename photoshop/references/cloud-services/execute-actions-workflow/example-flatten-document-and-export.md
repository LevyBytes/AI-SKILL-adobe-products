# Example: flatten document and export

This request flattens every layer in a PSD and returns JPEG output:

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/execute-actions" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://your-storage.com/input.psd"
    }
  },
  "options": {
    "uxp": {
      "source": {
        "content": "const { app } = require(\"photoshop\"); async function main() { await app.activeDocument.flatten(); } main();",
        "contentType": "application/javascript"
      }
    }
  },
  "outputs": [
    {
      "mediaType": "image/jpeg",
      "destination": {
        "validityPeriod": 3600
      }
    }
  ]
}'
```
