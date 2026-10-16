# Layer Transforms (V1 to V2) migration

**Layer Transforms (V1 to V2):**

- V1 stores sizing on the layer as `bounds: {left, top, width, height}`
- V2 requires `transformMode: "custom"` together with `transform: {offset: {horizontal, vertical}, dimension: {width, height}}`
- Additional V2 transform keys include `angle` for degree rotation, `skew: {horizontal, vertical}`, and `anchor: {horizontal, vertical}`
- `transformMode` accepts `"none"`, `"custom"`, `"fit"`, and `"fill"`; adjustment layers cannot use it.
