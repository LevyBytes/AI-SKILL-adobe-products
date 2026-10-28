# rotateBoundary

25.0

**async** : _Promise_`<void>`

Rotate only the selection clockwise around the supplied anchor position. The active layer is not changed.

```javascript
await doc.selection.rotateBoundary(90, constants.AnchorPosition.MIDDLECENTER);
```

UI Location: Select > Transform Selection

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angle` | _number_ | Decimal degree value from -180..180 for rotating the selection |
| `anchor` | [_AnchorPosition_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#anchorposition) | Anchor position used for rotation. Default: AnchorPosition.MIDDLECENTER |
| `interpolation` | [_InterpolationMethod_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#interpolationmethod) | Resampling algorithm to apply. Default: InterpolationMethod.BICUBIC |
