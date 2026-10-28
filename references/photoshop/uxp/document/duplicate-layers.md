# duplicateLayers

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)[]>

Copies the supplied layer(s), places the new copies above the uppermost one in the layer stack,
and returns the layers that were created.

```javascript
// duplicate some layers
const layerCopies = await document.duplicateLayers([layer1, layer3]);
layerCopies.forEach((layer) => {
  layer.blendMode = "multiply";
});
// ...to another document
const finalDoc = await photoshop.open("~/path/to/collated/image.psd");
await document.duplicateLayers([logo1, textLayer1], finalDoc);
await finalDoc.close(SaveOptions.SAVECHANGES);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `layers` | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)[] | Array of layers to duplicate. |
| `targetDocument?` | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | When specified, places the duplicates in another document. |
