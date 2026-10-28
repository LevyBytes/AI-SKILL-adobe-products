# window.XMLHttpRequest - responseXML : `Document`

**Read only**
Contains the XML or HTML `Document` received by the request, or
null when the request failed, has not yet been sent, or
when the data cannot be parsed as XML or HTML.

**Throws**:

- `DOMException` Thrown when responseType is neither "document" nor the empty string.

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
