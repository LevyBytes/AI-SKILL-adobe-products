# groupLayers

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

Builds a group out of existing layers.

```javascript
const layers = doc.layers;
const group = await doc.groupLayers([layers[1], layers[2], layers[4]]);
```

### Parameters

| Name | Type |
| --- | --- |
| `layers` | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)[] |
