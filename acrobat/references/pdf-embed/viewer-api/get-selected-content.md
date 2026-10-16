# getSelectedContent

Whenever a user highlights something inside the viewer, this API lets you retrieve what they selected. For now its reach is limited to text selections only.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with a JSON object including the type of content and actual selected content if successful: `{ type: "<CONTENT_TYPE>", data: "<SELECTED_CONTENT>" }`
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readSelectedContent(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getSelectedContent();
    console.log(result);
    return result;
}
```
