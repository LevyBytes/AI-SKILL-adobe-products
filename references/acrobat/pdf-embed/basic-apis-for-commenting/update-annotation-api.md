# updateAnnotation API

One existing annotation in the PDF gets revised by this API, covering the `bodyValue` parameter, the `font` and `color` parameters nested under `stylesheet`, and further parameters under `selector` like `strokeColor`, `strokeWidth`, `boundingBox` and `inkList`.

Hand it annotation data carrying the revised parameters; it locates the annotation whose ID appears in that input and writes the changes onto it. That annotation data has to match the same layout the Annotation schema lays out.

Through this API, the `boundingBox` parameter can be revised only on note, add text, and drawing annotations.

### Input parameters

JSON object containing the annotation data.

### API output

A Promise comes back that:

- settles when the update goes through,
- turns down with an error object carrying a code and message if the update fails.

### API signature

```javascript
async function updateAnnotation(previewPromise, annotation) {
    const viewer = await previewPromise;
    const manager = await viewer.getAnnotationManager();
    return manager.updateAnnotation(annotation);
}
```

Pass the promise returned by previewFile and valid annotation data or IDs. Await the returned promise and handle rejection in your application.
