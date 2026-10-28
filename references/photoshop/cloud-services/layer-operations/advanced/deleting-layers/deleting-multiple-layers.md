# Deleting multiple layers

One request can remove several layers in either V1 or V2:

**V2 Example:**

```json
{
  "edits": {
    "layers": [
      {
        "name": "Unwanted Layer 1",
        "operation": {
          "type": "delete"
        }
      },
      {
        "name": "Unwanted Layer 2",
        "operation": {
          "type": "delete"
        }
      }
    ]
  }
}
```
