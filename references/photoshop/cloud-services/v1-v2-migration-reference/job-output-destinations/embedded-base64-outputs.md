# Embedded Base64 outputs

**Request (embedded: "base64"):**

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "base64"
      },
      "mediaType": "image/png"
    }
  ]
}
```

**Status Response:**

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "base64",
          "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        },
        "mediaType": "image/png"
      }
    ]
  }
}
```

Related: [Embedded string outputs](embedded-destination-inline-content.md).
