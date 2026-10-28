# Calling the Fill Masked Areas API

Call the [v1/mask-objects](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/index.md) endpoint first, then use the generated masks in requests sent to this endpoint.

Below is a minimal request-body example for using the API:

```json
{
  "image": {
    "source": {
      "url": "<source_image_url>"
    }
  },
  "masks": [
    {
      "source": {
        "url": "<mask_image_url>"
      }
    }
  ]
}
```

For image sources, use pre-signed URLs from the cloud storage provider.

NOTE

The Photoshop API includes a `mask-objects` endpoint that can create masks for operations such as inpainting.
