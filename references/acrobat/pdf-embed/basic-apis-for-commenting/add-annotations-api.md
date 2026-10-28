# addAnnotations API

Use this one to add or strictly import supported annotations. Feed it a JSON array carrying the annotation data, which has to follow the [Annotation schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos-comments.md#annotation-schema). It accepts a lone annotation just as happily as a batch of them.

### Input parameters

A JSON array holding the annotations as a list: `[Annotation_1, Annotation_2, ...]`

### API output

A Promise comes back that:

- settles successfully once the API call goes through
- turns down, handing over an error object with a code and a message, should the call fail.

### API signature

```javascript
async function addAnnotations(previewPromise, annotations) {
    const viewer = await previewPromise;
    const manager = await viewer.getAnnotationManager();
    return manager.addAnnotations(annotations);
}
```

Pass the promise returned by previewFile and valid annotation data or IDs. Await the returned promise and handle rejection in your application.
