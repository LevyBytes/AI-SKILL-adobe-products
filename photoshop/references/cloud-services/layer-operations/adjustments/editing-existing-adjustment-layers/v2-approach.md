# V2 approach

```json
{
  "edits": {
    "layers": [
      {
        "name": "Existing Adjustment",
        "adjustments": {
          "type": "brightness_contrast",
          "brightnessContrast": {
            "brightness": 50
          }
        },
        "operation": {
          "type": "edit"
        }
      }
    ]
  }
}
```

V2 edits to existing layers need an explicit operation type. Include `operation: { "type": "edit" }`, identify the target layer by name or ID, and provide the new adjustment values. If the `operation` field is missing, the server rejects the request.
