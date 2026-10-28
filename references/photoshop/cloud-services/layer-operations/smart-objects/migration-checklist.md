# Migration Checklist

For a V1-to-V2 smart object migration, check each of these changes:

- [ ] Replace `type: "smartObject"` with `type: "smart_object_layer"`.
- [ ] Use `smartObject.smartObjectFile.source` instead of `input` for the smart object file reference.
- [ ] Map `href`/`storage` onto `url`; `storageType` is unnecessary.
- [ ] Swap the `add` block for `operation.type: "add"` and include `placement`.
- [ ] Translate placement directives such as insertTop → placement.type: "top".
- [ ] Use `referenceLayer` with `name` or `id` in place of `relativeTo`.
- [ ] Include `operation.type: "edit"` when changing an existing layer.
- [ ] Rename `visible` to `isVisible`.
- [ ] Lock: replace `locked` with the `protection` array; see [Advanced Layer Operations](../advanced/reference-index.md).
- [ ] Put `opacity` and `blendMode` inside the `blendOptions` object.
- [ ] Replace `bounds` with `transform` containing `offset` and `dimension`; use `transformMode: "custom"`.
- [ ] Keep the `transform` object out of requests where `transformMode` is `fit`, `fill`, or `none`; otherwise the service returns 400.
- [ ] For `fit`/`fill`, scaling always leaves the layer at (0,0); to use a different position, make a second request with `transformMode: "custom"` and the needed offset.
- [ ] For `custom` plus dimension/angle/skew, execution runs in two passes: first geometry uses anchor as the pivot with default (0,0), then `setOffset` sets the location; priority order is offset → alignment → restore original x,y.
- [ ] Map `smartObject.linked` onto `smartObject.isLinked`
      (`true` for linked, `false` for embedded)
- [ ] Confirm which source file types V2 supports.
