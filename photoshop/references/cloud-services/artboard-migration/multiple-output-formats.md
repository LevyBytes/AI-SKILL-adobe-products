# Multiple output formats

A single request can ask for more than one returned format:

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<PSD_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2000
    },
    {
      "destination": {
        "url": "<PNG_URL>"
      },
      "mediaType": "image/png",
      "compression": "medium"
    }
  ]
}
```
