# Command Handlers

Command handlers run when a command entrypoint is triggered by clicking Premiere **Window** > **UXP Plugins** > **`<your plugin name>`__` > **`&lt;your command name&gt;`__`.

Put command handlers under the `commands` property on the object supplied to `entrypoints.setup()`. Add one matching property for every `"command"` entrypoint in `manifest.json`, using its command ID as the property name.

```js
const { entrypoints } = require("uxp");

const commandHandler = (evt) => {
  console.log(
    "Command handler invoked!",
    evt.type, // uxpcommand
  );
};

entrypoints.setup({
  commands: {
    firstCommand: commandHandler, // 👈 must match the id of the
    // entrypoint of type "command"
    // from manifest.json
  },
});
```

The handler receives one event argument of type `uxpcommand`. If needed, listen for it at the `<body>` element level.

```javascript
document.body.addEventListener("uxpcommand", (event) => { /* ... */ });
```
