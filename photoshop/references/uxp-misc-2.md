# Manifest V5, Network Io, Plugin Icons, Spectrum Css ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: UXP Manifest v5; Network I/O; Icons for Your Plugins; Spectrum CSS; UXP Toolchain.

## UXP Manifest v5

Manifest v5 adds a newer plugin permissions model and permits WebViews inside modal dialogs. The complete manifest v5 capability set requires PS 23.3.0 or later. (UXP 6.0 or higher)

To move a plugin onto the newest manifest feature set, update the `manifestVersion` element.

```json
"manifestVersion": 5
```

### Example manifest

```json
{
  "manifestVersion": 5,
  "id": "YOUR_ID_HERE",
  "name": "Name of your plugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": {
    "app": "PS",
    "minVersion": "23.3.0"
  },
  "entrypoints": [
    {
      "type": "command",
      "id": "commandFn",
      "label": {
        "default": "Show A Dialog"
      }
    },
    {
      "type": "panel",
      "id": "panelName",
      "label": {
        "default": "Panel Name"
      },
      "minimumSize": { "width": 230, "height": 200 },
      "maximumSize": { "width": 2000, "height": 2000 },
      "preferredDockedSize": { "width": 230, "height": 300 },
      "preferredFloatingSize": { "width": 230, "height": 300 },
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
      "width": 23,
      "height": 23,
      "path": "icons/icon_D.png",
      "scale": [1, 2],
      "theme": ["dark", "darkest"],
      "species": ["generic"]
    },
    {
      "width": 23,
      "height": 23,
      "path": "icons/icon_N.png",
      "scale": [1, 2],
      "theme": ["lightest", "light"],
      "species": ["generic"]
    }
  ],
  "requiredPermissions": {
    "network": {
      "domains": ["https://adobe.com"]
    },
    "clipboard": "readAndWrite",
    "webview": {
      "allow": "yes",
      "domains": ["https://*.adobe.com", "https://*.google.com"]
    },
    "launchProcess": {
      "schemes": ["https", "slack"],
      "extensions": [".xd", ".psd"]
    }
  }
}
```

### Changes to top-level metadata

For the v5 upgrade, top-level metadata is one place where key behavior changed. Read [manifest v4](uxp-misc.md) for details about the individual fields.

