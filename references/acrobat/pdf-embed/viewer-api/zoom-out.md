# zoomOut

Calling this drops the PDF down to the previous zoom level, shrinking the view. That reduced level is floored and never falls under the PDF's minimum zoom level.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the updated zoom level.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function zoomOut(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getZoomAPIs().zoomOut();
    console.log(result);
    return result;
}
```
