# Add Panels, Inter Plugin Comm

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add Multiple Panels; Plugin Tutorials; Inter Plugin Communication.

## Add Multiple Panels

Create a plugin that declares multiple panel entrypoints and controls their display from code.

### Overview

Many plugins use just one panel, but UXP also supports **multiple panels within the same plugin**. This helps when separate features should live in their own focused UI, such as a primary control panel plus a settings or preview panel. You'll learn how to:

- Define several panel entrypoints in a manifest
- Arrange HTML for multiple panels
- Use lifecycle hooks for panel visibility behavior
- Open one panel programmatically from another

Use the [Entrypoints guide](uxp-concepts.md) and [Lifecycle Hooks guide](uxp-tutorials.md) as background for this tutorial. If those concepts are unfamiliar, review them first. Programmatically opening a panel from another panel uses the [Inter-Plugin Communication](uxp-tutorials-2.md) tutorial, though that detail is not required just to understand multi-panel plugin creation.

### Key Concepts

A plugin can provide several panels, and each one appears as its own menu entry under **Window** > **UXP Plugins** > **ThePluginName**. Each panel:

- Has a separate entrypoint definition in the manifest
- Can define its own size limits and settings
- Uses the same HTML document and JavaScript context
- Can communicate with sibling panels in the same plugin

IPC Permission

To support communication between panels and control panels programmatically, enable the `ipc` (Inter-Process Communication) permission in the manifest.

```json
{
  // ...
  "requiredPermissions": {
    "ipc": { "enablePluginCommunication": true }
  }
  // ...
}
```

For multiple panels, attach the correct content from the `show()` [lifecycle hook](uxp-concepts.md) when a panel is displayed. This keeps UI content organized and helps each panel show only its relevant interface.

Known Limitation

In Premiere, the `hide()` lifecycle hook is **not currently working as expected**. When a panel is hidden, its `hide()` callback may not run reliably. For now, rely on `show()` to attach content and remember that cleanup inside `hide()` may not execute. A later update is expected to fix this.

### Implementation

Build a plugin with a main panel plus a second panel that the first panel can open.

[Figure: Multiple panels](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-panels/img/add-panels-panels.png)

### 1. Declare Multiple Entrypoints

Start by editing `manifest.json` so it declares two panel entrypoints. The example also enables `ipc`:

```json
{
  "id": "multi-panel-demo",
  "name": "Multi Panel Demo",
  "version": "1.0.0",
  "main": "index.html",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "manifestVersion": 5,
  "requiredPermissions": {
    // 👇 Required for inter-panel control
    "ipc": { "enablePluginCommunication": true }
  },
  "entrypoints": [
    {
      "id": "uxp-first-panel",
      "type": "panel",
      "label": { "default": "First Panel" },
      "minimumSize": { "width": 430, "height": 500 },
      "preferredDockedSize": { "width": 230, "height": 300 }
      // ...
    },
    {
      "id": "uxp-second-panel",
      "type": "panel",
      "label": { "default": "Second Panel" },
      "minimumSize": { "width": 430, "height": 500 },
      "preferredDockedSize": { "width": 230, "height": 300 }
      // ...
    }
  ]
  // ...
}
```

After this manifest change, both panels appear in **Window** > **UXP Plugins** > **Multi Panel Demo**.

### 2. Structure Your HTML

In `index.html`, add distinct wrapper containers for the panels. The second wrapper needs an `id` so JavaScript can find it later.

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <sp-heading>First Panel</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body> This is the first panel. </sp-body>
      <sp-button id="open-second-panel">Open Second Panel</sp-button>
    </div>

    <div class="wrapper" id="second-panel">
      <sp-heading>Second Panel</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body> This is the second panel. </sp-body>
    </div>
  </body>
