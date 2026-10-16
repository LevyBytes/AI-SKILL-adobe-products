# makeWorkPath

25.0

**async** : _Promise_<[*PathItem*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md)>

Build a work path from whichever selection is active.

```javascript
await doc.selection.makeWorkPath();
```

UI Location: Paths panel > Make work path icon

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `tolerance` | _number_ | 2 | Tolerance value from 0.5..10, expressed as a decimal; lower values give higher precision |
