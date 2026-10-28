# Example: single-layer export with ICC profile

```json
{
  "outputs": [
    {
      "destination": { "url": "https://example.com/out.tif" },
      "mediaType": "image/tiff",
      "layers": [{ "id": 1096 }],
      "iccProfile": {
        "type": "standard",
        "name": "sRGB IEC61966-2.1"
      }
    }
  ]
}
```
