# onResultsUpdate

You can hand a callback of your own into `onResultsUpdate()`. Every time the search API runs a search and a hit gets highlighted in the PDF, that callback fires. It is handed the key facts about the current hit packaged as a JSON — things like the page now in view, the index of the active result, how many results exist in total, and the status.

```javascript
{
    currentResult: {
        pageNumber: Integer,  // Current page number in view
        index: Integer,       // Index of the current highlighted search result
    },
    totalResults: Integer,   // Total number of search results found till the time callback function is executed
    status: String           // Status of search result till the time callback function is executed. Values can be "IN_PROGRESS" or "COMPLETED".
}
```

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves to true on successful operation. When operation is successful, the callback function is executed and receives information about the search results in the form of a JSON. Resolves to false when `onResultsUpdate()` operation fails.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate. Supply `callbackFunction` to process each search update; the original example logged the received search result.

```javascript
async function observeSearchResults(previewFilePromise, searchString, callbackFunction) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const search = await apis.search(searchString);
    const result = await search.onResultsUpdate(callbackFunction);
    console.log(result);
    return result;
}
```
