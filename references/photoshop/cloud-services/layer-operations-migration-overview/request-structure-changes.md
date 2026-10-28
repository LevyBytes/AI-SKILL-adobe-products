# Request structure changes

Under v1, every operation used an endpoint-specific request layout.

Under v2, layer edits are collected into one `edits.layers` array.

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "image": {"source": {"url": "<DOCUMENT_URL>"}},
  "edits": {
    "layers": [
      // All layer operations here
    ]
  },
  "outputs": [/* additional content omitted */]
}
```
