# window.XMLHttpRequest — timeout : `number`

Milliseconds allowed for a request before it is terminated automatically.
Default value is 0, meaning no timeout is applied.

## window.XMLHttpRequest — timeout

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.adobe.com");
xhr.ontimeout = (e) => {
  console.log("xhr timed out");
};
xhr.timeout = 2000; // 2,000 milliseconds
xhr.send();
```
