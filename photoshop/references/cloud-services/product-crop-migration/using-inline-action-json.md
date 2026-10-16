# Using inline ActionJSON

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
          "content": "[{\"_obj\":\"autoCutout\",\"sampleAllLayers\":false},{\"_obj\":\"make\",\"at\":{\"_enum\":\"channel\",\"_ref\":\"channel\",\"_value\":\"mask\"},\"new\":{\"_class\":\"channel\"},\"using\":{\"_enum\":\"userMaskEnabled\",\"_value\":\"revealSelection\"}},{\"_obj\":\"newPlacedLayer\"},{\"_obj\":\"trim\",\"bottom\":true,\"left\":true,\"right\":true,\"top\":true,\"trimBasedOn\":{\"_enum\":\"trimBasedOn\",\"_value\":\"transparency\"}},{\"_obj\":\"canvasSize\",\"height\":{\"_unit\":\"pixelsUnit\",\"_value\":10},\"horizontal\":{\"_enum\":\"horizontalLocation\",\"_value\":\"center\"},\"relative\":true,\"vertical\":{\"_enum\":\"verticalLocation\",\"_value\":\"center\"},\"width\":{\"_unit\":\"pixelsUnit\",\"_value\":10}},{\"_obj\":\"placedLayerConvertToLayers\"},{\"_obj\":\"delete\",\"_target\":[{\"_enum\":\"channel\",\"_ref\":\"channel\",\"_value\":\"mask\"}]},{\"_obj\":\"trim\",\"bottom\":true,\"left\":true,\"right\":true,\"top\":true,\"trimBasedOn\":{\"_enum\":\"trimBasedOn\",\"_value\":\"transparency\"}}]",
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
      "mediaType": "image/jpeg"
    }
  ]
}'
```
