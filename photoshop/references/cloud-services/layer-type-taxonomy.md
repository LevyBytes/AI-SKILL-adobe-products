# Layer type taxonomy

V2 changed every layer type string. Any `switch` statements or `if/else` chains that compare `layer.type` need updates.

**CHANGED** — V2 uses snake_case type names, and artboards no longer share the group type.

| Old type string | New type string | Notes |
| --- | --- | --- |
| `adjustmentLayer` | `adjustment_layer` | All adjustment layers (brightness, curves, levels, etc.) |
| `backgroundLayer` | `background_layer` | Background layer (locked-by-default canvas base) |
| `fillLayer` | `solid_color_layer` | Solid color fill layers |
| `layer` | `layer` | Generic rasterized pixel layers |
| `layerSection` | `group_layer` | Groups / folders |
| `layerSection` (artboard) | `artboard` | Artboards are now a distinct type (see [Artboard structure](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#artboard-structure)) |
| `smartObject` | `smart_object_layer` | Smart objects |
| `textLayer` | `text_layer` | Text layers |

Previously, artboards appeared as `layerSection` nodes, so they could not be separated from ordinary groups by type alone. V2 promotes them to `type: "artboard"` and adds dedicated `typeAttributes.artboard` data.
