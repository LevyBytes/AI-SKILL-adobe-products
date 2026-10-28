# Combine light and color edits

V1 performs autoTone, autoStraighten and edit as separate operations. This final edit-request excerpt uses ellipses for omitted input and output data.

```shell
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
```

For the V2 request, set `$token` and `$apiKey`, then replace `<INPUT_URL>` and `<OUTPUT_URL>` with the signed asset URLs.

**V2 Code (single call):**
```shell
curl -X POST https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<INPUT_URL>"
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
        "url": "<OUTPUT_URL>"
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

Use the [complete migration examples](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/f87035468ed78c735de8a1d4a0c5525f8aa658c5/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#example-2-complex-edit-multiple-adjustments) for the full V1 sequence.
