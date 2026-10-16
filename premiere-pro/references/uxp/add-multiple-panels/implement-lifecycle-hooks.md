# 3. Implement Lifecycle Hooks

Use lifecycle hooks to append the second panel's content to the DOM when that second panel is shown. In `main.js`:

```javascript
const { entrypoints, pluginManager } = require("uxp");

// Get reference to the second panel container
const secondPanel = document.querySelector("#second-panel");
let PLUGIN_ID;

entrypoints.setup({
  plugin: {
    create() {
      // Store the plugin ID for later use
      // (IPC -> opening the second panel programmatically)
      PLUGIN_ID = this.id;
      console.log("Plugin created:", PLUGIN_ID);
    },
  },
  panels: {
    "uxp-first-panel": {
      create() {
        console.log("First panel created");
      },
      show() {
        console.log("First panel shown");
        // The first panel content is already in the DOM
        // no other action is needed.
      },
    },
    "uxp-second-panel": {
      create() {
        console.log("Second panel created");
      },
      show(body) {
        // Append the second panel content when this panel is shown
        body.appendChild(secondPanel); // 👈 Key: append on show
        console.log("Second panel shown");
      },
      hide(body) {
        // ⚠️ Note: This hook currently doesn't work reliably
        body.removeChild(secondPanel);
        console.log("Second panel hidden");
      },
    },
  },
});

// Add button handler to open the second panel via IPC
document.querySelector("#open-second-panel").addEventListener("click", () => {
  // Find this plugin in the list of all plugins
  const me = [...pluginManager.plugins].find((plugin) => plugin.id === PLUGIN_ID);
  // Open the second panel programmatically
  me?.showPanel("uxp-second-panel"); // 👈 Opens the second panel
});
```
