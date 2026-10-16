# All jobs use same endpoint — V2 status response output patterns

### Overview

V2 status payloads differ substantially from V1, especially in the representation of outputs. Migration code needs to account for the destination chosen in the original request because that choice controls the shape of `result.outputs[]`.

## All jobs use same endpoint — V2 status response output patterns

**Request:**

```json
{
  "outputs": [
    {
      "destination": { "url": "https://s3.../output.jpg?..." },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2400
    },
    {
      "destination": { "embedded": "json" },
      "mediaType": "application/json"
    },
    {
      "destination": { "creativeCloudPath": "folder/output.png" },
      "mediaType": "image/png",
      "compression": "high"
    },
    {
      "destination": { "validityPeriod": 7200 },
      "mediaType": "image/tiff"
    }
  ]
}
```

**Status Response:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": { "url": "https://s3.../output.jpg?..." },
        "mediaType": "image/jpeg",
        "quality": "maximum",
        "width": 2400
      },
      {
        "destination": {
          "embedded": "json",
          "content": { "document": { "width": 1920, "height": 1080 } }
        },
        "mediaType": "application/json"
      },
      {
        "destination": { "creativeCloudPath": "folder/output.png" },
        "mediaType": "image/png",
        "compression": "high"
      },
      {
        "destination": { "url": "https://adobe-hosted.../output.tiff?expires=..." },
        "mediaType": "image/tiff"
      }
    ]
  }
}
```

**Pattern:** Each output keeps its destination type and parameter set, and the `outputs` array remains in the same order.
