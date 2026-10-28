# Adjustment layer migration: V2 payload

**V2 create-composite:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "adjustment_layer",
        "name": "Brightness/Contrast",
        "adjustments": {
          "type": "brightness_contrast",
          "brightnessContrast": {
            "brightness": 25,
            "contrast": 10
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
        "name": "Color Balance",
        "adjustments": {
          "type": "color_balance",
          "colorBalance": {
            "preserveLuminosity": true,
            "shadowLevels": [10, 0, -10],
            "midtoneLevels": [0, 5, 0],
            "hightoneLevels": [-5, 0, 5]
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
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

Related: [Adjustment layer migration: V1 payload](adjustment-layer-migration.md).
