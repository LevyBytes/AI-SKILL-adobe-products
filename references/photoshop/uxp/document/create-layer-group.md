# createLayerGroup

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

Uses [GroupLayerCreateOptions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/grouplayercreateoptions.md) options to build a layer group.

```javascript
const myEmptyGroup = await doc.createLayerGroup();
const myGroup = await doc.createLayerGroup({
  name: "myLayer",
  opacity: 80,
  blendMode: "colorDodge",
});
const nonEmptyGroup = await doc.createLayerGroup({
  name: "group",
  fromLayers: [layer1, layer2],
});
const selectedGroup = await doc.createLayerGroup({
  name: "group",
  fromLayers: doc.activeLayers,
});
```

### Parameters

| Name | Type |
| --- | --- |
| `options?` | [_GroupLayerCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/grouplayercreateoptions.md) |
