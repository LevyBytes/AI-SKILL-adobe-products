# gotoLocation

With this API you can jump to any page in the PDF; it takes a page number to do so. Optional x and y coordinates may also be supplied so you can land on a precise spot on the page. Leave the coordinates off and they fall back to (0, 0).

If the page number you give runs past the PDF's page count, the jump simply won't happen. The x and y values likewise have to stay within the page's width and height; whichever of the two strays outside that range gets reset to 0.

### Input parameters

(`<Page_Number>`, `<X_Coordinate>`, `<Y_Coordinate>`)

### API output

Returns a Promise which,

- Resolves if successful
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function goToDocumentLocation(previewFilePromise, pageNumber, xCoordinate, yCoordinate) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.gotoLocation(pageNumber, xCoordinate, yCoordinate);
    console.log(result);
    return result;
}
```
