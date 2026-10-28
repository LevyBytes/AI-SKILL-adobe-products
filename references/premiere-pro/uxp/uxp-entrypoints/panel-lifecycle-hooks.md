# Panel Lifecycle Hooks

Panels expose additional hooks: `create()`, `show()`, `hide()`, and `destroy()`.

Add them under the `panels` property on the object supplied to `entrypoints.setup()`.
For each `"panel"` entrypoint declared in `manifest.json`, add a matching property named with that panel ID.

```js
const { entrypoints } = require("uxp");
entrypoints.setup({
  panels: {
    firstPanel: {
      // 👈 must match the id of the entrypoint
      //    of type "panel" from manifest.json
      create(rootNode) {
        console.log("Panel created");
      },
      show(rootNode) {
        console.log("Panel shown");
      },
      hide(rootNode) {
        console.log("Panel hidden");
      },
      destroy(rootNode) {
        console.log("Panel destroyed");
      },
    },
    secondPanel: {
      /*...*/
    }, // 👈  add properties for each additional
    //    "panel" entrypoint in manifest.json
  },
});
```

Premiere does not yet run the `hide()` and `destroy()` hooks as expected. A later update is expected to correct that behavior.

Panel handlers receive `rootNode`, the HTML document root node; use it to add or remove the right container element when a plugin has multiple panels.
