# Output storage options

**External Storage:**

```json
{
  "destination": {
    "url": "<PRESIGNED_URL>"
  },
  "mediaType": "image/jpeg"
}
```

**Hosted Storage:**

```json
{
  "destination": {
    "validityPeriod": 3600
  },
  "mediaType": "image/jpeg"
}
```

`validityPeriod` controls the lifetime of the hosted URL:

- **Minimum:** 60 seconds (1 minute)
- **Maximum:** 86400 seconds (1 day / 24 hours)
- **Unit:** Seconds
- **Required:** Yes, for hosted storage

**Embedded Storage:**

```json
{
  "destination": {
    "embedded": "base64"
  },
  "mediaType": "image/jpeg"
}
```

Supported embedded formats:

- `"base64"` - image data encoded as Base64
- `"string"` - value represented as a string
- `"json"` - JSON-formatted data

**Creative Cloud destination:**

```json
{
  "destination": {
    "creativeCloudPath": "/path/to/output.psd"
  },
  "mediaType": "image/vnd.adobe.photoshop"
}
```

Optional Creative Cloud project ID:

```json
{
  "destination": {
    "creativeCloudPath": "/path/to/output.psd",
    "creativeCloudProjectId": "urn:aaid:sc:US:..."
  },
  "mediaType": "image/vnd.adobe.photoshop"
}
```

**Azure Blob Storage:**

```json
{
  "destination": {
    "url": "<AZURE_PRESIGNED_URL>",
    "storageType": "azure"
  },
  "mediaType": "image/jpeg"
}
```

**Dropbox Storage:**

```json
{
  "destination": {
    "url": "<DROPBOX_URL>",
    "storageType": "dropbox"
  },
  "mediaType": "image/jpeg"
}
```

Only Azure Blob Storage and Dropbox need the `storageType` field. AWS S3 presigned URLs omit it.
