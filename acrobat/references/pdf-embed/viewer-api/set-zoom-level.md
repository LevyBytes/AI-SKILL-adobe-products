# setZoomLevel

Hand this one a float and it pins the PDF's zoom to that figure. Whatever you pass has to fall inside the PDF's permitted minimum and maximum zoom range.

Pass a value under the minimum zoom level and the PDF snaps to its minimum instead. The same goes the other way: a value over the maximum zoom level forces the maximum to apply.

### Input parameters

`<ZOOM_LEVEL: Float>`

### API output

Returns a Promise which,

- Resolves with the updated zoom level.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function setZoom(previewFilePromise, zoomLevel) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getZoomAPIs().setZoomLevel(zoomLevel);
    console.log(result);
    return result;
}
```
