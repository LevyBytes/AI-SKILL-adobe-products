# clear

Invoking this halts the search that is underway and wipes out the results.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves to true on successful operation. Stops ongoing search operation and clears the search results. Resolves to false when `clear()` operation fails.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function clearSearchResults(previewFilePromise, searchString) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const search = await apis.search(searchString);
    const result = await search.clear();
    console.log(result);
    return result;
}
```

Grab the runnable search-and-zoom code sample
[here](https://www.adobe.com/go/pdfembedapi_samples) under
`/More Samples/Viewer APIs/Search and Zoom APIs`
