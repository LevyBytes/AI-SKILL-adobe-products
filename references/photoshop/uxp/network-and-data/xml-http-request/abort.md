# window.XMLHttpRequest - abort()

If the request has already been sent, abort() stops it.
After an abort, readyState becomes UNSENT(0), and the request status code becomes 0 in that state.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onabort = () => {
  console.log("aborted");
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
abortButton.addEventListener("click", () => {
  xhr.abort();
});
```
