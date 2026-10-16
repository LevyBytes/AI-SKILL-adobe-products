# next

Invoking this jumps to and highlights whichever search result comes next in the PDF.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves to true on successful operation and the next search result is highlighted in the PDF. Resolves to false when `next()` operation fails.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function nextSearchResult(previewFilePromise, searchString) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const search = await apis.search(searchString);
    const result = await search.next();
    console.log(result);
    return result;
}
```
