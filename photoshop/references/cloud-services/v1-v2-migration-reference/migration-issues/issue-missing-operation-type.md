# Issue: Missing operation type

**Problem:** Adding a layer without an operation type.

```json
{
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "New Layer",
        "image": {
          "source": {
            "url": "<URL>"
          }
        }
      }
    ]
  }
}
```

Missing operation!

**Solution:** Include the operation type explicitly.

```json
{
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "New Layer",
        "image": {
          "source": { "url": "<URL>" }
        },
        "operation": {
          "type": "add",
          "placement": { "type": "top" }
        }
      }
    ]
  }
}
```
