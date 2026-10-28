# selectEllipse

25.0

**async** : _Promise_`<void>`

Select pixels inside an ellipse.

```javascript
await doc.selection.selectEllipse({ top: 0, left: 0, bottom: 100, right: 100 });
```

UI Location: Toolbar > Elliptical Marquee Tool

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `bounds` | [_Bounds_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/bounds.md) | - | Object containing \{top, left, bottom, right} values that defines the selection bounds. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#selectiontype) | - | Behavior to use when a selection is already present. Default SelectionType.REPLACE |
| `feather` | _number_ | 0 | Feather radius for the selection in pixels (decimal in the range 0..1000) |
| `antiAlias` | _boolean_ | true | When true, Photoshop anti-aliases the selection edge |
