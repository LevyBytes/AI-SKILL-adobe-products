# duplicate

23.0

**async** : _Promise_ <[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

Creates a duplicate above the layer in the layer stack,
then returns the duplicate object.

```javascript
// duplicate a layer
const copyLayer = await layer.duplicate();

// extract to a new document
const exportDoc = psApp.documents[1];
const exportedLayer = await layer.duplicate(exportDoc);
```

### Parameters

| Name | Type |
| --- | --- |
| `relativeObject?` | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) \| [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) |
| `insertionLocation?` | [_ElementPlacement_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#elementplacement) |
| `name?` | _string_ |
