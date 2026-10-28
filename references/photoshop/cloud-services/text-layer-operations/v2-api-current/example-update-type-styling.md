# Example: update type styling

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"select\",\"_target\":[{\"_name\":\"your-text-layer-name\",\"_ref\":\"layer\"}],\"makeVisible\":true},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"size\":{\"_unit\":\"pointsUnit\",\"_value\":100},\"textOverrideFeatureName\":808465458,\"typeStyleOperationType\":3}},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"fontPostScriptName\":\"BrushScriptMT\",\"fontName\":\"Brush Script MT\",\"fontStyleName\":\"Regular\"}},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"color\":{\"_obj\":\"RGBColor\",\"red\":255,\"green\":207,\"blue\":104}}}]",
          "contentType": "application/json"
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
}'
```
