# Calling the Refine Masks API

The Refine Masks API accepts a request body like this:

```json
{
  "image": {
    "source": {
      "url": "<source_image_url>"
    }
  },
  "mask": {
    "source": {
      "url": "<mask_image_url>"
    }
  },
  "colorDecontamination": false
}
```

For image sources, use pre-signed URLs issued by the cloud storage provider.
