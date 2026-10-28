# unselectAnnotation API

Whatever annotation was selected last gets unselected by this API.

### Input parameters

N/A

### API output

N/A

### API signature

```javascript
previewFilePromise.then((adobeViewer) => {
  adobeViewer.getAnnotationManager().then((annotationManager) => {
    annotationManager.unselectAnnotation();
  });
});
```
