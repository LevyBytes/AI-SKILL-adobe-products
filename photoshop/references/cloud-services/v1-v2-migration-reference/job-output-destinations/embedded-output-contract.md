# Embedded output contract and migration

**Pattern:** The `destination` object carries a `content` field with the returned inline data.

**Embedded Types:**

- `"string"`: returns plain text such as XMP, XML, or text-file content as a string
- `"json"`: returns manifest or other structured JSON data as a parsed JSON object
- `"base64"`: returns small binary files or images as base64 text

**V1 vs V2:**

**V1: Limited embedded support, varied formats**

```json
{
  "outputs": [
    {
      "_links": {
        "self": {
          "href": "data:..."
        }
      },
      "status": "succeeded"
    }
  ]
}
```

**V2: Standardized embedded format with content field**

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "string",
          "content": "<?xml version=..."
        },
        "mediaType": "application/rdf+xml"
      }
    ]
  }
}
```

**Important Restrictions:**

- Use embedded only for text, metadata, and small file outputs
- For large images, use URL or Hosted instead
- XMP extraction and JSON manifests are the recommended embedded cases

Related: [Embedded string outputs](embedded-destination-inline-content.md).
