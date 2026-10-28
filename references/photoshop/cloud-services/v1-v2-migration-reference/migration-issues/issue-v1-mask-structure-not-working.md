# Issue: V1 mask structure not working

**Problem:** The mask payload still follows the V1 href and storage layout.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" }
    },
    "masks": [
      {
        "href": "<MASK_URL>",
        "storage": "external",
        "digest": "37B3568A954F0C80CA946DA0187FB9E2"
      }
    ]
  }
}
```

**Solution:** Put `masks` under the `xmp` object, and express each mask using the `source` structure.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" },
      "masks": [
        {
          "source": {
            "url": "<MASK_URL>"
          },
          "digest": "37B3568A954F0C80CA946DA0187FB9E2"
        }
      ]
    }
  }
}
```
