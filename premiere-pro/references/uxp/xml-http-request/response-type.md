# window.XMLHttpRequest — responseType : `string`

The response data format is controlled by this value.
Supported values:

     "" (Empty string): the default format, equivalent to "text".
     "text"           : text represented as a string.
     "arrayBuffer"    : an ArrayBuffer containing binary data.
     "blob"           : a Blob object containing binary data.
     "document"       : an HTML Document or XML Document selected from the MIME type of the received data.
     "json"           : an object produced by parsing the received data contents as JSON.

## window.XMLHttpRequest — responseType

**Throws**:

- `DOMException` When readyState is LOADING or DONE.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.responseType = "blob";
```
