# createTextLayer

24.2

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

Uses [TextLayerCreateOptions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/textlayercreateoptions.md) options to build a text layer.

```javascript
await doc.createTextLayer();
await doc.createTextLayer({
  name: "myTextLayer",
  contents: "Hello, World!",
  fontSize: 32,
});
```

### Parameters

| Name | Type |
| --- | --- |
| `options?` | [_TextLayerCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/textlayercreateoptions.md) |
