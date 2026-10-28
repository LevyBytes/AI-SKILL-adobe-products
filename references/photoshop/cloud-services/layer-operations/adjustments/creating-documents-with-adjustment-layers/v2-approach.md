# V2 approach

```json
{
  "document": {
    "width": 1000,
    "height": 1000,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": {
      "solidColor": {
        "red": 255,
        "green": 255,
        "blue": 255
      }
    },
    "mode": "rgb"
  },
  "edits": {
    "layers": [
      {
        "type": "adjustment_layer",
        "name": "Exposure",
        "adjustments": {
          "type": "exposure",
          "exposure": {
            "exposureValue": 0.5
          }
        },
        "operation": {
          "type": "add"
        }
      }
    ]
  }
}
```
