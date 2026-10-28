# Create Mask

Create semantic masks for image foreground objects and background areas.

### Overview

With `"mode": "mask"`, the Remove Background service produces a PNG mask around the subject. Send `POST https://image.adobe.io/v2/remove-background`, then continue polling **`GET https://image.adobe.io/v2/status/{jobId}`** until processing finishes. See [Remove background](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/removeBackground) and [Get Job Status](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/getJobStatus).

The `/v1/mask-objects` endpoint examines an input image and produces two mask groups: `semanticMasks` for foreground objects it detects, and `backgroundMasks` for background areas. Every mask reports a label, confidence score, bounding box, and URL for the mask image.

One presigned URL supplies the input image. Max dimensions: 4000 x 4000 px.

**1. Start the job**

```shell
curl -X POST \
  https://image.adobe.io/v1/mask-objects \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "image": {
      "source": {
        "url": "<SIGNED_GET_URL>"
      }
    }
  }'
```

This starts an asynchronous job and sends back a response with the URL used for job-status polling:

```json
{
  "jobId": "e3a13d81-a462-4b71-9964-28b2ef34aca7",
  "_links": {
    "self": {
      "href": "https://image.adobe.io/v1/status/e3a13d81-a462-4b71-9964-28b2ef34aca7"
    }
  }
}
```

After the previous call returns a job ID, request the `/status` href to retrieve the current job status:

```shell
curl -X GET \
  https://image.adobe.io/v1/status/e3a13d81-a462-4b71-9964-28b2ef34aca7 \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json"
```

When the job has finished, a successful `/status` response has a shape like this. Foreground-object masks appear in `semanticMasks`; background-region masks are listed under `backgroundMasks`:

```json
{
  "jobId": "e3a13d81-a462-4b71-9964-28b2ef34aca7",
  "status": "succeeded",
  "semanticMasks": [
    {
      "label": "Person",
      "score": 0.98,
      "boundingBox": {
        "left": 120,
        "top": 45,
        "width": 320,
        "height": 610
      },
      "destination": {
        "url": "https://storage.adobe.io/..."
      },
      "mediaType": "image/png"
    }
  ],
  "backgroundMasks": [
    {
      "label": "Background",
      "score": 0.95,
      "boundingBox": {
        "left": 0,
        "top": 0,
        "width": 800,
        "height": 600
      },
      "destination": {
        "url": "https://storage.adobe.io/..."
      },
      "mediaType": "image/png"
    }
  ]
}
```
