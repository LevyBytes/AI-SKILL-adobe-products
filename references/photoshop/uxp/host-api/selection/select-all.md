# selectAll

25.0

**async** : _Promise_`<void>`

Select every pixel on the canvas.

When the document contains artboards, Photoshop selects all pixels on the artboard containing the active layer.

With active layers spanning multiple artboards, Photoshop creates one rectangular selection whose bounds wrap those layers.

If no artboard is active, every artboard is selected the same way.
(The resulting selection may not cover the whole canvas.)

```javascript
await doc.selection.selectAll();
```

UI Location: Select > All
