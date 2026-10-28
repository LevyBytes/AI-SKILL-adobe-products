# Layer Properties

Standard layer properties also apply to adjustment layers:

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "type": "adjustment_layer",
  "name": "My Adjustment",
  "isVisible": true,
  "protection": ["none"],
  "opacity": 80,
  "blendMode": "normal",
  "adjustments": {/* additional content omitted */}
}
```

Do not use **transformMode** with adjustment layers. Reserve it for layer types that support transforms, such as image layers.

For blend modes and other properties, see [Advanced Layer Operations](../advanced/reference-index.md).
