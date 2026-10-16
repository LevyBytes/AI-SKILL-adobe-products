# Input images

Every image needs a source specification. The API lays out the images horizontally, with spacing configurable between them.

```json
{
  "images": [
    {
      "source": {
        "url": "<IMAGE_URL>"
      }
    }
  ]
}
```

**Source options:**

Several storage types can be used to specify the source:

**External URL:**

```json
{
  "source": {
    "url": "<PRESIGNED_URL>"
  }
}
```

**Creative Cloud Path:**

```json
{
  "source": {
    "creativeCloudPath": "/path/to/image.jpg"
  }
}
```

**Creative Cloud File ID:**

```json
{
  "source": {
    "creativeCloudFileId": "urn:aaid:..."
  }
}
```

**Lightroom Path:**

```json
{
  "source": {
    "lightroomPath": "/path/to/image.jpg"
  }
}
```
