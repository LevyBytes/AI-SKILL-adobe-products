# getXMPMetadata

Adobe built XMP (Extensible Metadata Platform) as a shared XML framework for holding metadata inside digital documents. The metadata XMP carries covers details about the document and what it holds — among them the author's name, keywords, and copyright information.

What `getXMPMetadata` does is look in the PDF for XMP metadata and, when it finds some, return it. Two optional parameters can be supplied to the API.

- Parameter one accepts a list of XMP metadata fields, and the API
  returns values for just those fields. Pass nothing and you get the
  default field values back instead.
- Parameter two accepts a boolean. Set it to _true_ and the API also
  hands back the full XMP metadata stream. Left alone it defaults to
  _false_.

### Input parameters

`(fields = [<field1>, <field2>, ...], includeRawStream = <Boolean>)`

### API output

Returns a Promise which,

- Resolves with the JSON object containing the XMP metadata and XML stream (if `includeRawStream` is set to true) if successful: `{ xmpMetadata: <XMP_METADATA>, xmpStream: <XML> }`
- Rejects with an error object that includes a code and message.

### API signature

Pass the promise returned by the PDF Embed preview and the documented operation arguments. Await the function and handle rejection in the caller; preview, API acquisition and operation failures propagate.

```javascript
async function readXMPMetadata(previewFilePromise) {
    const viewer = await previewFilePromise;
    const apis = await viewer.getAPIs();
    const fields = ["dc:title", "dc:creator", "xmp:CreateDate"];
    const includeRawStream = true;
    const result = await apis.getXMPMetadata(fields, includeRawStream);
    console.log(result);
    return result;
}
```
