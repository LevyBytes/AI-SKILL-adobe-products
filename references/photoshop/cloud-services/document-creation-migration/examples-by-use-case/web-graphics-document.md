# Web graphics document

Create a web-optimized graphics document:

```json
{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": "transparent",
    "mode": "rgb",
    "depth": 8
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```
