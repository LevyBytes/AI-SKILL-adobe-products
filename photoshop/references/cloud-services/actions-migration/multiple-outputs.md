# Multiple outputs

One request may define outputs in several formats. Each request supports no more than 25 outputs.

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    },
    {
      "destination": {
        "url": "<PNG_URL>"
      },
      "mediaType": "image/png",
      "compression": "medium"
    },
    {
      "destination": {
        "url": "<PSD_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json"
    }
  ]
}
```
