# rotate

23.0

**async** : _Promise_`<void>`

Rotates this layer.

```javascript
// rotate 90 deg counter clockwise
await layer.rotate(-90);

// rotate 90 deg clockwise relative to top left corner
let anchorPos = require("photoshop").constants.AnchorPosition;
await layer.rotate(90, anchorPos.TOPLEFT);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angle` | _number_ \| AngleValue | Degrees used for the layer rotation |
| `anchor?` | [_AnchorPosition_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#anchorposition) | Anchor position used as the rotation point |
| `options?` | _object_ | - |
| `options.interpolation?` | [_InterpolationMethod_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#interpolationmethod) | Interpolation method for image resampling |
