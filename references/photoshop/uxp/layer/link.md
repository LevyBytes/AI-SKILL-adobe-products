# link

23.0

[_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)[]

Links this layer with the target layer when they are not already linked,
then returns the linked-layer list.

```javascript
// link two layers together
const linkedLayers = strokes.link(fillLayer);
linkedLayers.forEach((layer) => console.log(layer.name)) > "strokes" > "fillLayer";
```

### Parameters

| Name | Type |
| --- | --- |
| `targetLayer` | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) |
