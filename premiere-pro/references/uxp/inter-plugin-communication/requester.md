# Requester

The Requester is the plugin that starts communication with the Responder. Its `manifest.json` file **must have** [`enablePluginCommunication`](../supporting-definitions/enable-plugin-communication.md) set to `true`.

```json
{
  "requiredPermissions": {
    "ipc": {
      "enablePluginCommunication": true
    }
  }
}
```

...

...

With `pluginManager`, the Requester can enumerate the Premiere plugins that are installed and then locate the Responder by the known `id`.

```javascript
const { pluginManager } = require("uxp");

const allPlugins = pluginManager.plugins;
const responderPlugin = Array.from(allPlugins).find((plugin) => plugin.id === "Test-responder"); // 👈 Responder id
```

Once the Responder plugin reference is stored, its `command` entrypoints can be triggered through `invokeCommand()`, and its panel can be requested through `showPanel()`. Supply the target entrypoint `id` for the command or panel being used.

```javascript
responderPlugin.invokeCommand("simpleCommand");
responderPlugin.showPanel("simplePanel");
```

Payloads

Data can be sent through `invokeCommand()`:

```javascript
const payload = { message: "From Requester" };
responderPlugin.invokeCommand("simpleCommand", payload);
```
