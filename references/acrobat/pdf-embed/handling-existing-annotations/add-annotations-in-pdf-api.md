# addAnnotationsInPDF API

Feed this API a list of supported annotations and it writes them into the PDF buffer. What you get back is the refreshed PDF buffer.

### Input parameters

A JSON array of annotation data: `[Annotation_1, Annotation_2, ...]`

### API output

A Promise comes back that:

- settles with the refreshed PDF buffer whenever the run succeeds.
- turns down and hands over an error object holding an error code and a message on failure.

### API signature

```javascript
async function addAnnotationsToPdf(previewPromise, annotations) {
    const viewer = await previewPromise;
    const manager = await viewer.getAnnotationManager();
    return manager.addAnnotationsInPDF(annotations);
}
```

Pass the promise returned by previewFile and valid annotation data or IDs. Await the returned promise and handle rejection in your application.
