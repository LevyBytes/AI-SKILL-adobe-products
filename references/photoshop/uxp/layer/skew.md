# skew

23.0

**async** : _Promise_`<void>`

Applies skewing.

```javascript
// parellelogram shape
await layer.skew(-15, 0);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `angleH` | _number_ \| AngleValue | Horizontal skew angle |
| `angleV` | _number_ \| AngleValue | Vertical skew angle |
| `options?` | _object_ | - |
| `options.interpolation?` | [_InterpolationMethod_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#interpolationmethod) | - |
