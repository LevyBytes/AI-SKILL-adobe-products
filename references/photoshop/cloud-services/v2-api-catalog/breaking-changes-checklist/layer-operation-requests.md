# Layer operation requests

- [ ] Supply `operation.type` for each layer operation (`"add"`, `"edit"`, `"delete"`, `"move"`)
- [ ] For request layer-type values, map `layerSection` → `group_layer`, `textLayer` → `text_layer`, `smartObject` → `smart_object_layer`, and `fillLayer` → `solid_color_layer` (new-document group-layer creation remains an upcoming feature; existing-document edits can use `into` + `referenceLayer` to place a layer inside a group)
- [ ] Replace `locked: true` with `protection: ["all"]`
