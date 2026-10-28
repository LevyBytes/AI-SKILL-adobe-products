# XMP with orientation override

V2 can override embedded image orientation metadata by setting an `orientation` value inside the `xmp` object. Use this when Camera Raw processing needs to include a rotation or flip transformation.

**V2 Structure:**

```json
{
  "edits": {
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "orientation": "right_top"
    }
  }
}
```

**Orientation Values (EXIF/TIFF Specification):**

| Value | Description | EXIF Code | Common Use |
| --- | --- | --- | --- |
| `"top_left"` | Column 0 = left, Row 0 = top | 1 | Normal orientation |
| `"top_right"` | Column 0 = right, Row 0 = top | 2 | Horizontal flip |
| `"bottom_right"` | Column 0 = right, Row 0 = bottom | 3 | 180° rotation |
| `"bottom_left"` | Column 0 = left, Row 0 = bottom | 4 | Vertical flip |
| `"left_top"` | Column 0 = top, Row 0 = left | 5 | 90° CCW + H-flip |
| `"right_top"` | Column 0 = top, Row 0 = right | 6 | 90° CW rotation |
| `"right_bottom"` | Column 0 = bottom, Row 0 = right | 7 | 90° CCW rotation |
| `"left_bottom"` | Column 0 = bottom, Row 0 = left | 8 | 90° CW + H-flip |

**Combined with Masks Example:**

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

**Key Points:**

- `orientation` is **optional**; it overrides embedded orientation only when present
- Without `orientation`, V2 uses the embedded EXIF orientation metadata from the image
- V2 uses descriptive string values such as `"right_top"` instead of numeric EXIF codes
- Width and height swaps for 90°/270° rotations (codes 5-8) are handled automatically
- Masks and other XMP adjustments can be combined with orientation
- V1 had no orientation override; this is new in V2
