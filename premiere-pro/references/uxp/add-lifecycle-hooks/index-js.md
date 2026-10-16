# index.js

```js
const { entrypoints } = require("uxp");
entrypoints.setup({
  plugin: {
    create() {
      console.log("Plugin create hook");
    },
    destroy() {
      return new Promise(function (resolve, reject) {
        console.log("Plugin destroy hook");
        resolve();
      });
    },
  },
  panels: {
    firstPanel: {
      // 👈 matches the panel ID from manifest.json
      create(rootNode) {
        return new Promise(function (resolve, reject) {
          console.log("Panel create hook", rootNode);
          resolve();
        });
      },
      show(rootNode, data) {
        return new Promise(function (resolve, reject) {
          console.log("Panel show hook", data);
          resolve();
        });
      },
      hide(rootNode, data) {
        return new Promise(function (resolve, reject) {
          console.log("Panel hide hook", data);
          resolve();
        });
      },
      destroy(rootNode) {
        return new Promise(function (resolve, reject) {
          console.log("Panel destroy hook", rootNode);
          resolve();
        });
      },
    },
  },
});
```
