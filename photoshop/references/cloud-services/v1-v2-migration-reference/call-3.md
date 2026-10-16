# Call 3

curl -X POST https://image.adobe.io/lrService/edit \
 -d '{
"inputs": {...},
"options": {
"Exposure": 1.2,
"Contrast": 10,
"Saturation": 15
},
"outputs": [...]
}'

**V2 Code (single call):**
```shell
curl -X POST https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<`INPUT_URL`>"
    }
  },
  "edits": {
    "autoTone": true,
    "autoStraighten": {
      "enabled": true,
      "constrainCrop": true
    },
    "light": {
      "exposure": 1.2,
      "contrast": 10
    },
    "color": {
      "saturation": 15
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<`OUTPUT_URL`>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

**Key Transformations:**

1. Three calls → One call
2. Operations combined in `edits` object
3. PascalCase params → camelCase within categories
4. `Exposure` → `light.exposure`
5. `Saturation` → `color.saturation`
