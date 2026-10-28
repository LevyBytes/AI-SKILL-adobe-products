# `thumbnail` - CHANGED object shape

The response no longer treats `thumbnail` as a URL-valued string. Update any client path that reads it that way.

Previous representation: bare string value for a pre-signed S3 URL:

```json
{
  "thumbnail": "https://s3.amazonaws.com/..."
}
```

V2 representation: object containing media type and a short-URL:

```json
{
  "thumbnail": {
    "mediaType": "image/jpeg",
    "url": "https://photoshop-api.adobe.io/v2/short-url/urn:aaid:ps:..."
  }
}
```

Thumbnail data appears only when the request asks for thumbnails. The `url` now points to a `/v2/short-url/` redirect, not to the S3 link itself.
