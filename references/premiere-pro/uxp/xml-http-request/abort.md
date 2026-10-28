# window.XMLHttpRequest - abort()

Cancels the request after it has been sent.
Aborting a request moves readyState to UNSENT(0) and changes the request status code to 0.

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
