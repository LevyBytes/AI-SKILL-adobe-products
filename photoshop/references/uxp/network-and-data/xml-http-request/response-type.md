# window.XMLHttpRequest — responseType : `string`

Response payloads use this setting to indicate the data format.
The available choices are:

     "" (Empty string): default choice; equivalent to "text".
     "text"           : string text content.
     "arrayBuffer"    : binary data supplied as an ArrayBuffer.
     "blob"           : binary data supplied as a Blob object.
     "document"       : HTML Document or XML Document selected from the received data's MIME type.
     "json"           : Object produced by parsing the received data contents as JSON.

## window.XMLHttpRequest — responseType

**Throws**:

- `DOMException` If readyState is either LOADING or DONE.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.responseType = "blob";
```
