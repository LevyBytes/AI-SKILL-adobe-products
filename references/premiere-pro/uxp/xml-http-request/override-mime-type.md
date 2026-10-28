# window.XMLHttpRequest - overrideMimeType(mimetype)

Sets a MIME type to use for interpreting the transferred request data, replacing the response-provided type.
When MIME-type parsing fails, "application/octet-stream" is used for interpretation.

**Throws**:

- `DOMException` When state is LOADING or DONE

| Param | Type | Description |
| --- | --- | --- |
| mimetype | `string` | MIME type to use instead of the one specified in the response. Since Only UTF-8 is supported for charset of text encoding, MIME type’s parameters "charset" with other values than 'UTF-8' is not valid. |

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.response);
  console.log(xhr.responseText);
};
xhr.open("GET", "https://www.myxmlserver.com");
xhr.overrideMimeType("text/plain");
xhr.send();
```
