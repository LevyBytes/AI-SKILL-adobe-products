# Chained workflow - pixel replace + convert + transform in one API call migration

**Chained workflow - pixel replace + convert + transform in one API call:**

Use multiple objects in the `layers` array; they run sequentially:

```json
{
  "layers": [
    {
      "type": "background_layer",
      "name": "Background",
      "operation": {
        "type": "edit"
      },
      "image": {
        "source": {
          "url": "<NEW_BACKGROUND_IMAGE>"
        }
      }
    },
    {
      "type": "background_layer",
      "name": "Background",
      "operation": {
        "type": "edit"
      },
      "convertToLayer": true,
      "convertedLayerName": "Converted Background"
    },
    {
      "type": "layer",
      "name": "Converted Background",
      "operation": {
        "type": "edit"
      },
      "transformMode": "custom",
      "transform": {
        "angle": 15.0,
        "skew": {
          "horizontal": 0.0,
          "vertical": 0.0
        }
      }
    }
  ]
}
```

Item 1 swaps the background pixels.
Item 2 promotes that background into a named regular layer.
Item 3 transforms the converted layer, targeting the `name: "Converted Background"` assigned by item 2.

> **V1 to V2 background layer migration checklist:**
>
> - Change `type: "backgroundLayer"` to `type: "background_layer"`
> - Change `id: -1` to the manifest `id`, or use `name: "Background"`
> - Change `visible` to `isVisible`
> - Remove `locked` / `protection` from background_layer entries, then add protection after conversion
> - Replace `add: {}` with `operation: { "type": "add" }` and do not include `placement`
> - Replace `edit: {}` with `operation: { "type": "edit" }`
> - Replace `input.href` with `image.source.url`
> - To use `transform`, `protection`, or `blendOptions`, first add `convertToLayer: true` with `convertedLayerName`, then address the converted layer by name in a later entry
