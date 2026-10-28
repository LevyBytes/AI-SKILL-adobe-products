# flip

23.0

**async** : _Promise_`<void>`

Flips the layer along one axis or both axes.

```javascript
// flip horizontally
await layer.flip(constants.FlipAxis.HORIZONTAL);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `axis` | [_FlipAxis_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#flipaxis) | Axis, or both axes, used for the layer flip. |
