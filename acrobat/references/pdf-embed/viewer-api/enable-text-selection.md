# enableTextSelection

This API governs whether text can be selected in the PDF, and selection is on (_true_) out of the box. Bear in mind that switching selection off also takes the highlight annotation tool out of the quick tools menu along the left edge.

### Input parameters

Boolean

### API output

Returns a Promise which,

- Resolves if successful
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function setTextSelection(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const allowTextSelection = false;
    const result = await apis.enableTextSelection(allowTextSelection);
    console.log(result);
    return result;
}
```
