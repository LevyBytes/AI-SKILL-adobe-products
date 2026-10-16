# window.XMLHttpRequest — getResponseHeader(name)

Looks up the supplied field name and returns its matching response-header value.
Header-name matching ignores case.

**Returns**: `string` - The response-header value matching the supplied name.  
**Throws**:

- `TypeError` When no name parameter is supplied.

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
