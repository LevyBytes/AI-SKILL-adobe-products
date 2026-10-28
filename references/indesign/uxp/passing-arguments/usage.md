# Usage

Use this pattern to retrieve the script arguments as an array:

```js
const script = require("uxp").script;
let argsArray = script.args;
```

InDesign itself cannot send arguments straight from the application interface. Direct argument passing to a script is available only through InDesign Server.
