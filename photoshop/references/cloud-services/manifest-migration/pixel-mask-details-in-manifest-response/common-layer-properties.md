# Common Layer Properties

| Property | Type | Location | Description |
| --- | --- | --- | --- |
| `clippingMask` | Boolean | `layerSettings.clippingMask` | Indicates whether the layer is clipped to the layer below it. |
| `protection` | Array of strings | Layer level | V2: Protection flags (none, all, transparency, composite, position, artboard_autonest). Replaces V1 `locked` boolean. When using `none` or `all`, array must contain only that element. |

**Note:** In edit operations, set this through the `isClipped` field at layer config level, such as `layers[].isClipped: true`.

**Migration note:** V2 returns `protection` as an array in the manifest, replacing the V1 `locked` boolean. Map `locked: true` to `protection: ["all"]`; map `locked: false` to `protection: ["none"]` or an empty value.
