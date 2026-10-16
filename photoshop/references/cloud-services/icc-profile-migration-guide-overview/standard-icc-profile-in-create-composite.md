# Standard ICC profile in create-composite

```json
{
  "image": {
    "source": { "url": "https://example.com/input.psd" }
  },
  "outputs": [
    {
      "destination": { "url": "https://example.com/output.psd" },
      "mediaType": "image/vnd.adobe.photoshop",
      "iccProfile": {
        "type": "standard",
        "name": "sRGB IEC61966-2.1",
        "imageMode": "rgb"
      }
    }
  ]
}
```
