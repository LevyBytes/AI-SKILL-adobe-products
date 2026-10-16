# Localized XMP adjustment migration

Advanced Camera Raw workflows can pass masks together with XMP metadata for localized adjustments. The masks are binary files that define selected regions for those adjustments; in V1, they were submitted through `/lrService/xmp`.

**V1 Approach (`/lrService/xmp`):**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "inputs": {
    "source": {
      "href": "<IMAGE_URL>",
      "storage": "external"
    }
  },
  "options": {
    "xmp": "<XMP_STRING>",
    "masks": [
      {
        "href": "<MASK_FILE_URL>",
        "storage": "external",
        "digest": "37B3568A954F0C80CA946DA0187FB9E2"
      }
    ]
  },
  "outputs": [/* additional content omitted */]
}
```

Note: V1 placed masks in `options.masks` beside the XMP string on the `/lrService/xmp` request.

**V2 Approach:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "image": {
    "source": {
      "url": "<IMAGE_URL>"
    }
  },
  "edits": {
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "masks": [
        {
          "source": {
            "url": "<MASK_FILE_URL>"
          },
          "digest": "37B3568A954F0C80CA946DA0187FB9E2"
        }
      ]
    }
  },
  "outputs": [/* additional content omitted */]
}
```

**Key Changes:**

1. **Endpoint Change**: `/lrService/xmp` → `/v2/edit`
2. **Structure Change**: `options.masks` (sibling to xmp) → `edits.xmp.masks` (nested inside xmp)
3. **Mask Source**: `href` + `storage` → `source.url`
4. **XMP Format**: V1 allowed inline XMP strings in `options.xmp`; V2 expects a file reference at `edits.xmp.source`
5. **Digest**: Unchanged; it remains the mask identification fingerprint
6. **Storage Parameter**: Standard URLs do not require it anymore; Azure and Dropbox still do

Related references:

- [Multiple XMP masks and constraints](multiple-xmp-masks.md)
