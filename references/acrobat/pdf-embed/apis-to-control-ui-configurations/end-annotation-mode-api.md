# endAnnotationMode API

The annotation mode started most recently is shut down by this API.

### Input parameters

N/A

### API output

N/A

### API signature

```javascript
previewFilePromise.then((adobeViewer) => {
  adobeViewer.getAnnotationManager().then((annotationManager) => {
    annotationManager.endAnnotationMode();
  });
});
```
