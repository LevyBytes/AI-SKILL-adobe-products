# Complete layer with pixel mask example

```json
{
  "id": 5,
  "name": "Layer with Mask",
  "type": "layer",
  "visible": true,
  "protection": ["none"],
  "bounds": {
    "top": 100,
    "left": 100,
    "width": 500,
    "height": 400
  },
  "layerSettings": {
    "clippingMask": true
  },
  "userMask": {
    "density": 100,
    "feather": 0
  },
  "pixelMask": {
    "hasMask": true,
    "extendOpaque": false,
    "bounds": {
      "top": 100,
      "left": 100,
      "width": 500,
      "height": 400
    },
    "enabled": true,
    "linked": true,
    "offset": {
      "horizontal": 0,
      "vertical": 0
    }
  }
}
```
