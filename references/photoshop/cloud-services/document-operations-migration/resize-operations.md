# Resize operations

Resize updates the full document size and applies that change across every layer.

**Key Points:**

- `width` and `height` now use Objects containing `unit` (e.g. `pixels_unit`, `percent_unit`) and `value`.
- `constrainProportions` keeps the aspect ratio intact (default `true`).
- `resample` selects the algorithm: `bicubic`, `bicubic_smoother`, `bicubic_sharper`, `bilinear`, `nearest_neighbor`.
- `scaleStyles` changes layer effects in proportion to the resize (default `true`).
- `rasterize` converts layers to raster form during the resize (default `false`).

**V2 Example:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 1920
        },
        "height": {
          "unit": "pixels_unit",
          "value": 1080
        },
        "constrainProportions": true,
        "resample": "bicubic",
        "scaleStyles": true
      }
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
}'
```
