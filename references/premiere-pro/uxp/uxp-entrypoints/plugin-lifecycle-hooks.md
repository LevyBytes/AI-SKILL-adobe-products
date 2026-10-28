# Plugin Lifecycle Hooks

UXP offers two Plugin-level lifecycle hooks, `create()` and `destroy()`, which run when the plugin container is created or destroyed. Define them inside the `plugin` property of the object passed to `entrypoints.setup()`.

```js
const { entrypoints } = require("uxp");
entrypoints.setup({
  plugin: {
    create() {
      console.log("Plugin created");
    },
    destroy() {
      console.log("Plugin destroyed");
    },
  },
});
```
