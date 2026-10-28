# Issue: Using numeric orientation values

**Problem:** Orientation is represented with numeric EXIF codes.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" },
      "orientation": 6
    }
  }
}
```

**Solution:** Use the enum's descriptive string values.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" },
      "orientation": "right_top"
    }
  }
}
```

Valid orientation values: `"top_left"`, `"top_right"`, `"bottom_right"`, `"bottom_left"`, `"left_top"`, `"right_top"`, `"right_bottom"`, `"left_bottom"`
