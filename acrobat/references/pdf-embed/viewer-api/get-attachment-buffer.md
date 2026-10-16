# getAttachmentBuffer

Pass this one the name of an attachment and it returns that attachment content's ArrayBuffer.

### Input parameters

`<ATTACHMENT_NAME: String>`

### API output

Returns a Promise which,

- Resolves with the ArrayBuffer of the attachment file: `{ buffer: Int8Array }`
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readAttachmentBuffer(previewFilePromise, attachmentName) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const result = await apis.getAttachmentAPIs().getAttachmentBuffer(attachmentName);
    console.log(result);
    return result;
}
```

Grab the runnable code sample
[here](https://www.adobe.com/go/pdfembedapi_samples) under
`/More Samples/Viewer APIs/Attachment APIs`
