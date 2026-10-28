# window.XMLHttpRequest - status : `number`

**Read only**
HTTP response status code.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.status);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
