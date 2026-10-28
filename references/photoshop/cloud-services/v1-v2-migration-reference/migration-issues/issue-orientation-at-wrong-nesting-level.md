# Issue: Orientation at wrong nesting level

**Problem:** `orientation` is placed at the `edits` level instead of inside `xmp`.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" }
    },
    "orientation": "right_top"
  }
}
```

**Solution:** Store `orientation` as a child of the `xmp` object.

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
