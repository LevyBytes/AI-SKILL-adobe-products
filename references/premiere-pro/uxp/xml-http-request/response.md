# window.XMLHttpRequest - response : `string` \| `ArrayBuffer` \| `Blob` \| `Document` \| `Object`

**Read only**
Provides the response body content.
This value is null when the request has not finished yet or did not succeed.

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
