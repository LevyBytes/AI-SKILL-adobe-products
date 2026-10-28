# selectColumn

25.0

**async** : _Promise_`<void>`

Select one pixel column.

```javascript
await doc.selection.selectColumn(90);
```

UI Location: Toolbar > Single Column Marquee Tool

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `x` | _number_ | Column x coordinate in pixels (integer); keep it inside the document width. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#selectiontype) | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |
