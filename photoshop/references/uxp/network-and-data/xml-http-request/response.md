# window.XMLHttpRequest — response : `string` \| `ArrayBuffer` \| `Blob` \| `Document` \| `Object`

**Read only**
The response body content.
It is null while the request is incomplete or after an unsuccessful request.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
