# Entrypoints

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: UXP Entrypoints; Concepts.

## UXP Entrypoints

Find out how Premiere plugins declare and implement entrypoints for commands and panels.

### Plugin Components

A UXP plugin can be made from **Commands**, which are menu items that execute code, and **Panels**, which are persistent, dockable interfaces. A plugin may use either component type, include both, and define more than one instance of each.

For more detail on how Commands and Panels differ and how to choose between them, see the [Panels and Commands concept guide](uxp-panels-and-commands.md).

### Entrypoints

In UXP, an entrypoint is the host application's route for invoking a plugin component, either a command or a panel. Treat it as a two-part contract:

- A **Manifest file** declares how many entrypoints the plugin exposes and what types they are.
- Your **JavaScript code** responds through `entrypoints.setup()` and connects each entrypoint ID to the matching implementation.

### Manifest declaration

The `manifest.json` file sits at the root of the plugin bundle and stores the plugin metadata. Among the properties described in [this reference guide](uxp-manifest.md), Entrypoints are declared in the required `entrypoints` array.

```json
{
  "manifestVersion": 5,
  "id": "test1234",
  "name": "Test Plugin",
  "version": "1.0.0",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "main": "index.html",
  "entrypoints": [
    // 👈
    {
      // 👈
      "type": "command", // 👈
      "id": "firstCommand", // 👈
      "label": { "default": "Run a Function" } // 👈
    }, // 👈
    {
      // 👈
      "type": "panel", // 👈
      "id": "firstPanel", // 👈
      "label": { "default": "First Panel" } // 👈
    } // 👈
  ] // 👈
}
```

The Manifest must declare at least one entrypoint of type [`entrypointDefinition`](uxp-manifest.md).

### Code implementation

Your JavaScript code, such as `index.js`, runs whenever the host application invokes one of the Entrypoints. The `uxp` module exposes the `entrypoints` object, and this guide focuses on its `setup()` method.

```js
const { entrypoints } = require("uxp");
entrypoints.setup({
  /* ... */
});
```

### The `entrypoints.setup()` method

Providing an implementation for `entrypoints.setup()` is optional, but strongly recommended. It can:

1. Set **lifecycle hooks at a Plugin** level.
2. Set **lifecycle hooks at a Panel** level.
3. Create **flyout menus** and connect the appropriate handlers for each Panel entrypoint.
4. Register **handlers for each Command** entrypoint.

Lifecycle hooks

Lifecycle hooks are callbacks that run automatically when particular Plugin or Panel lifecycle events occur. They are optional and can handle setup, teardown, or similar work.

Beginning with Manifest version 5, most lifecycle **handlers may be asynchronous** and can return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). See [Using Promises](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/entrypoints/index.md#using-promises) below for an example.

### Plugin Lifecycle Hooks

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

### Panel Lifecycle Hooks

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

### Command Handlers

Command handlers run when a command entrypoint is triggered by clicking Premiere **Window** > **UXP Plugins** > **`<your plugin name>`** > **`<your command name>`**.

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
document.body.addEventListener("uxpcommand" (event) => { /* ... */ });
```

### Using Promises

UXP entrypoints can use Promise support in these places:

- **Plugins**: `destroy()`.
- **Panels**: `create()`, `show()`, `destroy()`, `hide()`.

At present, `show()` is connected to `create()`, while `hide()` is connected to `destroy()`. Every method has a 300 milliseconds timeout.

```javascript
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
  commands: {
    firstCommand: commandHandler,
  },
});
```

## Concepts

Before starting plugin work, learn how UXP Plugins are organized and how they attach to Premiere.

Every UXP plugin relies on several core ideas:

- **The Manifest** - the `manifest.json` JSON file for plugin identity, capabilities, permissions, and entrypoints.
- **Entrypoints** - Premiere-facing commands and panels through which plugin functionality appears.
- **Hybrid Plugins** - a model for combining JavaScript-driven extension code with native C++ libraries.

Together, these concepts determine how the host application and users discover, load, and interact with a plugin. Knowing them helps you plan architecture, manage lifecycle events, and integrate cleanly with UXP.

Explore the following guides to learn more:

- [**Entrypoints**](uxp-concepts.md): How to declare, wire, and handle plugin panels and commands.
- [**Manifest**](uxp-manifest.md): How the `manifest.json` file is structured and configured.
- [**Hybrid Plugins**](uxp-plugins.md): How to extend plugins with high-performance C++ native libraries.
