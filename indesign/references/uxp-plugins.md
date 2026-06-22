# Advanced, Concepts, Getting Started

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Advanced topics; UXP Entry Points; Concepts; UXP Manifest; Building your first plugin; UXP Plugins.

## Advanced topics

Plugin development includes more than the material already covered. For advanced subjects, see the [resources section](uxp-resources.md), where you can find details on several topics, including:

[Figure: Folder icon](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/advanced/file.jpg)

### File I/O

[File-system data save/load recipe](uxp-recipes-2.md)

[Figure: Network icon](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/advanced/network.jpg)

### Network I/O

[Fetch internet data with network requests](uxp-recipes-3.md)

[Figure: Application window icon](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/advanced/ui.jpg)

### User Interface

[Add multiple UI elements to your plugin](uxp-resources.md)

[Figure: Ellipsis](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/advanced/more.jpg)

### And much more

[Browse the full plugin-development resource set](uxp-resources.md)

## UXP Entry Points

Plugins may expose several entry points. An entrypoint is the surface through which the plugin is invoked.

UXP recognizes two entry point categories: `commands` and `panels`.

- Commands are _"run and forget"_ entry points started by the user, for example from a menu item or keyboard shortcut.
- Panels provide a panel that the user opens from the UI, then continues to work with interactively.

The important distinction is persistence: panels can keep UI on screen, while commands run and then go away.

Both commands and panels may still display modal dialogs. A modal dialog is UI that prevents interaction with the rest of the application until the dialog closes, which makes it useful when the plugin needs user-supplied information.

[Figure: Mock up screenshot of a generic Adobe Creative cloud app with a modal dialog titled "Dialog UI" and a panel titled "Panel UI" being open](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/concepts/entry-points/ui-options.jpg)

## Concepts

Before building plugins for InDesign, learn the core ideas behind the InDesign plugin architecture. This section introduces key concepts such as entrypoints and the manifest file.

## UXP Manifest

The required manifest is a JSON file at the root of the plugin bundle. Its filename is `manifest.json`, and every plugin must include it.

### Overview

Every UXP plugin includes one `manifest.json` file describing that plugin. The file stores metadata including the plugin name, version, icons, and entry points.

