# ViewOptions.fastPreview

app.activeViewer.views[0].options.fastPreview

Note

This functionality was added in After Effects 12.0 (CC)

### Description

Where the Fast Previews menu currently stands. The attribute is read/write and takes an enumerated value:

Warning

Try to read or set this attribute while in the Layer or Footage panel and an error message comes back.

Tip

Draft preview mode works only inside ray-traced 3D compositions. Attempt it in a Classic 3D composition and the error reads: "Cannot set Draft fast preview mode in a Classic 3D composition."

### Type

A FastPreviewType enumerated value; read/write. One of:

- FastPreviewType.`FP_OFF`: Off (Final Quality)
- FastPreviewType.`FP_ADAPTIVE_RESOLUTION`: Adaptive Resolution
- FastPreviewType.`FP_DRAFT`: Draft
- FastPreviewType.`FP_FAST_DRAFT`: Fast Draft
- FastPreviewType.`FP_WIREFRAME`: Wireframe

### Example

```javascript
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_ADAPTIVE_RESOLUTION;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_DRAFT;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_FAST_DRAFT;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_OFF;
app.activeViewer.views[0].options.fastPreview === FastPreviewType.FP_WIREFRAME;
```
