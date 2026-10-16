# selectBorder

25.0

**async** : _Promise_`<void>`

Use the active selection's border to build a new selection. The new area matches a stroke drawn along that border at the supplied pixel width.
Canvas bounds do not constrain the result.

```javascript
await doc.selection.selectBorder(10);
```

UI Location: Select > Modify > Border...

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | _number_ | Border-selection width in pixels; valid integers are 1..200 |
