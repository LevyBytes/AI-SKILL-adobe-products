# window.XMLHttpRequest - getAllResponseHeaders()

Provides the response header list after sorting and combining it.
Every header field follows the form [lower cased name]": "[value]"\r\n". Combined values use ", " as the separator.

**Returns**: `string` - The complete response-header collection.  
**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
    console.log(xhr.getAllResponseHeaders());
  }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
