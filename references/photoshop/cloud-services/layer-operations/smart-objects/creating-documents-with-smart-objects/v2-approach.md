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
        "type": "smart_object_layer",
        "name": "Logo",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "smartObject": {
          "smartObjectFile": {
            "source": {
              "url": "<LOGO_URL>"
            }
          }
        }
      }
    ]
  }
}
```
