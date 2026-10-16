# Adjustment layer migration: V1 payload

**V1 documentOperations:**

```json
{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "type": "adjustmentLayer",
        "name": "Brightness/Contrast",
        "add": {
          "insertTop": true
        },
        "adjustments": {
          "brightnessContrast": {
            "brightness": 25,
            "contrast": 10
          }
        }
      },
      {
        "type": "adjustmentLayer",
        "name": "Color Balance",
        "add": {
          "insertTop": true
        },
        "adjustments": {
          "colorBalance": {
            "preserveLuminosity": true,
            "shadowLevels": [10, 0, -10],
            "midtoneLevels": [0, 5, 0],
            "hightoneLevels": [-5, 0, 5]
          }
        },
        "blendOptions": {
          "opacity": 80
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}
```

Related references:

- [Adjustment layer migration: V2 payload](v2-adjustment-layer-request.md)
