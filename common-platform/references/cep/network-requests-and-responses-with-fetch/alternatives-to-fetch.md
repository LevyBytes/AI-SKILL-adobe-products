# Alternatives to `fetch()`

CEP does not limit network requests to `fetch()`.

Because Chromium Embedded Framework behaves like a browser environment, `XMLHttpRequest` is available, along with client-side wrappers such as jQuery. CEP also includes Node.js, giving extensions additional network-request options.
