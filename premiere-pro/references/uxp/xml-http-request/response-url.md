# window.XMLHttpRequest — responseURL : `string`

**Read only**
Holds the response URL, or an empty string when the URL is null.
If the URL includes a fragment, that fragment is removed; after redirects, the final URL is returned.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseURL);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
