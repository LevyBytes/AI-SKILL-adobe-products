# New format — distinct `artboard` type with rich metadata

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "type": "artboard",
  "id": 1,
  "name": "iPhone 16 Pro – 1",
  "typeAttributes": {
    "artboard": {
      "type": "artboard",
      "artboardBackgroundType": 1,
      "artboardPresetName": "iPhone 16 Pro",
      "artboardRect": {
        "type": "classFloatRect",
        "left": 0,
        "top": 0,
        "right": 393,
        "bottom": 852
      },
      "color": {
        "type": "RGBColor",
        "red": 255,
        "grain": 255,
        "blue": 255
      },
      "guideIDs": []
    },
    "layerSection": "layerSectionStart",
    "type": "layerSection"
  },
  "layers": [ /* additional content omitted */ ]
}
```
