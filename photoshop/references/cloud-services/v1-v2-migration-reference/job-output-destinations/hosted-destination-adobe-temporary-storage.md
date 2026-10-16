# 3. Hosted destination (Adobe temporary storage)

**Use Case:** V2 can provide temporary storage so the caller does not have to create presigned URLs.

**Request:**

```json
{
  "outputs": [
    {
      "destination": {
        "validityPeriod": 3600
      },
      "mediaType": "image/jpeg",
      "quality": "high"
    }
  ]
}
```

seconds: 60-86400 (1 min - 24 hours)

**Status Response:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://adobe-hosted-storage.example.com/path/to/output.jpg?expires=1699700000&signature=abc123..."
        },
        "mediaType": "image/jpeg",
        "quality": "high"
      }
    ]
  }
}
```

**Pattern:** Adobe returns a temporary presigned URL in `destination.url`; it remains valid only for the requested period, up to 24 hours.

**Key Characteristics:**

- Adobe holds the output in temporary storage
- The URL carries both an expiration timestamp and a signature
- Files are removed automatically once the expiration time passes
- Upper validity limit: 86400 seconds (24 hours)
- Lower validity limit: 60 seconds (1 minute)

**CRITICAL:** Fetch the file while the URL is still valid; after expiration, it cannot be recovered.

**V1 Equivalent:** V1 has no matching hosted-storage behavior; this capability is introduced in V2.

**Use Cases:**

- Short-lived processing flows
- Fast prototypes
- Jobs that do not need durable storage
- Workflows that should avoid generating presigned URLs
