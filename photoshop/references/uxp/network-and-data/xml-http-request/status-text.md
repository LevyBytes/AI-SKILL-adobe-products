# window.XMLHttpRequest — statusText : `string`

**Read only**
String with the response status message.
When readyState is UNSENT or OPENED for the request, the value is "".

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.statusText);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
