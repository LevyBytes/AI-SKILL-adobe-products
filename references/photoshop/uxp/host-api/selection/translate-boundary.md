# translateBoundary

25.0

**async** : _Promise_`<void>`

Move only the selection relative to its current position. The active layer is not changed.

```javascript
await doc.selection.translateBoundary(100, 600);
```

UI Location: Select > Transform Selection

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `deltaX` | _number_ | Horizontal distance to move the selection (decimal). |
| `deltaY` | _number_ | Vertical distance to move the selection (decimal). |
