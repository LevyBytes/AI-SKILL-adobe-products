# createPixelLayer

24.1

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

Uses [PixelLayerCreateOptions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/pixellayercreateoptions.md) options to build a pixel layer.

```javascript
await doc.createPixelLayer({
  name: "myLayer",
  opacity: 80,
  fillNeutral: true,
});
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options?` | [_PixelLayerCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/pixellayercreateoptions.md) | Creation options, including general layer settings and kind-specific settings. |
