# inverse

25.0

**async** : _Promise_`<void>`

Replace the active selection with its inverse. The new selection is cropped to the canvas bounds. If every canvas pixel is selected, `inverse` leaves no active selection. Artboard bounds are also ignored.

```javascript
await doc.selection.inverse();
```

UI Location: Select > Inverse
