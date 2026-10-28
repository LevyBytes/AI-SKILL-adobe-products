# Code implementation

Your JavaScript code, such as `index.js`, runs whenever the host application invokes one of the Entrypoints. The `uxp` module exposes the `entrypoints` object, and this guide focuses on its `setup()` method.

```js
const { entrypoints } = require("uxp");
entrypoints.setup({
  /* ... */
});
```
