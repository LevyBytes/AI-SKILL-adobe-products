# Banner document

Create a wide banner canvas:

```json
{
  "image": {
    "width": 3000,
    "height": 600,
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
