# selectPolygon

25.0

**async** : _Promise_`<void>`

Select pixels inside a polygon.

```javascript
await doc.selection.selectPolygon([
  { x: 50, y: 10 },
  { x: 100, y: 90 },
  { x: 10, y: 40 },
]);
```

UI Location: Toolbar > Polygonal Lasso Tool

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `points` | \{ `x`: _number_ ; `y`: _number_ }[] | - | Array of point objects, each with \{x, y} properties. |
| `mode` | [_SelectionType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#selectiontype) | - | Behavior to use when a selection is already present. Default: SelectionType.REPLACE |
| `feather` | _number_ | 0 | Feather radius for the selection in pixels (decimal in the range 0..1000) |
| `antiAlias` | _boolean_ | true | When true, Photoshop anti-aliases the selection edge |
