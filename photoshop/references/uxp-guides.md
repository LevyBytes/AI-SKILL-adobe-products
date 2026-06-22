# Code Samples, Debugging

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Code Samples; Debugging UXP Plugins.

## Code Samples

The sections below link to starter projects and code samples that build on those examples. They are intended to speed up early work on a Photoshop plugin idea in UXP.

Use [this GitHub repository](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples) for the complete sample set; clone or fork it from there. If you prefer a simple download and are not used to GitHub, open the link above, choose the green `Code` button, and then choose "Download ZIP."

### Theme Awareness

Photoshop includes both light and dark themes. Spectrum UXP lets your UI use Photoshop color values so the interface fits the host.

```css
body {
  background-color: var(--uxp-host-background-color);
  color: var(--uxp-host-text-color);
  border-color: var(--uxp-host-border-color);
  font-size: var(--uxp-host-font-size);
}
```

For additional information, see [Theme Awareness](https://raw.githubusercontent.com/guides/theme-awareness/index.md).

### Entrypoints

### Menu Items

For a plugin that automates a straightforward workflow, or where no user input is needed, define manifest entry points that expose commands. This style of plugin runs without a visible UI. A `"command"` entry point maps the menu click to the global-scope method in your plugin's JS file that Photoshop should invoke.

```json
"entrypoints": [
    {
      "type": "command",
      "id": "writelayers",
      "label": {
        "default": "Export Top Layers..."
      }
    }
  ]
```

```javascript
async function writelayers() {
  // This method will be called by Photoshop when user clicks "Plugins > <Your Plugin> > Export Top Layers...
}
```

The [direct-action-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/direct-action-js-sample) demonstrates this pattern by collecting the top layers from the active document, asking the user for a save location, and exporting them into that folder.

With this approach, one plugin can contain several separate capabilities.

### Panels

A plugin can show panels whose appearance and behavior match Photoshop's built in panels.

When you define an entrypoint of type `"panel"`, Photoshop performs two actions:

- Adds a menu item for the plugin using the locale-specific name from the `label` field.
- After that menu item is selected, loads the manifest's `main` field as the panel content.

The [vanilla-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/vanilla-js-sample) project shows a panel example.

```json
"entrypoints": [
    {
      "type": "panel",
      "id": "vanilla",
      "label": {
        "default": "Vanilla JS Sample"
      },
      ...
    }
  ]
```

For the complete panel entrypoint specification, consult [UXP Manifest docs](https://raw.githubusercontent.com/guides/uxp-guide/uxp-misc/manifest-v4/index.md).

### Coming Soon - One Off Scripts

For developers accustomed to ExtendScript jsx files, work is underway on one off scripts: Photoshop will be able to receive a JavaScript file, run it immediately, and then remove the temporary setup.

### UI Libraries

A basic JS/HTML/CSS plugin can work, but plugin teams dealing with internal state management or more involved interfaces may get more value from familiar UI libraries. The examples below are not the only possible choices, yet they make useful starting points when you already know the library.

No specific library is recommended for every plugin. Review the options yourself and choose what best fits your project.

### React

[React.js](https://reactjs.org/) is among the UI libraries used most often. Its declarative, component-based model helps divide an interface into reusable pieces.

The React sample project is [ui-react-starter](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-react-starter).

### Vue

[Vue.js](https://vuejs.org/) is also declarative, and it is designed to be approachable.

The Vue sample project is [ui-vue-starter](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-vue-starter).

### Svelte

[Svelte](https://svelte.dev/) takes a different route from React and Vue: it compiles your code into a compact JS application.

The Svelte sample project is [ui-svelte-starter](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/ui-svelte-starter).

### UXP Core APIs

Photoshop supplies every API under `require("photoshop")`, while UXP provides shared core capabilities across host applications, including file system access, secure storage, and web requests.

### File System Access

In UXP, a plugin can directly reach only its own plugin folder, its data folder, and a temporary folder. For any other location, the user must grant access explicitly. Details about the available APIs and folders are in [FileSystemProvider](https://raw.githubusercontent.com/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md).

The [jszip-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/jszip-sample) shows temporary folder access.

### Secure Storage

Use secure storage to persist data between sessions. All secure storage APIs are asynchronous.

```javascript
const secureStorage = require("uxp").storage.secureStorage;
const value = await secureStorage.getItem("key");
```

The [secure-storage-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/secure-storage-sample) demonstrates these APIs.

### Web Requests

UXP exposes a global `fetch` method with the same behavior as the HTML DOM `fetch` method. More detail is available in [fetch](https://raw.githubusercontent.com/uxp-api/reference-js/global-members/data-transfers/fetch.md).

The [web-service-call-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/web-service-call-js-sample) shows a plugin communicating with a web server.

### OAuth Workflows

OAuth can connect a plugin to any compatible service, enabling online features inside that plugin.

The [oauth-workflow-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/oauth-workflow-sample) demonstrates the workflow.

### Cross Compatible JavaScript

As a unified platform, UXP supports plugins that target more than one Adobe product. With `require("uxp").host`, your code can read the current host application's name and branch its behavior for that host. This lets a single plugin run across multiple applications.

The [cross-compatible-js-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/cross-compatible-js-sample) demonstrates this approach.

### External Processes

External objects such as ExtendScript are not currently supported. UXP can, however, use websockets to communicate with other applications and processes. Examples are available in [desktop-helper-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/desktop-helper-sample) and
[io-websocket-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/io-websocket-sample)

UXP also supports WebAssembly. See [wasm-rust-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/wasm-rust-sample) for an example project that compiles Rust code into WASM and runs it via the UXP plugin.

## Debugging UXP Plugins

Even when you aim to write a plugin with no bugs at all, it helps to understand the debugging tools that UXP provides.

### Debugging Tools

Two debugging routes are available. For many plugins, the easiest one is the UXP Developer Tool. Once the plugin is loaded there, use `Debug` from that plugin's Actions menu.

[Figure: Debugging Tools](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/debugging/images/devtool-ellipsis-menu.png)

If the plugin was loaded with the command-line tools instead, use [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript) with this process:

Open a new Chrome window and go to `chrome://inspect`. Next to the Discover network targets checkbox, press Configure..., then add localhost:xxxx, where "xxxx" is the port declared in your debug.json file.

After the extension loads, its ID should appear on this page.

In the Chrome debugger, enable `Pause on caught exceptions` on the right side of the `Sources` tab.

The Chrome debugger may offer more capabilities than the UXP Developer Tool, but many of them do not apply to the UXP environment. The UXP Developer Tool's main advantage is the `Watch` action: choose it from the Actions menu, and the tool reloads the plugin automatically whenever JavaScript, HTML, or CSS files change. When you want a manual refresh instead, choose `Reload` from the Actions menu.

### Why Doesn't My Plugin Work?

Suppose you have just built a UXP plugin that should change everything and make you famous, at least in a geek-culture sense. It fails anyway. What should you check?

### Manifest Problems

JSON is often easier for people to read than XML, but that does not make it effortless. A tiny error in the JSON manifest file, such as a misplaced bracket or missing comma, can stop the plugin from loading. Use a JSON linter; VS code includes one, and many others are available online as apps or website tools. The practical rule is simple: if Photoshop shows nothing, inspect the Developer Tool errors and review your `manifest.json` file carefully.

### Installation Problems

During the Photoshop UXP beta period, developers had several possible methods for placing plugins where Photoshop could locate them. Today, the approved route for adding a development plugin to Photoshop is the [UXP Developer Tool](https://raw.githubusercontent.com/guides/devtool/index.md).

### JavaScript Problems

When a JavaScript error prevents the plugin from running, the debugger console usually reports it. Error messages can hide inside cryptic stack traces, as they often have since early computing, but the useful detail is generally there; the top right of the trace usually shows the offending JavaScript line number.

### CSS Problems

The browser layer beneath UXP supports common HTML/CSS patterns for rich plugin interfaces, but some parts of those languages are unsupported, limited, or behave differently.

For some web developers, CSS troubleshooting is a major ongoing task. UXP plugins narrow the target to one "browser," which helps, but CSS bugs can still be hard to locate. One useful technique is selective refinement: comment out or remove portions of CSS definitions until a visible change appears.

The Debug window also helps: open the leftmost `Elements` menu to expand the plugin's HTML. After you select an element, the applied CSS appears in the debugger window's `Styles` area:

[Figure: Styles Tab](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/debugging/images/css-styles.png)

Compared with a browser's CSS view, the Developer Tool CSS view is less powerful; for instance, it does not allow live CSS edits. Even so, it is still very useful.

### Not Watching

The UXP Developer Tool includes a useful "watch" feature that reloads plugins automatically when nearly any file in the plugin folder changes. If you do not turn that feature on by choosing `Watch` in the Actions column, saving edits to a file will not change anything in Photoshop.

Manual plugin reloads are always available, though automatic reloads are more convenient.

### Gremlins

At times, restarting Photoshop and the UXP Developer Tool makes an issue disappear without an obvious explanation. Does that happen? Yes, it does.
