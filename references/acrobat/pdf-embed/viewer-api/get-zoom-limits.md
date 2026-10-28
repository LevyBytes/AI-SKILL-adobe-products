# getZoomLimits

What this one hands back is the lowest and highest zoom levels the PDF permits.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with a JSON object including the minimum and maximum zoom level of the PDF. `{ minZoom: <MIN_ZOOM_LEVEL>, maxZoom: <MAX_ZOOM_LEVEL> }`
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readZoomLimits(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getZoomAPIs().getZoomLimits();
    console.log(result);
    return result;
}
```
