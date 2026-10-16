# V2 explicit form

With V2, callers express replacement through `image.source`:

```json
{
  "edits": {
    "layers": [
      {
        "type": "background_layer",
        "id": 1,
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
