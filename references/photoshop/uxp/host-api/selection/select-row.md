# selectRow

25.0

**async** : _Promise_`<void>`

Select one pixel row.

```javascript
await doc.selection.selectRow(10);
```

UI Location: Toolbar > Single Row Marquee Tool

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `y` | _number_ | Row y coordinate in pixels (integer); keep it inside the document height. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#selectiontype) | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |
