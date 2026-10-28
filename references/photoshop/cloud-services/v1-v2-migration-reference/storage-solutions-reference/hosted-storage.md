# 4. Hosted storage

**Adobe-managed temporary storage:**

```json
{
  "outputs": [
    {
      "destination": {
        "validityPeriod": 3600
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

Seconds: 60-86400 (max 1 day)

**Use cases:**

- Temporary processing workflows
- No long-term storage requirement; files expire within 24 hours
- Short-lived prototypes

**Response:**

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://adobe-hosted-storage.../file.jpg?expires=..."
        },
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

**IMPORTANT:** Download the file before the URL expires; the maximum lifetime is 24 hours from job completion.