</html>
```

**Important notes:**

- Both panels use one shared HTML document.
- Only the second `<div>` wrapper requires an `id`, because it is appended into the second panel body and needs a lookup handle.
- The first panel content already exists in the DOM and requires no special treatment.

The `<div>` wrapper `id` that contains second-panel content may differ from the second panel's `id` in `manifest.json`.

### 3. Implement Lifecycle Hooks

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

### How It Works

Key mechanisms:

### 1. Shared HTML Context

The two panels are backed by the same `index.html` document. Opening either entry from the **Window** menu makes Premiere load that shared HTML file; the panel lifecycle hooks determine which content is actually displayed.

### 2. Dynamic Content Appending

The **`show()` lifecycle hook** is passed the panel `body`, which is the root node. For the second panel, `body.appendChild(secondPanel)` adds that panel's markup into the DOM only when it is shown, so its UI remains out of view until the display hook runs.

### 3. Programmatic Panel Control

Use `pluginManager` to inspect loaded plugins, including the related tutorial at [here](uxp-tutorials-2.md). After locating the current plugin by the stored `PLUGIN_ID`, `showPanel()` can be called to display the second panel by code:

```javascript
const me = [...pluginManager.plugins].find((plugin) => plugin.id === PLUGIN_ID);
me?.showPanel("uxp-second-panel"); // Opens the panel by entrypoint ID
```

The API supports programmatic panel opening, but not programmatic closing. Closing still has to be done by the user in the Premiere UI.

### 4. Inter-Panel Communication

Because both panels execute inside one JavaScript context, they can coordinate through shared variables, function calls, and events.

### Use multiple HTML files

Another valid structure is to give each panel its own HTML file. This keeps panel-specific markup separate instead of crowding the primary `index.html`; the pattern is to `fetch()` the second panel file and place its HTML into the DOM.

[Figure: Multiple panels](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-panels/img/add-panels-panels.png)

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <sp-heading>First Panel</sp-heading>
      <sp-divider size="L"></sp-divider>
      <sp-body> This is the first panel. </sp-body>
      <sp-button id="open-second-panel">Open Second Panel</sp-button>
    </div>

    <div class="wrapper" id="second-panel"></div>
  </body>
</html>
```

### second-panel.html

```html
<sp-heading>Second Panel</sp-heading>
<sp-divider size="L"></sp-divider>
<sp-body> This is the second panel. </sp-body>
```

### main.js

```javascript
const { entrypoints, pluginManager } = require("uxp");

// Get reference to the second panel container
const secondPanel = document.querySelector("#second-panel");

// Fetch the second panel's HTML file and inject the content into the DOM
fetch("./second-panel.html") // 👈
  // Convert the response to text                         // 👈
  .then((response) => response.text()) // 👈
  // Set the content of the second panel container        // 👈
  .then((html) => {
    // 👈
    secondPanel.innerHTML = html; // 👈
    // Add event listeners for the second panel here      // 👈
    // or any other JavaScript code you need              // 👈
    // ...                                                // 👈
  }); // 👈

let PLUGIN_ID;
entrypoints.setup({
  /* ... */
});

// Everything else is the same as in the previous example...
```

### manifest.json

```json
{
  "id": "multi-panel-demo",
  "name": "Multi Panel Demo",
  "version": "1.0.0",
  "main": "index.html",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "manifestVersion": 5,
  "requiredPermissions": {
    // 👇 Required for inter-panel control
    "ipc": { "enablePluginCommunication": true }
  },
  "entrypoints": [
    {
      "id": "uxp-first-panel",
      "type": "panel",
      "label": { "default": "First Panel" },
      "minimumSize": { "width": 430, "height": 500 },
      "preferredDockedSize": { "width": 230, "height": 300 }
      // ...
    },
    {
      "id": "uxp-second-panel",
      "type": "panel",
      "label": { "default": "Second Panel" },
      "minimumSize": { "width": 430, "height": 500 },
      "preferredDockedSize": { "width": 230, "height": 300 }
      // ...
    }
  ]
  // ...
}
```

Although this sample stays intentionally small, the same approach becomes useful once a panel's implementation starts getting more involved.

### Summary

Multiple panels let a larger plugin be split into separate, purpose-built interfaces, with each surface available to users on its own.

**Key Takeaways:**

1. **Declare multiple entrypoints** in `manifest.json`; each one should use `type: "panel"` for a panel entry.
2. **Structure the HTML with wrappers**: Add `id` attributes where a panel needs to be targeted or controlled dynamically.
3. **Use the `show()` hook** to place panel markup into the DOM at display time. When possible, pair it with `hide()` so hidden panels remove their added content.
4. **Use `pluginManager.showPanel()`** to display another panel from the current one in code; IPC permissions must be enabled. This mechanism opens panels only and does not close them.

## Plugin Tutorials

Guided walkthroughs for typical UXP plugin development work

### What you will learn

[UDT Deep Dive](uxp-udt-deep-dive.md)

Learn how the Adobe UXP Developer Tool supports plugin creation, loading, testing, and iteration

[Add Lifecycle Hooks](uxp-tutorials.md)

Handle plugin and panel lifecycle events with initialization and cleanup behavior

[Add Commands](uxp-tutorials.md)

Add Premiere menu entries that run code from the plugin

[Add Multiple Panels](uxp-tutorials-2.md)

Build plugins that expose several panel entrypoints and manage when those panels appear

