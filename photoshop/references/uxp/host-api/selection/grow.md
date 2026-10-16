# grow

25.0

**async** : _Promise_`<void>`

Extend the selection to cover neighboring pixels accepted by the tolerance setting.

```javascript
await doc.selection.grow(32);
```

Unsupported modes: Bitmap, RGB 32 bits, Grayscale 32 bits

UI Location: Select > Grow

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `tolerance` | _number_ | - | Tolerance range (integer in the range 0..255) |
| `antiAlias` | _boolean_ | true | Use anti-aliasing when true |