The manifest also declares the permissions the plugin needs. A particularly important field is the plugin ID, because that value identifies the plugin. (Distribution through Adobe's Marketplace requires valid plugin IDs; see [plugin ID documentation](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/).)

Because UXP plugins can target multiple host applications, the manifest includes a `host` field identifying the intended host. That host data is used to recognize the plugin in both the manifest and the plugin bundle.

### Reference

### Manifest

The manifest file's top-level object.

An asterisk (\*) marks required properties.

### Example

```json
{
  "manifestVersion": 5,
  "id": "YOUR_ID_HERE",
  "name": "Name of your plugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": {
    "app": "HOST_APPLICATION",
    "minVersion": "HOST_VERSION"
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
      }
    }
  ],
  "icons": [
    {
      "width": 24,
      "height": 24,
      "path": "icons/icon.png",
      "scale": [1, 2]
    }
  ],
  "requiredPermissions": {
    "network": {
      "domains": "all"
    }
  }
}
```

An asterisk (\*) marks required properties.

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `manifestVersion` \* | `"5"` | required | `manifestVersion` records the manifest schema version; this reference covers schema version 5. |
| `id` \* | `string` | required | `id` distinguishes a plugin across plugin contexts, storage areas, error records, and similar runtime data. For marketplace distribution, this value must match the ID registered in the [Developer Distribution portal plugin ID guide](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/). |
| `name` \* | `string \| LocalizedString` | required | `name` is the visible plugin name in the interface, commonly shown in plugin menus or launchers for top-level actions. It may be a plain string, a `StringsDefinition` key, or a localized string. |
| `strings` | `StringsDefinition` | optional | String resources for localizing the plugin name and other user-facing text. Alternatively, provide a JSON-file path that holds the `StringsDefinition` object. **Default value** `{}` (no strings) |
| `version` \* | `string` | required | `version` carries the plugin version, formatted as `major.minor.patch`. |
| `main` | `string` | optional | Identifies the plugin-bundle HTML or JavaScript entry file by path from the installed plugin directory. Supported files include HTML and JS files such as `index.html` and `index.js`. Deprecation cases fall back to `main.js`. **Default value** `"main.js"` |
| `icons` | `IconDefinition[]` | optional | Icons representing the plugin as a whole or a panel icon. Host applications use these icons when presenting the plugin to users. If the icons array is absent, the host falls back to a default icon. **Default value** `[]` (no icons) |
| `host` \* | `HostDefinition` | required | The `host` object states which host versions are compatible with the plugin. Incompatible plugins will: • fail to install in that host\\• not appear in the in-app plugin marketplace for that host\\• stop being offered for updates when the update no longer matches. |
| `entrypoints` \* | `EntrypointDefinition[]` | required | Lists the entrypoints supplied by the plugin. |
| `requiredPermissions` | `PermissionsDefinition` | optional | Lists the permissions needed by this plugin. Some API surfaces require these declarations before access, and missing permissions can make API calls fail or throw errors. Certain permissions may trigger a user-consent flow. **Default value** `{}` (no permissions) |
| `addon` | `object` | optional | _Not supported in InDesign v18.5_ \\ Definitions for hybrid plugins. A UXP Hybrid plugin can access C++ native-library capabilities. **Default value** `{}` (no addons) |
| `featureFlags` | `FeatureFlags` | optional | Feature flags used to switch selected plugin features on or off. These flags gate features that are not ready for general availability. **Default value** `{}` (no additional feature flags) |

### StringsDefinition

Represents the string set used to localize the plugin name and other user-facing text.

Keys from `StringsDefinition` are valid anywhere `LocalizedString` is supported.

**Example**

Example manifest.json:

```json
{
  "name": "my-plugin",
  "strings": {
    "my-plugin": {
      "default": "My Plugin",
      "de": "Mein Plugin"
    }
  }
}
```

### LocalizedString

Represents localized text, with each locale as a key and its translated string as the value.

**Example**

```json
{
  "default": "Hello",
  "en": "Hello",
  "de": "Hallo"
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `default` \* | `string` | required | Fallback text used when the current locale has no translation. |

### IconDefinition

Describes an icon for either the plugin overall or a particular entry point. Hosts may display it in the plugin list, toolbar, or other UI locations.

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `width` \* | `number` | required | Icon width, measured in pixels. |
| `height` \* | `number` | required | Icon height, measured in pixels. |
| `path` \* | `string` | required | Icon path relative to the plugin's installation directory. PNG (`.png`), JPG (`.jpg` or `.jpeg`), and SVG (`.svg`) files are supported. |
| `scale` | `number[]` | optional | Scaling factors available for this icon. **Example** `{ "path": "icon.png", "width": 24, "height": 24, "scale": [1, 2, 2.5] }` This maps to these icon files: • `icon.png` or `icon@1x.png` (24x24px) for 100% scaling\\• `icon@2x.png` (48x48px) for 200% scaling\\• `icon@2.5x.png` (60x60px) for 250% scaling **Default value** `[1]` (only supports 100% scaling) |
| `theme` | `("all" \| "lightest" \| "light" \| "medium" \| "dark" \| "darkest")[]` | optional | Themes for which this icon is valid. **Example** `{ "path": "icon.png", "width": 24, "height": 24, "theme": ["lightest", "light"] }` **Default value** `["all"]` (supports all themes) |
| `species` | `("generic" \| "toolbar" \| "pluginList")[]` | optional | Intended placement for this icon. The default species is `generic`, so the icon can be displayed in any placement. Options: • generic: can appear anywhere\\• toolbar: use for toolbar placement; sizes are 23x23px at 100% scaling and 46x46px at 200% scaling.\\• pluginList: use for plugin-list placement; sizes are 24x24px at 100% scaling and 48x48px at 200% scaling. **Default value** `["generic"]` (suitable for display anywhere) |

### EntrypointDefinition

Describes a plugin-provided entrypoint that the user can invoke.

At minimum, an entrypoint includes an ID and a label.

**Example**

```json
{
  "id": "myPlugin.myEntrypoint",
  "label": "My Entrypoint"
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `type` \* | `"command" \| "panel"` | required | Entrypoint category. The currently supported values are `command` and `panel`. |
| `id` \* | `string` | required | Entrypoint ID. It must be unique inside the plugin and maps the entrypoint to the code that implements it. |
| `label` \* | `string \| LocalizedString` | required | User-visible entrypoint label, for example the text shown in the plugin menu. |
| `description` | `string \| LocalizedString` | optional | Longer entrypoint text for tooltips or other host-provided locations when appropriate. **Default value** `undefined` (falls back to the plugin's name) |
| `shortcut` | `{ mac: string, win: string }` | optional | Keyboard shortcut for invoking the entrypoint, declared separately for Windows and macOS. When a host application cannot use the shortcut, the host drops it. **Please note:** _Adobe XD is currently the only host listed here with keyboard-shortcut support._ **Example** `"shortcut": { "mac": "Cmd+Shift+P", "win": "Ctrl+Shift+P" }` Each platform defines shortcuts with a string using this syntax: • one or more modifier keys in any order, each followed by "+"\\• Mac: modifiers may be Cmd, Ctrl, Opt/Alt, or Shift. At least one of Cmd or Ctrl is required.\\• Win: modifiers may be Ctrl, Alt, or Shift. Ctrl is required.\\• a letter or number key. Letter case does not matter (e.g., "Cmd+P" and "Cmd+p" are equivalent, and neither implies Shift). Other keys, including punctuation, arrow keys, and F1-F12, are not currently supported. **Please note:** _When your shortcut overlaps a built-in host command or another plugin shortcut, it is skipped and a developer-console warning is printed._ **Default value** `undefined` (no shortcut) |
| `icon` | `IconDefinition[]` | optional | Entrypoint-specific icon. When provided, it replaces the plugin icon in UI locations dedicated to that entrypoint. **Default value** `[]` (plugin icon) |
| `minimumSize` | `{ width: number, height: number }` | optional | Desired minimum view size. Hosts might not guarantee the requested minimum. Width and height are specified in pixels. Without this value, the host chooses its own minimum. **Default value** (host-specific default) |
| `maximumSize` | `{ width: number, height: number }` | optional | Desired maximum view size. Hosts might not guarantee the requested maximum. In dialogs, set `minimumSize = maximumSize` to prevent resizing. **Default value** (host-specific default) |
| `preferredDockedSize` | `{ width: number, height: number }` | optional | Preferred view size while docked, when docking is possible, or for modal dialogs without `reference_node_id`. The host can decline the requested size. **Default value** (host-specific default) |
| `preferredFloatingSize` | `{ width: number, height: number }` | optional | Preferred size for a floating panel. The host can decline the requested size. Use the `minimumSize` format. **Default value** (host-specific default) |

### HostDefinition

UXP runs in several host applications. A host definition names which host app a plugin supports.

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `app` \* | `"PS" \| "ID" \| "XD"` | required | Host application supported by the plugin. Possible values: • `PS`: Adobe Photoshop\\• `ID`: Adobe InDesign\\• `XD`: Adobe XD |
| `minVersion` \* | `string` | required | Lowest supported host-app version. The version string uses the `x.y.z` format. |
| `maxVersion` | `string` | optional | Highest supported host-app version. **Default value** `undefined` (the latest version of the host app) |

### PermissionsDefinition

UXP keeps plugins secure by requiring each plugin to declare the permissions it needs.

**Pro tip**

Choose the permission that most accurately matches your use case, because future consent prompts will be based on that choice. For file operations, `fullAccess` may look like the easiest option because it is least restrictive, but users may reject installation if they are asked for full system access when it is not absolutely necessary.

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `clipboard` | `"read" \| "readAndWrite"` | optional | Grants clipboard access. The [clipboard recipe](https://raw.githubusercontent.com/resources/recipes/clipboard/index.md) includes additional examples. Possible values: • `read`: allows clipboard reads.\\• `readAndWrite`: allows clipboard reads and writes. **Default value** `undefined` (no clipboard access) |
| `localFileSystem` | `"plugin" \| "request" \| "fullAccess"` | optional | Grants file-system access. The [file-operation recipe](https://raw.githubusercontent.com/resources/recipes/file-operation/index.md) shows a detailed example. Possible values: • `plugin`: limits access to the plugin folder.\\• `request`: asks the user for file-system access.\\• `fullAccess`: allows file-system access without requesting access. **Default value** `"plugin"` |
| `network` | `NetworkPermission` | optional | Grants network access, such as HTTP requests (XHR, fetch, etc.) or loading images (`<img src="" />`). **Default value** `undefined` (no network access) |
| `webview` | `WebviewPermission` | optional | Allows webviews in plugin UI for web content or complex interface surfaces. **Default value** `undefined` (no webview usage) |
| `launchProcess` | `LaunchProcessPermission` | optional | Allows process launches through APIs such as `require("uxp").shell.openPath()` or `shell.openExternal()`. **Default value** `undefined` (no process launching) |
| `allowCodeGenerationFromStrings` | `boolean` | optional | Permits code generation from strings. Use it when relying on HTML inline event handlers, `eval()`, or `new Function()` syntax. **Default value** `false` |
| `ipc` | `IpcPermission` | optional | Allows communication with other plugins. **Default value** `undefined` |

### NetworkPermission

Lists the domains available to plugin network requests.

**Example**

```json
{
  "domains": ["https://example.com", "https://*.adobe.com/", "wss://*.myplugin.com"]
}
```

In plugin code, a network request can then be made like this:

```javascript
const response = await fetch("https://example.com");
```

Images can also be loaded this way:

```html
<img src="https://example.com/image.png" />
```

To permit every domain, set `domains` to `"all"`.

```json
{
  "domains": "all"
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` \* | `string[] \| "all"` | required | Domains available to the plugin, either as a domain list or as `"all"` for unrestricted domain access. |

The [network recipe](https://raw.githubusercontent.com/resources/recipes/network/index.md) provides additional detail.

### WebViewPermission

Allows plugin UI to include webviews for web content or complex interfaces.

**Example**

```json
{
  "allow": "yes",
  "domains": ["https://example.com"],
  "enableMessageBridge": "localAndRemote"
}
```

Plugin code can then include a webview like this:

```html
<webview src="https://example.com" />
```

Use the message API for communication between the webview and the plugin:

```javascript
// In the plugin:
const webview = document.querySelector("webview");
webview.addEventListener("message", (event) => \{
    console.log("Received message from webview:", event.data);
    webview.postMessage("Hello from the plugin!");
\});\n
// In the webview:
window.addEventListener("message", (event) => \{
    console.log("Received message from plugin:", event.data);
    window.uxpHost.postMessage("Hello from the webview!");
\});
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `allow` \* | `"yes"` | required | Set this to `"yes"` to turn webviews on. |
| `domains` \* | `string[] \| "all"` | required | Domains available to the plugin, either as a domain list or as `"all"` for unrestricted domain access. |
| `enableMessageBridge` | `"no" \| "localAndRemote"` | optional | Controls whether message API communication between the plugin and webview is available. **Default value** `"no"` |

For details, consult the [WebView API reference](https://raw.githubusercontent.com/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md), or start from the webview-starter template plugin in UDT.

### LaunchProcessPermission

Defines which schemes and extensions the plugin is allowed to launch.

For a plugin that opens a web browser, include `http` and `https` under `schemes`.

**Example**

```json
{
  "schemes": ["http", "https"],
  "extensions": []
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `schemes` \* | `string[]` | required | Schemes the plugin may launch. **Example** `["http", "https", "mailto"]` |
| `extensions` \* | `string[]` | required | Extensions the plugin may launch. Applies to local-file launches through `file://`. **Example** `["pdf", "png", "jpg"]` |

The [launch process recipe](https://raw.githubusercontent.com/resources/recipes/launch-process/index.md) provides additional detail.

### IpcPermission

Turns on inter-plugin messaging.

**Example**

```json
{
  "enablePluginCommunication": true
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `enablePluginCommunication` \* | `boolean` | required | Turns plugin-to-plugin communication on. |

The [inter-plugin communication example](https://raw.githubusercontent.com/plugins/tutorials/inter-plugin-comm/index.md) provides additional detail.

### FeatureFlags

Lists the experimental features used by the plugin.

**Example**

```json
{
  "enableFillAsCustomAttribute": true,
  "enableSWCSupport": true
}
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `enableFillAsCustomAttribute` | `boolean` | optional | Allows CSS variables in the `fill` attribute on SVG elements. **Example** ` ` CSS sample: `:root { --iconColor: blue; }` **Default value** `false` |
| `enableSWCSupport` | `boolean` | optional | Adds support for [Spectrum Web Components](https://developer.adobe.com/indesign/uxp/reference/uxp-api/reference-spectrum/swc/) after those components are installed and imported separately. **Example** `Click me` Install the library yourself, bring it in with an import such as `import '@spectrum-web-components/button/sp-button.js'`, then package the result with webpack, esbuild, or a similar bundler so it ships inside the plugin. **Default value** `false` |

## Building your first plugin

This tutorial guides you through creating your first plugin, adding a command, and running the result in InDesign.

### Prerequisites

Before beginning, verify that this software is available locally:

- **InDesign 2023 (v18.5)** or later, available through the _Creative Cloud Desktop_ app
- **UXP Developer Tool v1.9**, available through the [UXP Developer Tools download](https://creativecloud.adobe.com/apps/download/uxp-developer-tools) in the _Creative Cloud Desktop_ app
- Any preferred **code editor**, such as [Visual Studio Code](https://code.visualstudio.com/)

### Steps

### Step 1: Create a plugin

Start in the UXP Developer Tool: open the tool, then select **Create Plugin**.

A dialog appears where you provide the plugin details:

[Figure: Screenshot of the create plugin dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/getting-started/create-plugin.png)

Enter this information in the dialog:

| Field | Value |
| --- | --- |
| Name | My First Plugin |
| Host Application | Adobe InDesign |
| Host Application Version | 18.5 |
| Template | quick-starter |

Next, click **Select Folder** and pick the machine location where the plugin should be created.

The UXP Developer Tool creates a new folder using the name and location you supplied. That folder contains these files:

```
My First Plugin
├── manifest.json
├── index.html
└── index.js
```

### Step 2: Run the plugin

After creating the plugin, run it in InDesign.

Launch InDesign first. To confirm UDT is connected to the app, check the connected apps panel.

Then, in the UXP Developer Tool, use the row for your plugin and select **⋯ → Load**:

[Figure: Screenshot of the UXP Developer Tool with the load button highlighted](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/getting-started/load-plugin.png)

InDesign loads the plugin, and the plugin panel should appear there:

[Figure: Screenshot of InDesign with the plugin panel open](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/getting-started/loaded-plugin.png)

### Step 3: Make a change

With the plugin running in InDesign, customize it.

Open `index.html` in your code editor. You should see this code:

```html
<html>
  <head>
    <script src="./index.js"></script>
  </head>
  <body>
    <h1>Hello World!</h1>
    <button id="btnCreateText">Create Text</button>
  </body>
</html>
```

This HTML defines the contents of the plugin's panel. Change it however you like.

For example, change the heading so it says "My First Plugin":

```html
<h1>My First Plugin</h1>
```

Or add a paragraph under the heading:

```html
<p>This is my first plugin.</p>
```

To view your updates, reload the plugin in InDesign. In the UXP Developer Tool row for your plugin, select **⋯ → Reload**:

[Figure: Screenshot of the UXP Developer Tool with the reload button highlighted](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/getting-started/reload-plugin.png)

When `manifest.json` changes, unload and load the plugin again instead of only reloading it. In the UXP Developer Tool row for your plugin, click **⋯ → Unload** and **⋯ → Load**:

### Next steps

You have created your first plugin. Next, review the concepts that matter for plugin development.

## UXP Plugins

InDesign v18.5 adds support for UXP plugins.

Plugins let you build richer UI and interactive pieces for users. Before continuing, use the [introduction to scripts and plugins](uxp-for-adobe-indesign.md) to decide whether plugins fit your use case.

This section walks through your first plugin and explains the concepts needed to understand plugin behavior.
