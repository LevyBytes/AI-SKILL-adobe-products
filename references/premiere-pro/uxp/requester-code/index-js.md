# index.js

```js
//global objects.
const { pluginManager } = require("uxp");

document.querySelector("#btnCommunicate").addEventListener("click", communicateWithAnotherPlugin);

function communicateWithAnotherPlugin() {
  try {
    const allPlugins = pluginManager.plugins;
    const plugin = Array.from(allPlugins).find((plugin) => plugin.id === "Test-responder");
    if (plugin && plugin.enabled) {
      console.log("All commands:", plugin.manifest.commands);
      console.log("All panels:", plugin.manifest.panels);

      // Show the plugin panel
      // Note that panels can only be made visible
      // You can't ask to hide a panel
      plugin.showPanel("simplePanel");

      // Invoke the command
      plugin.invokeCommand("simpleCommand");

      // Send an payload to the command
      const payload = { message: "Stay hydrated!" };
      // Invoke the command with the payload
      plugin.invokeCommand("commandWithInput", payload.message);
    } else {
      // Prompt the user to install/enable the plugin before trying again
    }
  } catch (e) {
    console.error(e);
  }
}
```
