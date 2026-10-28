# contract

25.0

**async** : _Promise_`<void>`

Shrink the selection by a specified amount.

If the amount to contract exceeds the radius of the selected area, the selected area disappears completely. When no other selected areas remain active, the document ends with no active selection.

```javascript
await doc.selection.contract(8);
```

UI Location: Select > Modify > Contract

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `by` | _number_ | - | Selection contraction distance in pixels (integer in the range 1..500). |
| `applyEffectAtCanvasBounds` | _boolean_ | false | Default false: contraction skips any selection portion that meets the canvas edge. |
