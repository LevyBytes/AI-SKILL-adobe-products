# Full migration sample

**V1 (Multiple Calls):**

```shell

## Call 1: Auto tone

curl -X POST https://image.adobe.io/lrService/autoTone \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -d '{"inputs": {"href": "<URL>"}, "outputs": [...]}'

## Call 2: Status check

curl -X GET https://image.adobe.io/lrService/status/{jobId1} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"

## Call 3: Apply edits

curl -X POST https://image.adobe.io/lrService/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -d '{"inputs": {"href": "<URL>"}, "options": {...}, "outputs": [...]}'

## Call 4: Status check

curl -X GET https://image.adobe.io/lrService/status/{jobId2} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

**V2 (Single Call):**

```shell

## Single combined request

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
      "mediaType": "image/jpeg",
      "quality": "high"
    }
  ]
}'

## Single status check

curl -X GET https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```
