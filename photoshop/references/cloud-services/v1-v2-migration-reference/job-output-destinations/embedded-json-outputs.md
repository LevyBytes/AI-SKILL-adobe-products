# Embedded JSON outputs

**Request (embedded: "json"):**

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json"
    }
  ]
}
```

**Status Response:**

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "result": {
    "outputs": [{
      "destination": {
        "embedded": "json",
        "content": {
          "document": {
            "width": 1920,
            "height": 1080,
            "layers": [/* additional content omitted */]
          }
        }
      },
      "mediaType": "application/json"
    }]
  }
}
```

Related: [Embedded string outputs](embedded-destination-inline-content.md).
