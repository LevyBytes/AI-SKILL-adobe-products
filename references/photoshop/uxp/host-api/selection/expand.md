# expand

25.0

**async** : _Promise_`<void>`

Increase the selection outward by the requested pixel count.

```javascript
await doc.selection.expand(42);
```

UI Location: Select > Modify > Expand

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `by` | _number_ | - | Selection expansion distance in pixels (integer in the range 1..500). |
| `applyEffectAtCanvasBounds` | _boolean_ | false | Default false: expansion skips any selection portion that meets the canvas edge. |
