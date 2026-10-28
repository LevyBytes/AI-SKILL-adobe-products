# On the `image` block (document creation color management)

For a new document created with `/v2/create-composite` and no `image.source`, put `iccProfile` inside the `image` block to choose the embedded document color profile during creation. The block accepts either standard or custom profiles:

```json
{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": { "unit": "density_unit", "value": 72 },
    "mode": "rgb",
    "depth": 8,
    "iccProfile": {
      "type": "custom",
      "name": "DCI P3 D65",
      "source": { "url": "https://example.com/profiles/DCI-P3-D65.icc" },
      "imageMode": "rgb"
    }
  },
  "outputs": [
    {
      "destination": { "url": "https://example.com/output.psd" },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

On the `image` block, `iccProfile` defines the embedded profile for the document. On an `output`, `iccProfile` changes the exported file's color space. You can use either location by itself, or use both in the same request.
