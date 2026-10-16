# scale

23.0

**async** : _Promise_`<void>`

Scales this layer.

ExtendScript used the name `resize` for this operation.

```javascript
await layer.scale(80, 80);

// Scale the layer to be a quarter of the size relative to bottom left corner
let anchorPos = require("photoshop").constants.AnchorPosition;
await layer.scale(50, 50, anchorPos.BOTTOMLEFT);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | _number_ \| PercentValue | Numeric percentage for horizontal layer scaling |
| `height` | _number_ \| PercentValue | Numeric percentage for vertical layer scaling |
| `anchor?` | [_AnchorPosition_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#anchorposition) | Anchor position used as the transform origin |
| `options?` | _object_ | - |
| `options.interpolation?` | [_InterpolationMethod_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#interpolationmethod) | Interpolation method for image resampling |
