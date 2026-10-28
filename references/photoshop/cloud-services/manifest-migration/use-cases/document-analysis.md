# Document analysis

Use this shape when the goal is document-structure analysis:

```json
{
  "image": {
    "source": {
      "url": "<PSD_URL>"
    }
  },
  "includeLayerThumbnails": false,
  "includeXmp": false,
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
