# Embedded storage outputs

For embedded storage, the returned payload carries the output data directly:

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "base64",
          "content": "iVBORw0KGgoAAAANSUhEUgAA..."
        },
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

For JSON outputs:

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "json",
          "content": {
            "document": {/* additional content omitted */},
            "layers": [/* additional content omitted */]
          }
        },
        "mediaType": "application/json"
      }
    ]
  }
}
```
