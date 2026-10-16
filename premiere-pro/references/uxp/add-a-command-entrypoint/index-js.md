# index.js

```js
const { entrypoints } = require("uxp");

function myCommandHandler() {
  console.log("Command invoked!");
}

entrypoints.setup({
  commands: {
    myCommand: myCommandHandler,
  },
});
```

### index.js

```js
module.exports = {
  commands: {
    myCommand: myCommandHandler,
  },
};
```
