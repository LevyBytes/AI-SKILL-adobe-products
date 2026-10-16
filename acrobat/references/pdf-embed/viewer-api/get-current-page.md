# getCurrentPage

What this API gives you is the page number of whichever page currently holds focus.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the current page number if successful
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readCurrentPage(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getCurrentPage();
    console.log(result);
    return result;
}
```
