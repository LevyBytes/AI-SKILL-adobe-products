# window.XMLHttpRequest — responseURL : `string`

**Read only**
Response URL, or "" when the URL is null.
If the URL includes a fragment, the fragment is removed before reporting the final URL after redirect handling.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseURL);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
