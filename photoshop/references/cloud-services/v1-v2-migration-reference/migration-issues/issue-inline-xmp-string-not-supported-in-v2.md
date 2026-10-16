# Issue: Inline XMP string not supported in V2

**Problem:** Inline XMP text is being carried over from a V1 request.

```json
{
  "edits": {
    "xmp": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>..."
  }
}
```

**Solution:** In V2, provide XMP through a file reference.

```json
{
  "edits": {
    "xmp": {
      "source": {
        "url": "<XMP_FILE_URL>"
      }
    }
  }
}
```

Creative Cloud storage is also valid:

```json
{
  "edits": {
    "xmp": {
      "source": {
        "creativeCloudPath": "/path/to/metadata.xmp"
      }
    }
  }
}
```
