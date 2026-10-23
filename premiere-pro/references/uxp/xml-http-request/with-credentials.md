# window.XMLHttpRequest - withCredentials : `boolean`

Reads the current withCredentials value. This flag controls whether cookies accompany an HTTP request.
When set to true, XMLHttpRequest includes cookies; when false, it omits them.
Unlike the specification, this implementation defaults to true.

## window.XMLHttpRequest - withCredentials

**Throws**:

- `DOMException` When readyState is not UNSENT or OPENED, or after send() has been invoked.

**Example**

```js
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```
