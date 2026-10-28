# Inline XMP (Embedded)

Use embedded output when the job status response should carry the XMP metadata directly rather than pointing to external storage:

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
    "light": {
      "exposure": 0.5,
      "contrast": 10
    },
    "color": {
      "saturation": 15
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_OUTPUT_URL>"
      },
      "mediaType": "image/jpeg"
    },
    {
      "destination": {
        "embedded": "string"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}'
```

**Job Status Response with Embedded XMP:**

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "succeeded",
  "createdTime": "2025-01-15T10:30:00.000Z",
  "modifiedTime": "2025-01-15T10:30:45.000Z",
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://storage.example.com/output.jpg"
        },
        "mediaType": "image/jpeg"
      },
      {
        "destination": {
          "embedded": "string",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000\">\n  <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n    <rdf:Description rdf:about=\"\"\n        xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n      <crs:Exposure2012>+0.50</crs:Exposure2012>\n      <crs:Contrast2012>+10</crs:Contrast2012>\n      <crs:Saturation>+15</crs:Saturation>\n      <crs:AutoTone>True</crs:AutoTone>\n    </rdf:Description>\n  </rdf:RDF>\n</x:xmpmeta>"
        },
        "mediaType": "application/rdf+xml"
      }
    ]
  }
}
```
