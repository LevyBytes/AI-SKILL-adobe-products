# resetCursor

Use this API to take back a cursor style you applied earlier and return to the default cursor.

### Input parameters

N/A

### API output

N/A

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function resetDocumentCursor(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.resetCursor();
    console.log(result);
    return result;
}
```
