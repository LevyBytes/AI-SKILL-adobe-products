# Example: warm vintage film look

This sample creates sepia-toned vintage styling and level adjustments:

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/execute-actions" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://your-storage.com/input-image.jpg"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"make\",\"_target\":[{\"_ref\":\"adjustmentLayer\"}],\"using\":{\"_obj\":\"adjustmentLayer\",\"type\":{\"_obj\":\"hueSaturation\",\"colorize\":true,\"hue\":{\"_unit\":\"angleUnit\",\"_value\":30},\"saturation\":{\"_unit\":\"percentUnit\",\"_value\":25},\"lightness\":{\"_unit\":\"percentUnit\",\"_value\":0}}}},{\"_obj\":\"make\",\"_target\":[{\"_ref\":\"adjustmentLayer\"}],\"using\":{\"_obj\":\"adjustmentLayer\",\"type\":{\"_obj\":\"levels\",\"adjustment\":[{\"_obj\":\"levelRecord\",\"channel\":{\"_ref\":\"channel\",\"_enum\":\"channel\",\"_value\":\"composite\"},\"inputFloor\":10,\"inputCeiling\":245,\"outputFloor\":15,\"outputCeiling\":255,\"gamma\":1.1}]}}},{\"_obj\":\"make\",\"_target\":[{\"_ref\":\"adjustmentLayer\"}],\"using\":{\"_obj\":\"adjustmentLayer\",\"type\":{\"_obj\":\"brightnessEvent\",\"brightness\":5,\"contrast\":-5}}}]",
          "contentType": "application/json"
        }
      }
    ]
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
