# Using a uxpaddon in JavaScript

After compilation, load the addon with `require()`; its exported functions can be used right away:

```js
const addon = require("sample-uxp-addon.uxpaddon");
let result = addon.first_function();
```

Use it as another JavaScript module: call functions, read properties, and exchange data with C++.
