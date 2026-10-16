# openBookmark

Give this one a bookmark ID and it takes you straight to that specific PDF bookmark.

### Input parameters

`<BOOKMARK_ID>`

### API output

Returns a Promise which,

- Resolves to true on successful API execution and the user navigates to that particular bookmark. Resolves to false when the bookmark does not exist in the PDF.
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function openBookmark(previewFilePromise, bookmarkID) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getBookmarkAPIs().openBookmark(bookmarkID);
    console.log(result);
    return result;
}
```

Grab the runnable code sample
[here](https://www.adobe.com/go/pdfembedapi_samples) under
`/More Samples/Viewer APIs/Bookmark APIs`
