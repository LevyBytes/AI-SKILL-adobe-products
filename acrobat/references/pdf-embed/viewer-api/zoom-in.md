# zoomIn

Calling this steps the PDF up to the next zoom level, enlarging the view. That enlarged level is capped and can never go beyond the PDF's maximum zoom level.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the updated zoom level.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function zoomIn(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getZoomAPIs().zoomIn();
    console.log(result);
    return result;
}
```
