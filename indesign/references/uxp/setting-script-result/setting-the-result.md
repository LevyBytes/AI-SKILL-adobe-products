# Setting the result

This line assigns the string `"Hello World!"` as the result for the UXP script that is running.

```js
// called.idjs
const script = require("uxp").script;
script.setResult("Hello World!");
```
