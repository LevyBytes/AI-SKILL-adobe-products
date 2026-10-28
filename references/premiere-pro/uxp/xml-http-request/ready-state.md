# window.XMLHttpRequest - readyState : `number`

**Read only**
Represents the current state of the `XMLHttpRequest` object. The available states are listed below.

     UNSENT(0):           The object has been created.
     OPENED(1):           open() has run successfully.
     `HEADERS_RECEIVED`(2): The response headers have all arrived.
     LOADING(3):          The response body is currently arriving.
     DONE(4):             The transfer finished, or an error occurred while transferring data.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  console.log(xhr.readyState);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
