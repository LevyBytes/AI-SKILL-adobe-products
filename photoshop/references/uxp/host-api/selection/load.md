# load

25.0

**async** : _Promise_`<void>`

A [Channel](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/channel.md) or [Layer](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) can supply the selection source. The Layer's pixel transparency supplies the selection values. Fully opaque pixels map to a full selection value.

```javascript
await doc.selection.load(doc.channels[3]); // first alpha channel in RGB document
```

UI Locations:

- Select > Load Selection...
- control/command + click on layer thumbnail
- control/command + click on channel thumbnail

_For path selection, use [PathItem.makeSelection](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md#makeselection)_

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `from` | _ComponentChannel_ \| _AlphaChannel_ \| [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) | - | Channel or Layer source for the loaded selection; it may live in another document. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#selectiontype) | - | Behavior to apply when a selection is already present. Default SelectionType.REPLACE |
| `invert` | _boolean_ | false | When true, reverse the loaded result |
