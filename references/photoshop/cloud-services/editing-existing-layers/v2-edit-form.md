# V2 edit form

```json
{
  "edits": {
    "layers": [
      {
        "name": "Existing Layer",
        "isVisible": false,
        "opacity": 75
      }
    ]
  }
}
```

V2 edit requests for existing layers need the operation type to be stated explicitly. Add `operation: { "type": "edit" }`, identify the layer by name or ID, and include the properties being changed. Requests without the `operation` field are rejected by the Core API Server.
