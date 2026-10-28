# saveTo

25.0

_Promise_`<void>`

Use an existing Alpha Channel as the destination for the selection; Component Channels cannot be destinations.

```javascript
// Stores the current selection into an existing alpha channel in RGB document
await doc.selection.saveTo(doc.channels[3]);

// Performing an intersection operation on an alpha channel in RGB document
await doc.selection.saveTo(doc.channels[3], SelectionType.INTERSECT);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `channel` | _AlphaChannel_ | Alpha channel targeted by the save operation. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#selectiontype) | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |
