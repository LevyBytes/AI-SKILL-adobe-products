# V2 replacement form

For V2 replacement, include `operation: { "type": "edit" }`, then address the layer with either `id` or `name`. Supply the new image in that request through `image.source.url`:

```json
{
  "edits": {
    "layers": [
      {
        "type": "layer",
        "id": 751,
        "name": "Existing Layer",
        "operation": {
          "type": "edit"
        },
        "image": {
          "source": {
            "url": "<NEW_IMAGE_URL>"
          }
        }
      }
    ]
  }
}
```

**Required target type.** The `id` or `name` used for the edit must resolve to an image/pixel layer in the document.
