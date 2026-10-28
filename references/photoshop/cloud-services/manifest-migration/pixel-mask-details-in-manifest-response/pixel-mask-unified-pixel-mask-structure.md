# 2. pixelMask - Unified Pixel Mask Structure

Collects pixel mask data in one structure, combining read-only metadata with editable fields:

**Metadata Properties (read-only):**

| Property | Type | Description |
| --- | --- | --- |
| `hasMask` | Boolean | Whether mask pixel data exists |
| `extendOpaque` | Boolean | How out-of-bounds areas are treated (`true` = opaque outside bounds, `false` = transparent) |
| `bounds` | Object | Spatial extent of the mask data (top, left, right, bottom) |

**Editable Properties:**

| Property | Type | Description | Default |
| --- | --- | --- | --- |
| `enabled` | Boolean | Toggle mask visibility without deleting data | `true` |
| `linked` | Boolean | Whether mask transforms with the layer | `true` |
| `offset` | Object | Independent position relative to layer origin | `{horizontal: 0, vertical: 0}` |

**Note:** The editable fields (`enabled`, `linked`, `offset`) work in `create-composite` edit operations and also appear in manifest responses, giving every API operation the same shape.