[Add Modal Dialogs](uxp-add-modal-dialogs.md)

Use modal dialogs for Commands UI or as supplemental interfaces launched from Panels

[Inter Plugin Communication](uxp-tutorials-2.md)

Allow one plugin to exchange requests with other plugins that are installed

### Other resources

For material outside Plugins and broader UXP development coverage, see the [Resources section](uxp-recipes-2.md).

## Inter Plugin Communication

UXP supports messaging between plugins that are installed in the same application

This is useful when a different installed plugin already performs the operation you need; your plugin can call into it rather than rebuilding the same behavior. For a good user experience, make the dependency clear to users.

### Overview

The **Plugin Manager** module supplies the APIs used to make the connection. Before working through the sample, review these related topics:

- [Plugin Entrypoints](uxp-concepts.md)
- [Manifest Permissions](uxp-manifest.md)

You also need enough knowledge about the target plugin to call it correctly, including:

- Its `id` and `entrypoints`
- The argument structure expected by the target, when arguments are required.

### Implementation

The two plugins are named **Requester** and **Responder** here.

### Requester

The Requester is the plugin that starts communication with the Responder. Its `manifest.json` file **must have** [`enablePluginCommunication`](uxp-manifest.md) set to `true`.

```json
{
  // ...
  "requiredPermissions": {
    "ipc": { "enablePluginCommunication": true }
  }
  // ...
}
```

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

### Responder

The Responder receives the calls sent by the Requester plugin. It does not require extra manifest permissions, but any `command` entrypoints that the Requester invokes have to be declared in `manifest.json`.

```json
{
  // ...
  "entrypoints": [
    {
      "id": "simplePanel",
      "type": "panel",
      "label": { "default": "Main Panel" }
      // ...
    },
    {
      "id": "simpleCommand",
      "type": "command",
      "label": { "default": "Simple Command" }
    },
    {
      "id": "commandWithInput",
      "type": "command",
      "label": { "default": "Command With Input" }
    }
  ]
  // ...
}
```

Implement those commands in `index.js` as well. The [Add Commands](uxp-tutorials.md) tutorial has additional details.

### Example

In this sample, one Requester button makes three calls into the Responder plugin:

- display the Responder panel
- run the Responder `simpleCommand` entrypoint
- run the Responder `commandWithInput` entrypoint while supplying a payload

The Responder plugin writes those incoming requests into the body of its panel.

[Figure: Inter Plugin Communication](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/inter-plugin-comm/img/ipc-requester-responder.png)

### Requester code

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <sp-heading>Requester Plugin</sp-heading>
    <sp-divider></sp-divider>
    <div class="main-div">
      <sp-body id="plugin-body">
        <sp-button id="btnCommunicate"> Communicate with Responder Plugin </sp-button>
      </sp-body>
    </div>
  </body>
</html>
```

### style.css

```css
body {
  padding: 16px;
  color: white;
}

sp-divider {
  margin-bottom: 20px;
}

sp-heading {
  color: var(--uxp-host-text-color-secondary, white);
}
```

### index.js

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

### manifest.json

```json
{
  "id": "Test-requester",
  "name": "Requester",
  "shortname": "3pstarterplugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "manifestVersion": 5,
  "requiredPermissions": {
    "localFileSystem": "request",
    "clipboard": "readAndWrite",
    "ipc": { "enablePluginCommunication": true }
  },
  "entrypoints": [
    {
      "id": "starterpanel",
      "type": "panel",
      "minimumSize": { "width": 430, "height": 500 },
      "maximumSize": { "width": 2000, "height": 2000 },
      "preferredDockedSize": { "width": 230, "height": 300 },
      "preferredFloatingSize": { "width": 400, "height": 300 },
      "label": { "default": "PremierePro IPC Panel" },
      "icons": [
        {
          "width": 23,
          "height": 23,
          "path": "icons/dark.png",
          "scale": [1, 2],
          "theme": ["darkest", "dark", "medium"]
        },
        {
          "width": 23,
          "height": 23,
          "path": "icons/light.png",
          "scale": [1, 2],
          "theme": ["lightest", "light"]
        }
      ]
    }
  ],
  "icons": [
    {
      "width": 48,
      "height": 48,
      "path": "icons/plugin-icon.png",
      "scale": [1, 2],
      "theme": ["darkest", "dark", "medium", "lightest", "light", "all"],
      "species": ["pluginList"]
    }
  ]
}
```

### Responder code

### index.html

```html
<!doctype html>
<html>
  <head>
    <script src="main.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <sp-heading>Responder Plugin</sp-heading>
    <sp-divider></sp-divider>
    <div class="main-div">
      <sp-body id="plugin-body"> </sp-body>
    </div>
    <footer>
      <sp-button id="clear-btn">Clear messages</sp-button>
    </footer>
  </body>
