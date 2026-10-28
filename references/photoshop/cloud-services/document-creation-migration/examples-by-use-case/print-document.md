# Print document

Set up a high-resolution print document:

```json
{
  "image": {
    "width": 2550,
    "height": 3300,
    "resolution": { "unit": "density_unit", "value": 300 },
    "fill": "white",
    "mode": "cmyk",
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
