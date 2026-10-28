# getPageZoom

Hand this API a PDF page number and it reports back that page's zoom level.

### Input parameters

`<Page_Number>`

### API output

Returns a Promise which,

- Resolves with the zoom level if successful
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readPageZoom(previewFilePromise, pageNumber) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getPageZoom(pageNumber);
    console.log(result);
    return result;
}
```
