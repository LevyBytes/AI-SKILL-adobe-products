# Migration Checklist

When updating background-layer requests from V1 to V2:

- [ ] Replace `type: "backgroundLayer"` with `type: "background_layer"`.
- [ ] Rename `visible` as `isVisible`.
- [ ] Convert `locked` into a `protection` array, using values such as `["all"]` for a fully locked layer and `["none"]` for an unlocked layer.
- [ ] Swap `add: {}` for `operation: { "type": "add" }`.
- [ ] Swap `edit: {}` for `operation: { "type": "edit" }`.
- [ ] Swap `delete: {}` for `operation: { "type": "delete" }`.
- [ ] Use `image.source.url` instead of `input.href` when providing pixel content.
- [ ] Omit `input.storage`, because external storage is the default.
- [ ] For edits or deletes, target the background layer with the `id` returned by the manifest response.
- [ ] Adjust manifest parsing for the `background_layer` type name.
- [ ] Prefer the explicit `convertToLayer: true` field over implicit conversion behavior.
- [ ] Note: move operations are unavailable because the background position is fixed.
- [ ] Confirm that unsupported move-operation errors are handled correctly.
