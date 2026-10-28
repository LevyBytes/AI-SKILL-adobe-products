# getLayerGroupContents

23.1

_Promise_<\{ `list`: LayerTreeInfo[] }>

Returns a layer list for the target layer group.

```javascript
await core.getLayerGroupContents({ documentID: 123, layerID: 9 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.documentID` | _number_ |
| `options.layerID` | _number_ |
