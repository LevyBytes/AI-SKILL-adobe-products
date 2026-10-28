# getLayerTree

23.1

**async** : _Promise_<\{ `list`: LayerTreeInfo[] }>

Returns the whole layer-stack hierarchy as nested "lists".

```javascript
await core.getLayerTree({ documentID: 123 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing key of `documentID` for the target document. |
| `options.documentID` | _number_ | - |
