# Add Commands, Add Lifecycle Hooks

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add a Command Entrypoint; Add Lifecycle Hooks.

## Add a Command Entrypoint

Commands let a plugin place a menu item directly inside the Premiere user interface.

### Overview

The [Panels & Commands](uxp-panels-and-commands.md) guide explains that a command may execute any kind of code and can also open a [modal dialog UI](uxp-panels-and-commands.md) when needed.

Look for each command under its plugin in **Window** > **UXP Plugins**.

[Figure: UXP Plugins menu](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/panels-and-commands/img/entrypoints-menu-items.png)

Creating a command takes several steps.

### 1. Register a new Entrypoint

Add an Entrypoint of type `"command"` in `manifest.json`.

```json
{
  // ...
  "entrypoints": [
    {
      "type": "command",
      "id": "myCommand",
      "label": "This is a Command"
    }
  ]
}
```

A [`LocalizedString`](uxp-manifest.md) can also localize the [`label`](uxp-manifest.md) property for the command.

### 2. Associate Entrypoint and Handler

Define the command handler in `index.js`; it runs when the user selects that command in Premiere.

```js
// index.js
function myCommandHandler() {
  // The function name is not important.
  console.log("Command invoked!");
}
```

An Entrypoint can be connected to its Handler in either of these ways.

### A. Use `entrypoints.setup()`

Fill out `index.js` with this code:

### index.js

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

### manifest.json

```json
{
  // ...
  "entrypoints": [
    {
      "type": "command",
      "id": "myCommand",
      "label": "This is a Command"
    }
  ]
  // ...
}
```

The [Entrypoints concept guide](uxp-concepts.md) covers several roles for `entrypoints.setup()`, including binding commands to their handlers. Here, `myCommand` is the command Entrypoint ID registered in the manifest.

Call `entrypoints.setup()` only once; any later call throws an error. When more entrypoints are needed, register all of them together.

### B. Use `module.exports`

This approach is especially convenient for smaller plugins that contain only command entrypoints, do not rely on UIs, and therefore do not need an HTML file.

In that case, set the `main` property in `manifest.json` to the path for `index.js`. Then, in `index.js`, export an object whose `commands` property maps command IDs to their handlers.

### index.js

```js
module.exports = {
  commands: {
    myCommand: myCommandHandler,
  },
};
```

### manifest.json

```json
{
  // ...
  "main": "index.js",
  // ...
  "entrypoints": [
    {
      "type": "command",
      "id": "myCommand",
      "label": "This is a Command"
    }
  ]
  // ...
}
```

### Summary

Commands add clickable items under **Window > UXP Plugins > `<pluginName>`**. Those items can run any code and may open a modal dialog UI.

**Key Steps:**

1. **Register the entrypoint**: In `manifest.json`, add an entrypoint whose type is `command`, with both an `id` and a `label`.
2. **Create the handler**: Implement the JavaScript function that should run when the command is invoked.
3. **Associate entrypoint and handler**: Choose one of these options:
   - `entrypoints.setup()`: Recommended when a plugin uses multiple entrypoint types.
   - `module.exports`: Simpler when the plugin contains only commands.

## Add Lifecycle Hooks

Handle plugin and panel events with lifecycle hooks.

### Overview

The [Entrypoints concept guide](uxp-concepts.md) describes lifecycle hooks as callback functions that run automatically when particular Plugin or Panel lifecycle events occur. They are optional and fit setup work, teardown work, or similar lifecycle logic.

This guide applies only to **Plugins with at least one Panel**; Commands do not have related hooks. If you need to review the difference between a Command and a Panel, read [here](uxp-panels-and-commands.md).

### Hook Types

UXP defines lifecycle hooks at two scopes:

- At a **Plugin level**, the plugin container has callbacks for creation and teardown: `create()` and `destroy()`.
- At a **Panel level**, panels have callbacks for creation, display, hiding, and teardown: `create()`, `show()`, `hide()`, and `destroy()`.

See [Entrypoints concept guide](uxp-concepts.md) for more detail about hook categories.

Premiere limitations

In Premiere, the `hide()` and `destroy()` hooks do **not yet behave as expected**; a later update is planned to correct this.

For plugins that include several panels, **lifecycle hooks currently fire for all panels** and do not identify which panel caused the event.

### Implementation

Define hooks through the `entrypoints.setup()` method. The object passed to it can include these properties:

- `plugin`: An object that contains the plugin lifecycle hooks.
- `panels`: An object keyed by the panel IDs from each `"panel"` entrypoint in `manifest.json`; each value contains that panel's lifecycle hooks.

Most callbacks may return Promises, as shown below. Panel hooks are passed a `rootNode` parameter. That value is the HTML document root node, so multi-panel plugins can add or remove the right container element programmatically.

### Example

### index.js

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

### manifest.json

```json
{
  // ...
  "entrypoints": [
    {
      "type": "panel",
      "id": "firstPanel",
      "label": "My plugin",
      "minimumSize": { "width": 400, "height": 400 },
      "maximumSize": { "width": 800, "height": 800 },
      "preferredDockedSize": { "width": 400, "height": 400 },
      "preferredFloatingSize": { "width": 600, "height": 600 }
    }
  ]
  // ...
}
```

### Summary

Lifecycle hooks are callbacks that run automatically at specific plugin and panel moments, giving UXP plugins in Adobe Premiere a place for startup and cleanup work.

**Key Concepts:**

1. **Plugin-level hooks**: `create()` and `destroy()` run when the plugin container is created or destroyed.
2. **Panel-level hooks**: `create()`, `show()`, `hide()`, and `destroy()` run as panels move through their lifecycle.
3. **Implementation**: Register hooks with `entrypoints.setup()` using `plugin` and `panels` objects. Most callbacks can use Promises.
4. **Known limitations**: In Premiere, `hide()` and `destroy()` do not yet work as intended, with a fix expected in a later update. In plugins with multiple panels, lifecycle hooks currently run for every panel without indicating a specific one.
