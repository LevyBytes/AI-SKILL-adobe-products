# 3. Embedded storage

**For text-based outputs only (XMP, JSON):**

Choose the embedded destination representation appropriate for the output:

| `destination.embedded` | Content |
| --- | --- |
| `string` | XMP XML text; use `mediaType: "application/rdf+xml"`. |
| `json` | JSON manifest; use `mediaType: "application/json"`. |
| `base64` | Small binary output encoded as Base64. |

Place the chosen `destination` and corresponding `mediaType` in an `outputs` array entry. Choose one `embedded` value; repeated JSON keys do not express alternatives.

**Use cases:**

- XMP metadata extraction
- JSON manifest data
- Immediate access requirements
- Cases where no storage setup should be needed

**IMPORTANT:** Do NOT use for images. It applies only to text or metadata outputs.

**Response format:**

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "string",
          "content": "<?xml version=\"1.0\"...>"
        },
        "mediaType": "application/rdf+xml"
      }
    ]
  }
}
```

For string

OR for JSON:

"embedded": "json",

"content": {"document": {...}}
