# Creating a basic blank document

**Key points:**

- Document dimensions: `width`, `height` in pixels, plus `resolution` as an object with `unit` and `value`
- `fill`: Background type, such as `"transparent"`, `"white"`, or `"background_color"`, or an object for custom RGB
- `mode`: Color mode, such as `"rgb"`, `"cmyk"`, or `"grayscale"`
- `depth`: Integer bit depth, such as `8`, `16`, or `32`

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": {"unit": "density_unit", "value": 72},
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
}'
```
