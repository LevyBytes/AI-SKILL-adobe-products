# window.XMLHttpRequest — responseText : `string`

**Read only**
Text received from the server after a request is sent.
Until readyState is LOADING or DONE, this returns "".

**Throws**:

- `DOMException` InvalidStateError if XMLHttpRequest.responseType is not set to either the empty string "" or "text".

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
});
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
