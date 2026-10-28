# Layer Properties

Smart object layers can carry the regular layer-level settings:

```json
{
  "type": "smart_object_layer",
  "name": "My Smart Object",
  "isVisible": true,
  "protection": ["none"],
  "blendOptions": {
    "opacity": 90,
    "blendMode": "normal"
  },
  "transformMode": "custom",
  "transform": {
    "offset": {
      "horizontal": 100,
      "vertical": 100
    },
    "dimension": {
      "width": 500,
      "height": 300
    },
    "angle": 0,
    "skew": {
      "horizontal": 0,
      "vertical": 0
    },
    "anchor": {
      "horizontal": 0.5,
      "vertical": 0.5
    }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<SMART_OBJECT_URL>"
      }
    }
  }
}
```

- Place `opacity` and `blendMode` inside `blendOptions`, rather than directly on the layer.
- Replace `bounds` with a `transform` object that includes `offset` and `dimension`.
- Valid `transformMode` values are `"custom"`, `"fit"`, `"fill"`, and `"none"`.
- Use the `protection` array for layer locking, for example `["all"]`, `["none"]`, or individual flags. Note: when `all` or `none` is used, it must be the sole array item and cannot be mixed with other flags.

For blend mode and transform details, use [Advanced Layer Operations](../advanced/reference-index.md).
