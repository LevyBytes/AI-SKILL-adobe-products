# getPDFMetadata

Pulling from the PDF dictionary, this one reports the document's core facts — for instance its page count and its title.

### Input parameters

N/A

### API output

Returns a Promise which,

- Resolves with a JSON object which includes the number of pages and title of PDF if successful: `{ numPages: <NUMBER_OF_PAGES>, pdfTitle: <PDF_TITLE> }`
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readPDFMetadata(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getPDFMetadata();
    console.log(result);
    return result;
}
```
