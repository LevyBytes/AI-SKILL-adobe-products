# Metadata extraction

Pull metadata from XMP:

```json
{
  "image": {
    "source": {
      "url": "<PSD_URL>"
    }
  },
  "includeLayerThumbnails": false,
  "includeXmp": true,
  "outputs": [
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json"
    }
  ]
}
```
