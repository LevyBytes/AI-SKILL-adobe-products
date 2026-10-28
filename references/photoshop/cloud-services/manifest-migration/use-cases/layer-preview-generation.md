# Layer preview generation

Create thumbnails for every layer:

```json
{
  "image": {
    "source": {
      "url": "<PSD_URL>"
    }
  },
  "includeLayerThumbnails": true,
  "maximumThumbnailDepth": 0,
  "trimToTransparency": true,
  "exportOptions": {
    "mediaType": "image/png",
    "compression": "medium"
  },
  "outputs": [
    {
      "destination": {
        "url": "<MANIFEST_URL>"
      },
      "mediaType": "application/json"
    }
  ]
}
```
