# window.XMLHttpRequest — readyState : `number`

**Read only**
The XMLHttpRequest object's state. The states are listed below.

     UNSENT(0):           Object construction is complete.
     OPENED(1):           open() has run successfully.
     `HEADERS_RECEIVED`(2): Response headers have all arrived.
     LOADING(3):          Response body data is arriving.
     DONE(4):             Transfer finished, or an error occurred while transferring.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  console.log(xhr.readyState);
};
xhr.open("GET", "https://www.adobe.com");
xhr.send();
```
