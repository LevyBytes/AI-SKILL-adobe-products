# Crop mode - unified enum for all export types

V1 controlled output bounds with two booleans, `trimToCanvas` and `trimToLayer`. V2 replaces those flags with one `cropMode` enum that applies to single-layer, multi-layer, and document exports.

In V1, rendition outputs used `trimToCanvas` for trimming transparent pixels and `trimToLayer` for layer bounds. Those flags handled document and single-layer export, but multi-layer composites lacked trim control.

V2 uses a single `cropMode` value on any output:

| Value | Description | Single-layer | Multi-layer | Document export |
| --- | --- | --- | --- | --- |
| `layer_bounds` | The layer's bounding box; default for single-layer export | Yes | No | No |
| `trim_to_transparency` | Non-transparent-pixel crop; V1 equivalent is `trimToCanvas: true` | Yes | Yes | Yes |
| `document_bounds` | Entire canvas size; default for document or multi-layer export | Yes | Yes | Yes |

```json
{
  "outputs": [
    {
      "mediaType": "image/png",
      "destination": { "url": "https://storage.example.com/output.png" },
      "layers": [{ "id": 1096 }, { "id": 996 }],
      "cropMode": "trim_to_transparency"
    }
  ]
}
```

`layer_bounds` can only be used for single-layer export; multi-layer or document export returns a validation error.

The full cropMode reference is in [Export Layers Migration](../../export-layers-migration-guide.md).
