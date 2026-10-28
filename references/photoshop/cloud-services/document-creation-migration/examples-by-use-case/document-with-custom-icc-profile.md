# Document with custom ICC profile

Color-managed custom-profile document:

Use this payload shape:

```json
{
  "image": {
    "width": 2550,
    "height": 3300,
    "resolution": { "unit": "density_unit", "value": 300 },
    "fill": "white",
    "mode": "rgb",
    "depth": 8,
    "iccProfile": {
      "type": "custom",
      "name": "DCI P3 D65",
      "source": {
        "url": "<PRESIGNED_URL_TO_ICC_FILE>"
      },
      "imageMode": "rgb"
    }
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
