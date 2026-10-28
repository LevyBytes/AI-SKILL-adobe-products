# feather

25.0

**async** : _Promise_`<void>`

Apply feathering to the selection edges by the specified amount. The softened selection strength is easiest to inspect as a channel in Quick Mask Mode.
At high values, `.bounds` can return `null` because no selection remains.

```javascript
await doc.selection.feather(16);
```

UI Location: Select > Modify > Feather

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `by` | _number_ | - | Selection feathering distance (integer in the range 0.1..1000). |
| `applyEffectAtCanvasBounds` | _boolean_ | false | Default false: feathering skips any selection portion that meets the canvas edge. |
