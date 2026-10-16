# resizeBoundary

25.0

**async** : _Promise_`<void>`

Scale only the selection, in percent. The active layer is not changed.

```javascript
await doc.selection.resizeBoundary(50, 50);
```

UI Location: Select > Transform Selection

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `horizontal` | _number_ | 100 | Horizontal percentage used to scale the selection (decimal) |
| `vertical` | _number_ | 100 | Vertical percentage used to scale the selection (decimal) |
| `anchor` | [_AnchorPosition_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#anchorposition) | - | Anchor position used as the scaling origin. Default: AnchorPosition.MIDDLECENTER |
| `interpolation` | [_InterpolationMethod_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#interpolationmethod) | - | Resampling algorithm to apply. Default: InterpolationMethod.BICUBIC |
