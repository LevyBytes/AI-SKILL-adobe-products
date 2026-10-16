# Storage to source mapping examples

**External presigned URL (S3, Frame.io, Google Drive):**

V1

```json
{
  "href": "<PRESIGNED_URL>",
  "storage": "external"
}
```

V2

```json
{
  "source": {
    "url": "<PRESIGNED_URL>"
  }
}
```

**Creative Cloud path:**

V1

```json
{
  "href": "/path/to/image.jpg",
  "storage": "adobe"
}
```

V2 -- note: no leading slash in V2

```json
{
  "source": {
    "creativeCloudPath": "path/to/image.jpg"
  }
}
```

**Creative Cloud file ID:**

V1

```json
{
  "href": "urn:aaid:sc:US:...",
  "storage": "adobe"
}
```

V2

```json
{
  "source": {
    "creativeCloudFileId": "urn:aaid:sc:US:..."
  }
}
```
