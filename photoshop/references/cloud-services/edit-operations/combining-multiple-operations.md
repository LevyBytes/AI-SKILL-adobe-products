# Combining multiple operations

A central v2 benefit is that several operations can travel in one request.

**V1 Approach (Multiple Calls):**

```shell

## Step 1: Auto tone

curl -X POST https://image.adobe.io/lrService/autoTone ...

## Step 2: Auto straighten

curl -X POST https://image.adobe.io/lrService/autoStraighten ...

## Step 3: Apply adjustments

curl -X POST https://image.adobe.io/lrService/applyEdits ...
```

**V2 Approach (Single Call):**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
      "enabled": true
    },
    "light": {
      "exposure": 0.5,
      "contrast": 15
    },
    "color": {
      "saturation": 10
    },
    "sharpen": {
      "detail": 50
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
