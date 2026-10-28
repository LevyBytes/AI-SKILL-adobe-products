# Output parameters

Additional parameters control how the output is rendered:

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 1920,
      "height": 1080,
      "maxWidth": 2400
    }
  ]
}
```

**Available parameters:**

- `width`: sets the output width in pixels (>= 0)
- `height`: sets the output height in pixels (>= 0)
- `maxWidth`: caps width in pixels (>= 0)
- `quality`: selects JPEG quality (`very_poor`, `poor`, `low`, `medium`, `high`, `maximum`, `photoshop_max`)
- `compression`: selects PNG compression (`none`, `very_low`, `low`, `medium_low`, `medium`, `medium_high`, `default`, `high`, `very_high`, `maximum`)
- `shouldOverwrite`: controls whether existing files are replaced (boolean)
- `iccProfile`: supplies the ICC color profile for color management (standard or custom)
- `layers`: chooses particular layers for the output (array of layer references)
- `cropMode`: chooses the layer-export crop behavior (`trim_to_transparency`, `document_bounds`, `layer_bounds`)