| Key path | Type | Description | Change |
| --- | --- | --- | --- |
| `version` | string | Version number of your plugin in `x.y.z` format. | Plugins can specify semver format with no warnings. Specify at least one number and the minor and/or patch will be autofilled with zeroes. `requiredPermissions` object Declare [plugin permissions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/uxp-guide/uxp-misc/manifest-v5/index.md#plugin-permissions). New in v5. |
| `entrypoints` | `EntryPointDefinition[]` | Describes the entries your plugin adds to the _Plugins_ menu and plugin panel. | v5 changes in next section. ### Updates to Entrypoints methods With manifest v4: _ Entrypoint methods could not use promise-based implementations. _ Entrypoint methods had no timeout. _ Every panel entrypoint received only one argument, `event`, carrying `node`, `panel`, `eventName` and `PanelID`. Manifest v5 adds lifecycle events that help manage the plugin, and it gives panels more control over their initial view and placement: _ UXP honors promises returned by most entrypoint methods. _ **Plugin entrypoints**: Promise support applies to plugin `destroy`. _ **Panel entrypoints**: Promise support applies to panel `create`, `show`, `destroy`, `hide`. _ At present, panel `show` is bound to plugin `create`, while panel `hide` is bound to plugin `destroy`. _ Entrypoint methods have a 300 millisecond timeout. _ Panel entrypoints receive `rootNode` as argument one; for `show` and `hide`, `data` is passed as argument two. ### entrypoints.setup() using promises `js entrypoints.setup({ plugin: { create() { console.log("Plugin has been loaded, plugin.create has been triggered."); }, destroy() { return new Promise(function (resolve, reject) { console.log("Plugin has been loaded, plugin.create has been triggered."); resolve(); }); } }, panels: { panelA: { create(rootNode) { return new Promise(function (resolve, reject) { console.log("PanelA is created, panelA.create has been triggered."); resolve(); }); }, show(rootNode, data) { return new Promise(function (resolve, reject) { console.log("PanelA is about to be displayed,  panelA.show has been triggered with data ", data); resolve(); }); }, hide(rootNode, data) { return new Promise(function (resolve, reject) { console.log("PanelA is about to be hidden,  panelA.hide has been triggered with data ", data); resolve(); }); }, destroy(rootNode) { return new Promise(function (resolve, reject) { console.log("PanelA is about to be destroyed,  panelA.destroy has been triggered."); resolve(); }); }, invokeMenu(menuId) { return new Promise(function (resolve, reject) { console.log("A menu item on PanelA has been invoked,  panelA.invokeMenu has been triggered with menu id ", menuId); resolve(); }); }, menuItems: [...] }, "panelB": {..} }, commands: { "command1": { run() {..}, cancel() {..} }, "command2": function(){..} } }); ` ### Plugin Permissions Plugins on Manifest v5 gain stronger security through the newer permissions model. When a plugin tries to use `openExternal`, `openPath`, or `sp-link`/anchor tags, the user is asked at runtime for consent. Other permissions are approved during installation. From v5 onward, the manifest must explicitly declare a permission or the plugin does not receive it by default. ### Network For network use, declare the domains the plugin will contact. Add the network object under the manifest's requiredPermissions section. `json { "requiredPermissions": { "network": { "domains": [ "https://source.unsplash.com", ] } } } ` `html <img src='https://source.unsplash.com/random'> ` ### Clipboard Read and/or write access to the system clipboard is granted through `requiredPermissions`. `clipboard` accepts: _ `readAndWrite`: enables both clipboard reading and writing. _ `read`: enables reading only. `json { "requiredPermissions": { "clipboard": "readAndWrite" } } ` `js const clipboard = navigator.clipboard; const dataTransferProviders = { 'text/plain': 'Sample text' }; clipboard.writeText(dataTransferProviders).then( (result) => {...}, (error) => {...} ); ` ### Local Filesystem The `localFileSystem` permission governs access to the user's local file system. Without it, the plugin can use only the default locations `plugin://`, `plugin-temp://`, and `plugin-data://`; it has no other user file-system access. `localFileSystem` accepts: _ `request`: Grants local file-system access through picker dialogs for opening and saving files. _ `plugin`: Limits access to the plugin's own storage. _ `fullAccess`: Grants inspection, modification, and deletion rights for accessible files across every volume attached to this device. The user must approve it before installing or updating the plugin. `json { "requiredPermissions": { "localFileSystem": "request" } } ` `js const fs = require('uxp').storage.localFileSystem; const file = await fs.getFileForSaving('manifest_demo.txt'); await file.write('Manifest v5 demo'); ` When plugin storage does not explicitly specify `plugin`, the manifest uses that setting as the default. ### Launch Process In the manifest, `launchProcess` controls whether the plugin may start applications and open files in other applications. Manifest v5 requires `launchProcess` before `openExternal` or `openPath` can be used. `json "permissions": { "launchProcess": { // allows launching files with specified URI schemes "schemes": [ "https", "slack", "adbxd" ], // allows opening files with the specified file extensions "extensions": [ ".pdf", ".xd", ".psd" ], }, } ` This permission set is required by both `openPath` and `openExternal`. When either function is called, Photoshop shows a runtime consent dialog, and the API call proceeds only after the user agrees. ### Plugin communication When enabled, the plugin may communicate with other installed plugins. The default is `false`. `json "requiredPermissions": { "ipc": { "enablePluginCommunication": true } } ` `js const { pluginManager } = require("uxp"); // find the Alchemist plugin in the loaded plugins const alchemistPlugin = Array.from(pluginManager.plugins).find(plugin => plugin.id==="2bcdb900"); //What commands and panels are available? const alchemistCommands = Array.from(alchemistPlugin.manifest.commands, command => command.commandId); // result: ["resetStateFn"] const alchemistPanels = Array.from(alchemistPlugin.manifest.panels, command => command.panelId); // result: ["inspector"] // Show the inspector panel; note that panels can only be made visible -- you can't ask to hide the panel alchemistPlugin.showPanel("inspector"); // Reset Alchemists state... but be sure you want to do this! alchemistPlugin.invokeCommand("resetStateFn"); ` ### WebViews UXP 6.0 provides WebViews, and they must be configured by a plugin that uses manifest v5. Manifest snippet: `json { "manifestVersion": 5, "requiredPermissions": { "webview": { "allow": "yes", // domains --> string[] "all" "domains": [ "https://*.adobe.com", "https://*.google.com"], } } } ` Plugin code: `html <dialog> <webview id="webview" width="100%" height="360px" src="https://www.adobe.com"></webview> </dialog> ` `js document.querySelector("dialog").showModal(); ` [Figure: Webview](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/uxp-guide/uxp-misc/manifest-v5/webview-example.png) ### Limitations For now, WebViews work only inside modal dialogs. ### GUID Photoshop v25.1 or UXP v7.3 exposes this capability for identifying a Creative Cloud User. Manifest snippet: `json "requiredPermissions": { "enableUserInfo": true } ` Plugin code: `js let userId = require('uxp').userInfo.userId(); // Get the GUID of user console.log(userId); ` ## Network I/O Many plugin workflows need network access for fetching data, sending data, browsing remote resources, synchronizing content, and similar tasks. XD provides a capable network stack. UXP includes support for `fetch`, `XHR` (XML HTTP Request), and `WebSockets`. Among those options, `fetch` is usually the simplest to work with. ## Icons for Your Plugins Icons appear in two separate places. The plugin-level icon, outside the entrypoints, appears in the "Plugins panel". Photoshop applies some automatic treatment to that icon, and its size is 24x24, or 48x48 at 2x. By contrast, a panel icon inside `entrypoints` appears in toolbars when the panel is minimized, and Photoshop does not add extra treatment. The required size is 23x23, or 46x46, transparency is allowed, and the icon should track the Ps theme when visual consistency with other tools and panel icons matters. A plugin may include several panels, and each panel needs an icon that users can tell apart when choosing which panel to show. Panel icons are declared inside an `entrypoint` object in the manifest. These panel icons are needed in addition to the plugin-wide `icons` array at the root of `manifest.json`. ### Quick Start To add icons to a plugin, use this workflow: 1. Build each icon with a margin. For a 32x32 1x asset, for example, draw the icon itself at 23x23 and leave a small border so rendering works well. Larger assets are allowed, although they may appear blurrier. Apply comparable margins to the other sizes. 2. Export two scale variants for the icon assets: @1x and @2x. `pluginIcon@1x.png [note the "@1x" suffix] pluginIcon@2x.png` 3. For the manifest entry, use the following form. This example assumes the exported icons above were placed in the plugin's "icons" folder; that folder is not required, but it keeps the project organized. `json "icons": [ { "width": 23, "height": 23, "path": "icons/pluginIcon.png", "scale": [1, 1.25, 1.5, 2], "theme": ["darkest", "dark", "light", "lightest", "all"] } ] ` In current Ps behavior, width and height set the icon size that Photoshop uses, not the pixel resolution of the underlying asset. Values other than 23x23 are likely to render badly. After this setup, the plugin icon should appear inside Photoshop. It will not appear in the Plugin Panel, and that limitation is intentional. ### Supporting Themes Photoshop has multiple themes, so an icon can be designed to respond to them. The refreshed samples include icons that match the active theme. Compared with a single-icon setup, theme support adds a second icons entry and another file set. For example: `json "icons": [ { "width": 23, "height": 23, "path": "icons/dark.png", "scale": [ 1, 2 ], "theme": [ "darkest", "dark ] }, { "width": 23, "height": 23, "path": "icons/light.png", "scale": [ 1, 2 ], "theme": [ "lightest", "light" ] } ] ` |

In this setup, Photoshop selects the "dark.png" icons while a dark theme is active, and selects "light.png" while a light theme is active.

You should seriously consider theme support for plugin icons, because skipping it can create poor contrast under some themes.

### Supporting multiple panels

Plugins may include multiple panels, and every panel can define a distinct icon. To do that, add an icons entry to the plugin's entrypoint and override the top-level icons entry. For example:

```json
 "entrypoints": [
       {
           "type": "panel",
           "id": "runPanel",
           "icons": [
               {
                   "width": 23, "height": 23, "path": "icons/run-dark.png", "scale": [ 1, 2 ],
                   "theme": [ "darkest", "dark" ]
               }, {
                   "width": 23, "height": 23, "path": "icons/run-light.png", "scale": [ 1, 2 ],
                   "theme": [ "lightest", "light" ]
               }
           ]
       }
   ],
   "icons": [
       {
           "width": 23, "height": 23, "path": "icons/plugin-dark.png", "scale": [ 1, 2 ],
           "theme": [ "darkest", "dark" ]
       }, {
           "width": 23, "height": 23, "path": "icons/plugin-light.png", "scale": [ 1, 2 ],
           "theme": [ "lightest", "light" ]
       }
   ]
```

In that example, the runPanel panel displays its own icon.

> Provide a separate icon for every supported panel. Without one, users may not quickly identify the panel they are opening.

## Spectrum CSS

Adobe's design system has an open-source CSS implementation, [Spectrum CSS](https://opensource.adobe.com/spectrum-css/), used across several applications.

> For immediate Spectrum CSS setup, open the [Spectrum CSS README](https://github.com/adobe/spectrum-css/blob/main/README.md) for installation instructions.

Where practical, plugin UIs should use Spectrum-based controls. That keeps plugins visually consistent, and Adobe applications' native controls are expected to move toward Spectrum CSS over time.

Spectrum controls also give the plugin theme awareness with little extra work. When the user switches between light and dark themes, the plugin does not need custom wiring for every appearance change.

Within UXP, Spectrum CSS supplies UI components for a consistent look and feel both inside one application and across cross-platform, cross-application plugins.

Spectrum CSS is "pure" CSS; using it does not require JavaScript or other code.

## UXP Toolchain

UXP plugin projects use modern JavaScript, and their interfaces are built from supported HTML/CSS portions. Additional detail is in [Technology Stack](uxp-misc.md).

### Tools for Development

### A Basic Toolchain

To build a plugin based on UXP, gather these software pieces:

- A capable text editor. Any modern editor aimed at developers should be suitable. Many developers use [Visual Studio Code](https://code.visualstudio.com) because it integrates deeply with the other UXP-related tools and offers many plugins for formatting code, checking syntax, parsing JSON, and similar tasks.

- The [UXP Developer Tool](uxp-guides-2.md) is a GUI for loading, unloading, and debugging plugins. It also builds the `.ccx` files used when distributing the plugin to other people.

- When using the UXP CLI, a command-line environment is required. On macOS, the Terminal app is fine; on Windows, the Windows Command Prompt works. VS Code also includes a convenient built-in terminal. Many other command-line interpreters exist on both platforms, including Windows PowerShell. For plugins that do not use React, this may not matter.

[A step-by-step Photoshop UXP plugin creation walkthrough](uxp-guides-2.md) is available.

### Advanced Toolchain

If you use the UXP Developer Tool with plain JavaScript rather than React, the following tools are probably unnecessary.

- [Node.js](https://nodejs.org/en/): a JavaScript runtime environment. Web projects often use it on the backend. For UXP, it acts as an engine that helps manage plugin installation from a command-line environment.

- [npm](https://www.npmjs.com): a "package manager" included with Node. It manages project dependencies, meaning the other code and files needed for the plugin to function. If your plugin is bare HTML/CSS/js, npm is likely not needed.

- [yarn](https://yarnpkg.com): a Node package manager that positions itself as a "better" alternative to npm. Many developers, including Photoshop UXP tool builders, select yarn rather than npm.

### Installing the Tooling

- **UXP Developer Tool for macOS and Windows** - Installation and launch steps are in [the UXP Developer Toolkit instructions](uxp-guides-2.md).

- **Node.js** - Visit the [Node.js download page](https://nodejs.org/en/download/), choose the installer for the appropriate platform, and run it. npm is added by the same installer.

- **yarn**: Install npm first, as noted above. Then run this command:

  ```bash
  npm install yarn --global
  ```

### Intellectual Toolchain

Before building a plugin, make sure you are comfortable with modern JavaScript. Developers coming from ExtendScript who have not used recent JavaScript should understand asynchronous functions, newer syntax such as let/const versus "var", anonymous functions, arrow function expressions, and related concepts. These topics are covered by many websites and online videos.

For a plugin with a substantial UI, familiarity with [React](https://reactjs.org) is also useful.

React-based plugin projects call for basic [NodeJS](https://nodejs.org/en/) knowledge and familiarity with [npm](https://www.npmjs.com), the Node package manager. Some examples use [Yarn](https://yarnpkg.com), the npm alternative.

### Useful Utilities and Resources

### Kitchen Sink Example

This item is sample code rather than a real tool. Still, the [uxp-ui-kitchen-sink-plugin](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-kitchen-sink) is a useful catalog of controls available in UXP. Spectrum controls and native controls are both represented.

### HTML Playground

Use the [HTML Playground](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-playground) plugin to try simple HTML layouts in Photoshop through UXP's layout engine. Install it with the UXP Developer Tool before using it.

### batchPlay Logger for ExtendScript developers

Place the [ExtendScript BatchPlay logger](https://github.com/adobe-uxp/ps-es-to-uxp) jsx code in an ExtendScript project; it emits every `executeAction` and `executeActionGet` method in a format suitable for UXP's BatchPlay.
