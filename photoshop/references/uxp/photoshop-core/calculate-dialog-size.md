# calculateDialogSize

22.5

**async** : _Promise_<\{ `height`: _number_ ; `width`: _number_ }>

Reports a dialog's effective size.

```javascript
const idealSize = { width: 200, height: 500 };
const { width, height } = await core.calculateDialogSize(idealSize);
```

### Parameters

| Name | Type |
| --- | --- |
| `preferredSize` | _object_ |
| `preferredSize.height` | _number_ |
| `preferredSize.width` | _number_ |
| `identifier?` | _string_ |
| `minimumSize?` | _object_ |
| `minimumSize.height` | _number_ |
| `minimumSize.width` | _number_ |
