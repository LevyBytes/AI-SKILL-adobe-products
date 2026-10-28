# ActionJSON Definition

Product Crop runs the action as 8 separate operations:

```json
[
  {
    "_obj": "autoCutout",
    "sampleAllLayers": false
  },
  {
    "_obj": "make",
    "at": {
      "_enum": "channel",
      "_ref": "channel",
      "_value": "mask"
    },
    "new": {
      "_class": "channel"
    },
    "using": {
      "_enum": "userMaskEnabled",
      "_value": "revealSelection"
    }
  },
  {
    "_obj": "newPlacedLayer"
  },
  {
    "_obj": "trim",
    "bottom": true,
    "left": true,
    "right": true,
    "top": true,
    "trimBasedOn": {
      "_enum": "trimBasedOn",
      "_value": "transparency"
    }
  },
  {
    "_obj": "canvasSize",
    "height": {
      "_unit": "pixelsUnit",
      "_value": 10
    },
    "horizontal": {
      "_enum": "horizontalLocation",
      "_value": "center"
    },
    "relative": true,
    "vertical": {
      "_enum": "verticalLocation",
      "_value": "center"
    },
    "width": {
      "_unit": "pixelsUnit",
      "_value": 10
    }
  },
  {
    "_obj": "placedLayerConvertToLayers"
  },
  {
    "_obj": "delete",
    "_target": [
      {
        "_enum": "channel",
        "_ref": "channel",
        "_value": "mask"
      }
    ]
  },
  {
    "_obj": "trim",
    "bottom": true,
    "left": true,
    "right": true,
    "top": true,
    "trimBasedOn": {
      "_enum": "trimBasedOn",
      "_value": "transparency"
    }
  }
]
```
