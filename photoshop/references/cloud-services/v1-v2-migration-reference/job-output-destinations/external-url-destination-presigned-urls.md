# 1. External URL destination (presigned URLs)

**Typical destinations:** Presigned URLs for Azure Blob, AWS S3, Google Drive, Dropbox, and Frame.io

**Request:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "https://s3.amazonaws.com/bucket/output.jpg?X-Amz-Signature=REDACTED-EXAMPLE"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    }
  ]
}
```

**Status Response (succeeded):**

```json
{
  "jobId": "...",
  "createdTime": "2025-11-11T10:00:00.000Z",
  "modifiedTime": "2025-11-11T10:05:30.000Z",
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://s3.amazonaws.com/bucket/output.jpg?X-Amz-Signature=REDACTED-EXAMPLE"
        },
        "mediaType": "image/jpeg",
        "quality": "maximum"
      }
    ]
  }
}
```

**Pattern:** The destination URL is echoed exactly in the output, and the file has been written to that presigned URL.

**V1 vs V2 Comparison:**

```javascript
// V1 Status Response
{
  outputs: [{
    _links: {
      self: { href: "https://s3.amazonaws.com/bucket/output.jpg?..." }
    },
    input: "https://input-url...",
    status: "succeeded"
  }]
}

// V2 Status Response
{
  result: {
    outputs: [{
      destination: { url: "https://s3.amazonaws.com/bucket/output.jpg?..." },
      mediaType: "image/jpeg",
      quality: "maximum"
    }]
  },
  status: "succeeded"  // Job-level, not per-output
}
```

**Key Migration Points:**

- V1: `outputs[]._links.self.href` → V2: `result.outputs[].destination.url`
- V1: Per-output status → V2: Single job-level status
- V1: Includes `input` field → V2: No input echo
- V2: Preserves all output parameters (quality, width, height, etc.)
