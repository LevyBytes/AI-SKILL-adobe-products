# Layer Types migration

**Layer Types:**

- `"layer"` - pixel/image layers
- `"text_layer"` - layers containing text
- `"adjustment_layer"` - adjustment layers that preserve source pixels
- `"smart_object_layer"` - smart object layers
- `"solid_color_layer"` - solid color fill layers
- `"group_layer"` - groups of layers (V1 `"layerSection"` maps to V2 `"group_layer"`). Starting a brand-new document with a group layer is still unavailable and is planned for a later release. For **editing an existing document**, adding a layer inside a group is supported by setting placement `type: "into"` and supplying `referenceLayer`, such as `"referenceLayer": { "name": "Group 1" }`. Do not send a `children` array in edit operations; use `into` placement plus `referenceLayer`.
- `"background_layer"` - background layer (V1 `"backgroundLayer"` maps to V2 `"background_layer"`). Select it with `name: "Background"` or the manifest-provided `id`; do not reuse V1's `-1`, while flat documents without other layers report `id: 0`. Add, edit, delete, and convert-to-layer are supported, but move is not. **Restricted fields**: `transform`, `transformMode`, `pixelMask`, `protection`, `blendOptions`. Apply one of those fields only after promoting the background into a regular layer with `convertToLayer: true`; later details are in **Background Layer Specifics**.
