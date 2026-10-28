# Migration checklist

For image-layer migration work that moves from v1 to v2, check each item below:

- [ ] Rename image-reference `input` fields as `source`
- [ ] Replace `href`/`storage` pairs with `url`/`storageType`; leave storageType out for external sources when appropriate
- [ ] Express the old `add` block as `operation.type: "add"`
- [ ] Map `insertTop` placement to `placement.type: "top"`
- [ ] Map `insertBottom` placement to `placement.type: "bottom"`
- [ ] Map `insertAbove` placement to `placement.type: "above"` and include `referenceLayer`
- [ ] Map `insertBelow` placement to `placement.type: "below"` and include `referenceLayer`
- [ ] Map `insertInto` placement to `placement.type: "into"` and include `referenceLayer`
- [ ] Rename `type: "fillLayer"` as `type: "solid_color_layer"`
- [ ] Leave out the explicit `edit: {}` wrapper when making modifications
- [ ] Promote `blendOptions.opacity` to the top-level `opacity` property
- [ ] Rename `visible` as `isVisible`
- [ ] Locking: replace `locked` with a `protection` array; see [Advanced Layer Operations](../layer-operations/advanced/reference-index.md)
- [ ] Availability note: V2 does not yet provide `fillToCanvas`
