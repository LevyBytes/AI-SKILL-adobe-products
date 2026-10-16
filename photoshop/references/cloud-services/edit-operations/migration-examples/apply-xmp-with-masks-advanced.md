# Apply XMP with masks (advanced)

Advanced Camera Raw edit flows can send mask data together with the XMP metadata. In Camera Raw, masks are binary assets that mark selection regions for localized adjustments.

**Key Points:**

- Mask files are **optional**; include them only for advanced Camera Raw editing
- Each mask entry includes `source` for the mask-file URL plus `digest` as its identification fingerprint
- `digest` acts as the unique ID that links mask data with the XMP adjustments
- Adobe Camera Raw typically generates mask files as binary `.bin` files
- Workflows with several localized adjustments can pass multiple masks

**V2 Approach with Masks:**

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

**Multiple Masks:**

Complex edit flows can attach more than one mask file:

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
