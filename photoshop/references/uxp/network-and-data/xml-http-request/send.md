# window.XMLHttpRequest — send([body])

send() transmits the request to the server.
Supported body values include Blob, ArrayBuffer, TypedArray, DataView, FormData, and string.
When body is omitted, null is used as the default value.

FormData has one important caveat when sent this way. Files in the FormData object are read after send() is called.
To upload files unchanged, do not modify either the files or their contents until the server upload is complete. see [XMLHttpRequest.upload](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/data-transfers/xml-http-request.md#module-global-xmlhttprequest-upload).
If file reading fails, this method's XMLHttpRequest transaction may be aborted and dispatches an error event.

**Throws**:

- `DOMException` InvalidStateError if either state is not OPENED or send() is already invoked.
- `Error` Body is not a supported type.

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
