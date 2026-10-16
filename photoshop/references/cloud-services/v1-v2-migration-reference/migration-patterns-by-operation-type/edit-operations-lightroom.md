# A. Edit operations (Lightroom)

**V1 endpoints folded together:**

- `/lrService/autoTone`
- `/lrService/autoStraighten`
- `/lrService/presets`
- `/lrService/xmp`
- `/lrService/edit`

**V2 Endpoint:** `/v2/edit`

**Pattern:** Replace multiple sequential V1 calls with one V2 call

**V1 approach (3 separate calls):**

```shell

## Step 1

curl -X POST https://image.adobe.io/lrService/autoTone \
  -d '{"inputs": {"href": "<URL>", "storage": "external"}}'

## Step 2

curl -X POST https://image.adobe.io/lrService/autoStraighten \
  -d '{"inputs": {"href": "<URL>", "storage": "external"}}'

## Step 3

curl -X POST https://image.adobe.io/lrService/edit \
  -d '{"inputs": {"href": "<URL>"}, "options": {"Exposure": 1.2}}'
```

**V2 approach (single call):**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
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
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

**Adjustment Categories:**

- `autoTone` (boolean)
- `autoStraighten` (object with enabled, constrainCrop, uprightMode)
- `light` (exposure, contrast, highlights, shadows, whites, blacks)
- `color` (saturation, vibrance, whiteBalance)
- `effects` (clarity, dehaze, texture, vignette)
- `sharpen` (object with detail, radius, edgeMasking)
  - `detail`: integer 0-100 (controls detail sharpening amount)
  - `radius`: number (sets sharpening effect radius)
  - `edgeMasking`: integer 0-100 (limits sharpening to edges)
- `noiseReduction` (luminance, color)
- `presets` (array of preset sources)
- `xmp` (XMP source object with optional orientation and masks)

**Parameter Name Changes:**

- V1: PascalCase (`Exposure`, `Contrast`, `Sharpness`)
- V2: camelCase (`exposure`, `contrast`) within category objects
- V1 `Sharpness` (integer 0-100) → V2 `sharpen.detail` (integer 0-100)
