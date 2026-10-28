# V2 approach

```json
{
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Existing Smart Object",
        "operation": {
          "type": "edit"
        },
        "isVisible": false
      }
    ]
  }
}
```

For changes to an existing layer, V2 needs `operation.type: "edit"` stated directly, even when the edit has no additional fields.
