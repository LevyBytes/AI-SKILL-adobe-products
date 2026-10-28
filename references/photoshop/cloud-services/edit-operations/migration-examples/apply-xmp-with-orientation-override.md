# Apply XMP with orientation override

Set `orientation` inside the `xmp` object when you need to replace the image's embedded orientation metadata. That lets Camera Raw workflows include rotation or flip behavior with the edit request.

**Key Points:**

- `orientation` is **optional**; it changes the embedded image orientation only when the request includes it
- Without this value, processing falls back to the embedded EXIF orientation metadata
- Orientation values use descriptive string names such as `"right_top"` instead of numeric codes
- When a transform rotates by 90° or 270°, processing updates width and height automatically

**V2 Approach with Orientation:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "orientation": "right_top"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

**Orientation Values:**

For `orientation`, use the string values defined by the EXIF/TIFF orientation model:

| Value | Description |
| --- | --- |
| `"top_left"` | Column 0 = left, Row 0 = top (normal orientation) |
| `"top_right"` | Column 0 = right, Row 0 = top (horizontal flip) |
| `"bottom_right"` | Column 0 = right, Row 0 = bottom (180° rotation) |
| `"bottom_left"` | Column 0 = left, Row 0 = bottom (vertical flip) |
| `"left_top"` | Column 0 = top, Row 0 = left (90° CCW rotation + horizontal flip) |
| `"right_top"` | Column 0 = top, Row 0 = right (90° CW rotation) |
| `"right_bottom"` | Column 0 = bottom, Row 0 = right (90° CCW rotation) |
| `"left_bottom"` | Column 0 = bottom, Row 0 = left (90° CW rotation + horizontal flip) |

**Combined with Masks:**

Masks and `orientation` can be used together when the Camera Raw edit needs both targeting data and orientation control:

```json
{
  "edits": {
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "orientation": "right_top",
      "masks": [
        {
          "source": {
            "url": "<MASK_FILE_URL>"
          },
          "digest": "37B3568A954F0C80CA946DA0187FB9E2"
        }
      ]
    }
  }
}
```
