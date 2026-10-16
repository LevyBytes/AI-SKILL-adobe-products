# V2 conversion request

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
        "convertToLayer": true,
        "convertedLayerName": "Layer_From_Background"
      }
    ]
  }
}
```

Set the optional `convertedLayerName` property when the converted layer needs an immediate name; later entries in the same `layers` array can target that name. Once the conversion completes, the item stops being the background layer and supports regular-layer actions such as moving, deleting, and additional edits.

The following full request converts the background layer first and then edits the resulting regular layer:

```json
{
  "edits": {
    "layers": [
      {
        "type": "background_layer",
        "name": "Background",
        "operation": {
          "type": "edit"
        },
        "convertToLayer": true,
        "convertedLayerName": "Layer_From_Background"
      },
      {
        "type": "layer",
        "name": "Layer_From_Background",
        "operation": {
          "type": "edit"
        },
        "transformMode": "custom",
        "transform": {
          "offset": {
            "horizontal": 100,
            "vertical": 100
          }
        }
      }
    ]
  }
}
```
