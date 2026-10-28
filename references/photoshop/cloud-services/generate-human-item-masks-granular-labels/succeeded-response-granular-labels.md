# Succeeded Response (Granular Labels)

```json
{
  "jobId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "status": "succeeded",
  "masks": [
    {
      "label": "Left Shoe",
      "score": 0.97,
      "boundingBox": { "left": 142, "top": 810, "width": 190, "height": 110 },
      "destination": { "url": "https://storage.adobe.io/..." },
      "mediaType": "image/png"
    },
    {
      "label": "Right Shoe",
      "score": 0.96,
      "boundingBox": { "left": 352, "top": 812, "width": 188, "height": 108 },
      "destination": { "url": "https://storage.adobe.io/..." },
      "mediaType": "image/png"
    },
    {
      "label": "Left Leg",
      "score": 0.98,
      "boundingBox": { "...": "..." },
      "destination": { "url": "https://storage.adobe.io/..." },
      "mediaType": "image/png"
    },
    { "label": "Right Leg", "...": "..." },
    { "label": "Upper Clothes", "...": "..." }
  ]
}
```
