# ActionJSON definition

The example action contains four operations:

1. **Select** the target text layer and turn visibility on
2. **Set** type size to 100pt
3. **Set** Brush Script MT Regular as the font
4. **Set** the text color to the peach/gold RGB triplet (255, 207, 104)

```json
[
  {
    "_obj": "select",
    "_target": [
      {
        "_name": "your-text-layer-name",
        "_ref": "layer"
      }
    ],
    "makeVisible": true
  },
  {
    "_obj": "set",
    "_target": [
      {
        "_property": "textStyle",
        "_ref": "property"
      },
      {
        "_enum": "ordinal",
        "_ref": "textLayer",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "textStyle",
      "size": {
        "_unit": "pointsUnit",
        "_value": 100
      },
      "textOverrideFeatureName": 808465458,
      "typeStyleOperationType": 3
    }
  },
  {
    "_obj": "set",
    "_target": [
      {
        "_property": "textStyle",
        "_ref": "property"
      },
      {
        "_enum": "ordinal",
        "_ref": "textLayer",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "textStyle",
      "fontPostScriptName": "BrushScriptMT",
      "fontName": "Brush Script MT",
      "fontStyleName": "Regular"
    }
  },
  {
    "_obj": "set",
    "_target": [
      {
        "_property": "textStyle",
        "_ref": "property"
      },
      {
        "_enum": "ordinal",
        "_ref": "textLayer",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "textStyle",
      "color": {
        "_obj": "RGBColor",
        "red": 255,
        "green": 207,
        "blue": 104
      }
    }
  }
]
```
