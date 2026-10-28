# window.XMLHttpRequest - responseText : `string`

**Read only**
Provides text received from a server after a request is sent.
When readyState is neither LOADING nor DONE, the value is an empty string.

**Throws**:

- `DOMException` InvalidStateError when XMLHttpRequest.responseType is neither "text" nor the empty string "".

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
