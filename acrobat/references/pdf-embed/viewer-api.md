# Viewer API

For tailoring the interface and the way users interact with the PDF, the PDF Embed API ships a set of viewer APIs. You can call on them to drive UI changes through code while the viewer is running.

## Viewer API

Feed the search API a String and it scans the whole document for that term. Highlighting lands on the term's first appearance, counting forward from whichever page is currently on screen.

### Input parameters

`<SEARCH_STRING: String>`

### API output

Returns a Promise which,

- Resolves with a JSON object containing the following interfaces:
  - `onResultsUpdate()`
  - `next()`
  - `previous()`
  - `clear()`
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function searchDocument(previewFilePromise, searchString) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.search(searchString);
    console.log(result);
    return result;
}
```
