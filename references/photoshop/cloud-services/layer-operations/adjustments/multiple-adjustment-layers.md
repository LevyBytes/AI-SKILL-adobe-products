# Multiple Adjustment Layers

A single request can include multiple adjustment layers in both V1 and V2:

**V2 Example:**

```json
{
  "edits": {
    "layers": [
      {
        "type": "adjustment_layer",
        "name": "Brightness/Contrast",
        "adjustments": {
          "type": "brightness_contrast",
          "brightnessContrast": {
            "brightness": 20,
            "contrast": 15
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      },
      {
        "type": "adjustment_layer",
        "name": "Hue/Saturation",
        "adjustments": {
          "type": "hue_saturation",
          "hueSaturation": {
            "colorize": false,
            "channels": [
              {
                "channel": "master",
                "saturation": 25
              }
            ]
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      }
    ]
  }
}
```
