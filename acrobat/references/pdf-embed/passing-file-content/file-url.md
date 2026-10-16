# File URL

Handing over PDF data by URL is fairly obvious, though a few situations call for extra care.

**Token-based authentication**

For a file URL sitting behind token-based authentication that relies on custom headers, send the URL and the headers together like this:

```javascript
function previewPdfUrl(view, url, fileName, headers = []) {
    return view.previewFile({
        content: { location: { url, headers } },
        metaData: { fileName }
    });
}
```

headers is an array of {key, value} records. The server must allow the required cross-origin access.

**Cookie-based authentication**

For a file URL that depends on cookie-based authentication, switch
`downloadWithCredentials` to _true_ as you initialise the
`AdobeDC.View object`:

```javascript
function createCredentialedView(clientId, divId) {
    return new AdobeDC.View({ clientId, divId, downloadWithCredentials: true });
}
```

Load the PDF Embed SDK and call this function after adobe_dc_view_sdk.ready. The supplied divId must identify an existing container; clientId is your registered Embed API client ID.
