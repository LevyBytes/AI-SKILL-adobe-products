# Output options

V2 gives `outputs` more configuration flexibility. Supported pattern examples include:

**Multiple Outputs:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg"
    },
    {
      "destination": {
        "url": "<PNG_URL>"
      },
      "mediaType": "image/png"
    },
    {
      "destination": {
        "url": "<DNG_URL>"
      },
      "mediaType": "image/x-adobe-dng"
    },
    {
      "destination": {
        "url": "<XMP_URL>"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}
```

**A request can include a maximum of 25 outputs.**
