# window.XMLHttpRequest - responseXML : `Document`

**Read only**
Document holding the XML or HTML returned by the request.
The value is null when the request failed, has not been sent yet, or XML/HTML parsing cannot complete.

**Throws**:

- `DOMException` If responseType is not either the empty string or "document".

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseXML);
  }
};
xhr.open("GET", "https://www.mydocumentserver.com");
xhr.responseType = "document";
xhr.send();
```
