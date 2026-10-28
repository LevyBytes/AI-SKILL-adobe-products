# window.XMLHttpRequest - send([body])

Dispatches the request to the server.
Accepted body values are: Blob, ArrayBuffer, TypedArray, DataView, FormData, or string.
When no body is supplied, null is used by default.

Sending a FormData object has one caveat: files contained in the FormData are read after this method is called.
To upload files exactly as provided, do not alter the file contents or files before the upload to the server finishes. see [XMLHttpRequest.upload](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/xml-http-request.md#module-global-xmlhttprequest-upload).
If file reading fails, the XMLHttpRequest transaction started by this method may abort and fire an error event.

**Throws**:

- `DOMException` InvalidStateError when state is not OPENED or send() has already been called.
- `Error` Body has an unsupported type.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [body] | `_` | `\null` | Body of data to be sent in the request. |

**Example** _(Getting the resource as text)_

```js
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
  console.log(xhr.responseText);
});
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```

**Example** _(Post request)_

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.open("POST", "https://www.myserver.com");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("foo=bar&lorem=ipsum");
```
