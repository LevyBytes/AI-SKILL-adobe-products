# Plugin communication

When enabled, the plugin may communicate with other installed plugins. The default is `false`. 

Manifest property fragment: merge into the surrounding manifest.

```json
{
  "requiredPermissions": {
    "ipc": {
      "enablePluginCommunication": true
    }
  }
}
```

 

Requires plugin communication permission and the Alchemist plugin. The final command intentionally resets Alchemist state.

```javascript
const { pluginManager } = require("uxp");
// find the Alchemist plugin in the loaded plugins
const alchemistPlugin = Array.from(pluginManager.plugins).find(plugin => plugin.id==="2bcdb900");   
if (!alchemistPlugin) throw new Error("Alchemist is not loaded.");
//What commands and panels are available?
const alchemistCommands = Array.from(alchemistPlugin.manifest.commands, command => command.commandId); // result: ["resetStateFn"]
const alchemistPanels = Array.from(alchemistPlugin.manifest.panels, command => command.panelId); // result: ["inspector"]     
// Show the inspector panel; note that panels can only be made visible -- you can't ask to hide the panel
if (alchemistPanels.includes("inspector")) {
    await alchemistPlugin.showPanel("inspector");
}
// Reset Alchemists state... but be sure you want to do this!
if (alchemistCommands.includes("resetStateFn")) {
    await alchemistPlugin.invokeCommand("resetStateFn");
}
```
