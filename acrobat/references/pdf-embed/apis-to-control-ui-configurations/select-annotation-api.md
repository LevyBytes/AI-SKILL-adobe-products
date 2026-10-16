# selectAnnotation API

This one picks out an existing annotation and moves focus onto it. The select action lands on whichever annotation the annotation ID points to.

### Input parameters

`<Annotation_ID>`

### API output

A Promise comes back that:

- settles once the select-annotation operation goes through
- turns down with an error object carrying an error code and message

### API signature

```javascript
async function selectAnnotation(previewPromise, annotationId) {
    const viewer = await previewPromise;
    const manager = await viewer.getAnnotationManager();
    return manager.selectAnnotation(annotationId);
}
```

Pass the promise returned by previewFile and valid annotation data or IDs. Await the returned promise and handle rejection in your application.
