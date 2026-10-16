# window.XMLHttpRequest — withCredentials : `boolean`

Use withCredentials to read whether cookie credentials accompany an HTTP request.
With the value set to true, XMLHttpRequest includes cookies; with any other value, cookies are left out.
Unlike the specification, true is the default.

## window.XMLHttpRequest — withCredentials

**Throws**:

- `DOMException` If readyState is neither UNSENT nor OPENED or send() is invoked.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```
