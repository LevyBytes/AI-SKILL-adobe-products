# window.XMLHttpRequest — getAllResponseHeaders()

The method produces the response header list after sorting and combining it.
Each header field uses the form [lower cased name]": "[value]"\r\n". For combined values, the separator is ", ".

**Returns**: `string` - Complete response header set.  
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
