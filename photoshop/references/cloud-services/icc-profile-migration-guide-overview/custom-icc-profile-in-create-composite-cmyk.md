# Custom ICC profile in create-composite (CMYK)

```json
{
  "image": {
    "source": { "url": "https://example.com/input.psd" }
  },
  "outputs": [
    {
      "destination": { "url": "https://example.com/output.tiff" },
      "mediaType": "image/tiff",
      "iccProfile": {
        "type": "custom",
        "name": "U.S. Web Coated (SWOP) v2",
        "imageMode": "cmyk",
        "source": { "url": "https://example.com/profiles/custom.icc" }
      }
    }
  ]
}
```
