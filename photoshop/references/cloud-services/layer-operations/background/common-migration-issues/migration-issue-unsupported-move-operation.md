# Migration issue: unsupported move operation

**Symptom:** The request attempts to reposition the background layer.

**Correction:** Background layers cannot be moved. Convert the background to a regular layer first when repositioning is required:

```json
{
  "type": "background_layer",
  "id": 1,
  "operation": {
    "type": "edit"
  },
  "convertToLayer": true,
  "convertedLayerName": "Layer_From_Background"
}
```
