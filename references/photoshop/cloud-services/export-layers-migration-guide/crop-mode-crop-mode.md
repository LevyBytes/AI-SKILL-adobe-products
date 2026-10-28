# Crop mode (`cropMode`)

**V1 migration note — single-layer output dimensions**

V1 produced single-layer exports using the **document/canvas dimensions** no matter where the layer sat or how large it was. V2 uses `layer_bounds` by default, which makes the output match the layer rather than the full canvas. To keep the canvas-sized result expected by a V1 workflow, explicitly set `cropMode: "document_bounds"`.

This setting chooses the bounding box used for exported content. It applies to single-layer, multi-layer, and document export, but `layer_bounds` has one limit: it is valid only when exporting a single layer.

| Value | Description | Single-layer | Multi-layer | Document export |
| --- | --- | --- | --- | --- |
| `layer_bounds` | Use the layer's own bounds (default for single-layer export). | Yes | No | No |
| `trim_to_transparency` | Crop to tight bounds of non-transparent pixels. | Yes | Yes | Yes |
| `document_bounds` | Use full document (or artboard) bounds (default for document/multi-layer export). | Yes | Yes | Yes |

**INFO**

When `layer_bounds` is supplied for multi-layer or document export, validation fails. Use `trim_to_transparency` or `document_bounds` for those export modes.
