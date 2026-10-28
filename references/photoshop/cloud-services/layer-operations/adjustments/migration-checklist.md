# Migration Checklist

During migration of adjustment layer operations from V1 to V2, verify these changes:

- [ ] Use `type: "adjustment_layer"` instead of `type: "adjustmentLayer"`
- [ ] Replace the `add` block with `operation.type: "add"`
- [ ] Translate placement directives, such as `insertTop` to `placement.type: "top"`
- [ ] Drop explicit `edit: {}` blocks for modifications
- [ ] If visibility is used, map `visible` to `isVisible`
- [ ] For locks, replace `locked` with the `protection` array (see [Advanced Layer Operations](../advanced/reference-index.md))
- [ ] Change storage syntax from `href`/`storage` to `url`/`storageType`
- [ ] Add the required `type` within `adjustments`, such as `"type": "brightness_contrast"`; see [the V2 adjustment type structure](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-adjustments.md#3-adjustments-structure--required-type-in-v2)
- [ ] In the V2 Exposure payload, use `exposureValue` where V1 used `exposure`
