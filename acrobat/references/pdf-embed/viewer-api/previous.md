# previous

Invoking this jumps back to and highlights whichever search result came before in the PDF.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves to true on successful operation and the previous search result is highlighted in the PDF. Resolves to false when `previous()` operation fails.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function previousSearchResult(previewFilePromise, searchString) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const search = await apis.search(searchString);
    const result = await search.previous();
    console.log(result);
    return result;
}
```
