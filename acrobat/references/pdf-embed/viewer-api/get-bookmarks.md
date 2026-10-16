# getBookmarks

This one yields the roster of bookmarks already in the PDF. Every entry on that roster arrives as a JSON holding the essentials — its ID, its title, and the set of child bookmarks nested beneath it.

Bookmark fields:

| Field | Contract |
| --- | --- |
| `id` | Numeric identifier unique to the bookmark. |
| `title` | Bookmark title string. |
| `children` | Array of nested bookmark records with the same shape. |

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with the list of bookmarks available in the PDF. `[ Bookmark_1, Bookmark_2, ...]`
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readBookmarks(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getBookmarkAPIs().getBookmarks();
    console.log(result);
    return result;
}
```
