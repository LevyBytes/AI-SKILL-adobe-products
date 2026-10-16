# Multiple XMP masks and constraints

**Multiple Masks Example:**

```json
{
  "edits": {
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "masks": [
        {
          "source": {
            "url": "<MASK_FILE_1_URL>"
          },
          "digest": "37B3568A954F0C80CA946DA0187FB9E2"
        },
        {
          "source": {
            "url": "<MASK_FILE_2_URL>"
          },
          "digest": "D15158972C7044869B171697AEBAFB0F"
        }
      ]
    }
  }
}
```

**Important Notes:**

- Masks are **optional** and are needed only for advanced Camera Raw editing that uses localized adjustments
- Each mask needs both `source` (file reference) and `digest` (fingerprint/identifier)
- Mask files are usually binary `.bin` files created by Adobe Camera Raw
- The `digest` links mask data to XMP adjustments
- Complex workflows can provide multiple masks

**Note on `/lrService/mask` endpoint:** The V1 `/lrService/mask` endpoint is separate from this flow; it covers AI-based mask generation such as selectSubject and selectSky, and follows a different deprecation path. The masks described here are localized Camera Raw adjustment masks passed through `/lrService/xmp`.

Related: [Localized XMP adjustment migration](xmp-with-masks-migration-localized-adjustments.md).
