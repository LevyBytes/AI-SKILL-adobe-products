# Batch operations

With v1, a batch-style workflow meant sending multiple API requests in sequence.

```shell
POST /endpoint1 (add layer)
POST /endpoint2 (modify layer)
POST /endpoint3 (add another layer)
```

With v2, one API request can carry several operations.

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "edits": {
    "layers": [
      {"type": "layer", "operation": {"type": "add"}, /* additional content omitted */},
      {"name": "Existing", "isVisible": false},
      {"type": "text_layer", "operation": {"type": "add"}, /* additional content omitted */}
    ]
  }
}
```
