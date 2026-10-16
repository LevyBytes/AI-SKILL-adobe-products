# Embedded string outputs

**Use Case:** XMP metadata, JSON manifests, small text outputs returned inline

**Request (embedded: "string"):**

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "string"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}
```

**Status Response:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "string",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\">...</x:xmpmeta>"
        },
        "mediaType": "application/rdf+xml"
      }
    ]
  }
}
```

Related references:

- [Embedded JSON outputs](embedded-json-outputs.md)
- [Embedded Base64 outputs](embedded-base64-outputs.md)
- [Embedded output contract and migration](embedded-output-contract.md)
