# smooth

25.0

**async** : _Promise_`<void>`

Reduce uneven edges, sharp corners, and jagged lines in the selection. Smooth also removes isolated pixel groups smaller than the supplied radius. This helps clean stray pixels from color-based selections.

At high values, `.bounds` can return `null` because no selection remains.

```javascript
await doc.selection.smooth(32);
```

UI Location: Select > Modify > Smooth...

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `radius` | _number_ | - | Radius used for sampling, in pixels (integer in the range 1..500) |
| `applyEffectAtCanvasBounds` | _boolean_ | false | Default false: portions touching the canvas edge are not smoothed. |
