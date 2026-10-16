# window.XMLHttpRequest — statusText : `string`

**Read only**
Contains the response status message.
For readyState values UNSENT or OPENED, the result is an empty string.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.statusText);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
