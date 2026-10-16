# 7e. Group layers (`layerSection` → `group_layer`)

**Type rename:** `"layerSection"` → `"group_layer"`

**V2 does not yet support creating a new document with a group layer; that support is planned.**
**Existing documents can still be edited** to place a new layer inside a group layer: use `operation.placement.type: "into"` and point `referenceLayer` at the group, such as `"referenceLayer": { "name": "Group 1" }`. Name, visibility, protection, and similar edits are also supported for existing group layers. For nesting, V1 uses the `children` array on the layer.
