# window.XMLHttpRequest — getResponseHeader(name)

For the supplied field name, this method retrieves the corresponding response-header value.
Header lookup treats the search key without regard to case.

**Returns**: `string` - Matching value from the response header list for the supplied name.  
**Throws**:

- `TypeError` If the name parameter is not provided.

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name to search in response's header list. |

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
    console.log(xhr.getResponseHeader("Content-Type"));
  }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