</html>
```

### style.css

```css
body {
  color: white;
  padding: 16px;
}

sp-divider {
  margin-bottom: 20px;
}

li:before {
  content: "• ";
  width: 3em;
}

#plugin-body {
  color: var(--uxp-host-text-color-secondary, white);
  height: 220px;
  margin-top: 5px;
  border: 1px solid #808080;
  border-radius: 4px;
  padding: 16px;
  overflow: scroll;
}

sp-heading {
  color: var(--uxp-host-text-color-secondary, white);
}

footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

footer > * {
  margin: 5px;
}

footer div {
  margin-bottom: 1em;
  width: 100%;
}

.main-div {
  position: relative;
}

.clear-btn {
  display: none;
  position: absolute;
  top: 10px;
  right: 6px;
  cursor: pointer;
}

.main-div:hover .clear-btn {
  display: inline;
}
```

### index.js

```js
//global objects.
const { entrypoints } = require("uxp");

entrypoints.setup({
  commands: {
    simpleCommand: () => doThing(),
    commandWithInput: (args) => doThing(args),
  },
  panels: { simplePanel: { show(rootNode) {} } },
});

// Log messages to the panel's body
function logToPanel(msg) {
  const bodyElement = document.getElementById("plugin-body");
  const message =
    msg === undefined
      ? `Generic message from Requester Plugin <br />`
      : `<span>Custom message from Requester Plugin: ${msg}</span><br />`;
  bodyElement.innerHTML += message;
}

// Commands handler
function doThing(args) {
  console.log("payload", args);
  // Pass a payload (if any) to the panel
  logToPanel(args && args.data[0]);
}

// Clear the panel's body
document.getElementById("clear-btn").addEventListener("click", () => {
  const bodyElement = document.getElementById("plugin-body");
  if (bodyElement) {
    bodyElement.innerHTML = "";
  }
});
```

### manifest.json

```json
{
  "id": "Test-responder",
  "name": "Responder",
  "shortname": "3pstarterplugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "manifestVersion": 5,
  "entrypoints": [
    {
      "id": "simplePanel",
      "type": "panel",
      "minimumSize": { "width": 430, "height": 500 },
      "maximumSize": { "width": 2000, "height": 2000 },
      "preferredDockedSize": { "width": 230, "height": 300 },
      "preferredFloatingSize": { "width": 400, "height": 300 },
      "label": { "default": "Main Panel" },
      "icons": [
        {
          "width": 23,
          "height": 23,
          "path": "icons/dark.png",
          "scale": [1, 2],
          "theme": ["darkest", "dark", "medium"]
        },
        {
          "width": 23,
          "height": 23,
          "path": "icons/light.png",
          "scale": [1, 2],
          "theme": ["lightest", "light"]
        }
      ]
    },
    {
      "id": "simpleCommand",
      "type": "command",
      "label": {
        "default": "Simple Command"
      }
    },
    {
      "id": "commandWithInput",
      "type": "command",
      "label": {
        "default": "Command With Input"
      }
    }
  ],
  "icons": [
    {
      "width": 48,
      "height": 48,
      "path": "icons/plugin-icon.png",
      "scale": [1, 2],
      "theme": ["darkest", "dark", "medium", "lightest", "light", "all"],
      "species": ["pluginList"]
    }
  ]
}
```

### Additional notes

- Missing entrypoints may not produce an obvious error. Prefer checking `plugin.manifest.commands` and `plugin.manifest.panels` so your code chooses from the entrypoints that actually exist.
  A user can disable an individual plugin in the Adobe Creative Cloud Desktop App. Verify availability with `plugin.enabled` before attempting to invoke it.
- Payload objects cannot include methods.
- Cross-application communication is not available; for example, Premiere to Photoshop is not supported.

### Summary

Inter-plugin communication lets UXP plugins in Adobe Premiere call commands and display panels that belong to other installed plugins.

**Key Concepts:**

1. **Requester plugin**: This plugin starts the exchange and needs `enablePluginCommunication: true` in `manifest.json`.
   - **Plugin Manager**: Use `pluginManager.plugins` to locate installed plugins and keep a reference to the target by `id`.
   - **Communication methods**: Call `invokeCommand()` for command execution and `showPanel()` when the target plugin's panel should be shown.
2. **Responder plugin**: This plugin handles incoming requests, declares the relevant entrypoints in its manifest, needs no special permission, and implements those entrypoints in code.
