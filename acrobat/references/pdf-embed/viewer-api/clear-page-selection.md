# clearPageSelection

Give this API a page number and it removes whatever text selection is currently applied to that page.

### Input parameters

`<Page_Number>`

### API output

Returns a Promise which,

- Resolves if successful
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function clearPageSelection(previewFilePromise, pageNumber) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.clearPageSelection(pageNumber);
    console.log(result);
    return result;
}
```
