# Migration checklist

When moving advanced layer operations from V1 to V2, verify this conversion list:

- [ ] Move: convert `move: {...}` into `operation: {type: "move", placement: {...}}`
- [ ] Delete: convert `delete: {}` into `operation: {type: "delete"}`
- [ ] Transforms: replace `bounds` by setting `transform` with `offset` plus `dimension`, and include `transformMode: "custom"`
- [ ] Do not send a `transform` object when `transformMode` is `fit`, `fill`, or `none`; that request returns 400
- [ ] `fit`/`fill`: scaling leaves the layer at (0,0); for another position, follow with a second `transformMode: "custom"` request using the desired offset
- [ ] `custom` with dimension/angle/skew: apply geometry first with `anchor` as pivot and default (0,0), then position through `setOffset`; priority is offset -> alignment -> original x,y restoration
- [ ] Masks: rename `mask` as `pixelMask`
- [ ] Masks: map `mask.input` to `pixelMask.source`
- [ ] Masks: map `mask.linked` to `pixelMask.isLinked`
- [ ] Masks: map `mask.enabled` to `pixelMask.isEnabled`
- [ ] Masks: map `offset.x`/offset.y` to `offset.horizontal`/offset.vertical`
- [ ] Masks: delete a pixel mask by using `pixelMask: { "delete": true }` on an edit operation
- [ ] Clipping: put `mask.clip` on the top-level `isClipped` property
- [ ] Groups: replace `type: "layerSection"` with `type: "group_layer"`
- [ ] Groups: use `into` placement and `referenceLayer` instead of a `children` array
- [ ] Blend: promote `blendOptions.opacity` to top-level `opacity`
- [ ] Blend: promote `blendOptions.blendMode` to top-level `blendMode`
- [ ] Visibility: rename `visible` as `isVisible`
- [ ] Lock: use `protection` for former `locked`; accepted array examples include `["all"]` and `["none"]`
- [ ] Drop standalone `edit: {}` blocks
- [ ] Storage: convert `href`/`storage` syntax to `url`/`storageType`
