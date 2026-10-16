# setCursor

Use this API to swap the page cursor for any cursor style you like — help, wait, crosshair, and so on.

### Input parameters

[A string denoting the cursor style](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor): `<Cursor_Type>`

### API output

N/A

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function setDocumentCursor(previewFilePromise, cursorType) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.setCursor(cursorType);
    console.log(result);
    return result;
}
```
