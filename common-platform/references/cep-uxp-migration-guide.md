# Uxp Migration Guide

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

This technical guide is for CEP (Common Extensibility Platform) developers who need practical migration details for moving extensions to UXP (Unified eXtensibility Platform). Moving an extension over can be difficult, but later plugin development work benefits from the newer platform.

- [CEP to UXP Technical Migration Guide](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#cep-to-uxp-technical-migration-guide)
  - [Why migrate to UXP?](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#why-migrate-to-uxp)
    - [Developer Tooling](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#developer-tooling)
    - [Plugin Types](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#plugin-types)
  - [UXP Plugin Development](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#uxp-plugin-development)
    - [Entrypoint Setup](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#entrypoint-setup)
    - [User Interface](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#user-interface)
  - [Migrating Native CEP Functions](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#migrating-native-cep-functions)
    - [Directory and File I/O Operations (File APIs)](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#directory-and-file-io-operations-file-apis)
    - [Encoding API](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#encoding-api)
    - [Opening Remote Resources](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#opening-remote-resources)
    - [Process APIs](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#process-apis)
  - [Migrating CEP JavaScript Libraries](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#migrating-cep-javascript-libraries)
    - [Vulcan Interface: Communicating across plugins within Photoshop](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#vulcan-interface-communicating-across-plugins-within-photoshop)
    - [CS APIs: Communicating with your plugin and with Photoshop](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#cs-apis-communicating-with-your-plugin-and-with-photoshop)
      - [Use Case: API Version](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-api-version)
      - [Use Case: Sending/Receiving Events](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-sendingreceiving-events)
      - [Use Case: Network Access](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-network-access)
      - [Use Case: Customizing Menus](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-customizing-menus)
      - [Use Case: Theme Support](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-theme-support)
      - [Use Case: Localization](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-localization)
      - [Use Case: Keyboard Events](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-keyboard-events)
      - [Use Case: Adjusting Plugin Size](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#use-case-adjusting-plugin-size)
  - [Migrating ExtendScript/EvalScript to the Photoshop DOM API](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/README.md#migrating-extendscriptevalscript-to-the-photoshop-dom-api)

M1 devices can run CEP natively for every application except Photoshop. CEP extensions still run natively on Windows, and they can run on M1 Macs when Photoshop is launched in Rosetta mode. Because native Photoshop on M1 does not support CEP, existing CEP extensions have a strong reason to consider a UXP plugin version.

Migration is not a direct one-for-one exercise because CEP and UXP have different foundations. CEP used CEF ([Chromium Embedded Framework](https://bitbucket.org/chromiumembedded/cef)), so it behaved much like a browser. UXP is not a browser, so exact feature parity should not be expected. Treat the move as a chance to rebuild the CEP extension into a faster, better-designed plugin, potentially with new capabilities and modern workflow support. In practice, it is more accurate to view the effort as a reconstruction around UXP's strengths than as a straight migration.

Many end users who rely on the current CEP plugin may not need a replacement for several years. Users running Photoshop natively on M1 Mac machines are the audience that needs UXP support, and offering that plugin can also bring in new users.

## Why migrate to UXP?

UXP is an extensibility platform that turns JavaScript and HTML markup into native-window controls inside host applications. Think of it as a compact runtime with selected browser-style capabilities that Adobe plans to expand. It includes a DOM, auto-layout behavior, and CSS Flexbox layout support. UXP executes JS through the platform-specific JS engine, lays out native controls, and supports hybrid application work across C++ and JS. With a unified modern execution environment (JavaScript V8), plugin UI and business logic can run in the same context, removing the need for `evalScript`.

### Developer Tooling

Compare the [CEP debugging guide](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_11`.x/Documentation/Debugging%20Handbook.md) with the [UXP debugging guide](https://developer.adobe.com/photoshop/uxp/2022/guides/debugging/). The [UXP Developer Tool](https://developer.adobe.com/photoshop/uxp/2022/guides/devtool/) helps during development by loading plugins, debugging them, and simplifying plugin management.

### Plugin Types

In CEP, placing an extension in the Window-->Extensions menu requires the `<Menu>` tag. To start the extension from an event, list those events with the `<StartOn>` tag. Define every CEP extension type in manifest.xml.

| CEP Extension Type | Specifications |
| --- | --- |
| Panel | DockableResizableFly-out menusRe-opened at startup if open at shutdown Modal Dialog Opens a new extension window and forces the user to interact with it before returning control to the host application |
| Invisible/Custom | Extensions that never become visible during their lifecycle (CEP 5.0+) Modeless Opens a new extension window but does not force the user to interact with the extension window |

UXP, by contrast, organizes plugins as commands or panels. Metadata such as size, icons, label, and ID lives in `manifest.json`, while `entrypoints.setup()` defines plugin behavior and functionality.

| UXP Plugin Type | Specifications |
| --- | --- |
| Panel | DockableResizableFly-out menusFly-out menusEasily theme-awareBy default, loads only when needed (PS 23.1+)Can be launched in a modal state Command Direct action command that executes a custom taskTriggered by user selection from Plugins menuOption for no UIA progress bar dialog will appear with a "Cancel" option if the task runs for longer than 2 seconds. To identify which task is running, the progress bar will be labeled with your command name.Can be launched in a modal state |

[Appendix 1: An overview of UXP vs. CEP vs. ExtendScript](cep-appendix-1.md)

## UXP Plugin Development

### Entrypoint Setup

The `entrypoints.setup()` API defines handlers and menu items for entry points declared in the manifest. The `entrypoints` object is made up of 3 objects:

1. plugin: Accepts either an object or a function. A function is treated as the `create` handler described below.
   - `create()`: Runs after the plugin has loaded.
   - `destroy()`: Runs before the plugin unloads.
2. panels: Holds key-value pairs where each key is a panel id (string), and the value is that panel's data as either an object or a function. A function value is treated as the `show` method described below. An object value can use the properties below, but it must define `create` or `show`. On success, each function below returns a promise; to report failure, throw an exception or return a rejected promise.
   - `create()`: Runs when a panel is created.
   - `show()`: Runs when a panel is displayed.
   - `hide()`: Runs when a panel is hidden.
   - `destroy()`: Runs before a panel is destroyed.
   - `invokeMenu()`: Runs when a panel menu item is invoked. The menu id is supplied as this function's first argument.
   - `menuItems`: An array containing menu items. Each entry is either a string or an object with the properties below, kept in the same order as in this array. To add a separator, use "-" as the value or a menu item whose label is "-".
     - {string} id - menu item identifier.
     - {string} label - menu item display text. Localize this value. When label is omitted, id becomes the label.
     - {boolean} enabled - menu item enabled/disabled state. Default - true.
     - {boolean} checked - menu item checked state. Default - false.
     - {Array} submenu - submenu for this menu item, also represented as an array of `menuItems`. Submenu `id` values still need to be unique across the panel.
3. commands: Maps each command ID to its command data, which may be an object or a function. A function command value is treated as the `run()` method.
   - `run()`: Runs when the command is invoked from the menu entry.
   - `cancel()`: Runs when the command is cancelled or aborted before finishing.

### User Interface

UXP plugins may build UI with platform-native HTML and CSS components, including buttons and input fields. [Spectrum UXP](https://developer.adobe.com/xd/uxp/uxp/reference-spectrum/) components are another supported option.

## Migrating Native CEP Functions

Plugins commonly need access to host-independent APIs, including file I/O and networking. This section covers native CEP APIs that extensions can depend on and explains how to move those API uses to UXP.

### Directory and File I/O Operations (File APIs)

CEP extensions perform directory and file I/O through the `window.cep.fs` object. CEP developers can access disk and machine resources freely and can launch processes, including bash scripts, without prompting users for file-system consent. Since developers have full file access, that access is effectively persistent. CEP also has no secure storage facility.

The UXP `storage` module reads and writes files and folders on the user's file system through different API signatures. Recent OS sandboxing requirements mean UXP cannot freely reach any host-system file. Instead, a plugin requests access from the user through a file-picker dialog and receives a token. Access outside the plugin root folder, plugin data folder, and plugin temporary folder requires user permission. UXP also supports persistent file storage and secure storage. See [file access](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/file-access/), [persistent file storage](https://developer.adobe.com/photoshop/uxp/2022/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/), and UXP-specific [(secure) storage](https://developer.adobe.com/photoshop/uxp/2022/uxp/reference-js/Modules/uxp/Key-Value%20Storage/SecureStorage/). For repeated read/write access to a location, use either the UXP-approved plugin data location for now or [persistent file access tokens](https://developer.adobe.com/photoshop/uxp/2022/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/FileSystemProvider/#createpersistenttokenentry).

### Encoding API

CEP exposes encoding through the `window.cep.encoding` object, letting extensions encode content while reading or writing files. In UXP, pass the desired encoding directly as a string literal when calling file read/write methods. CEP developers can work with UTF8 or Base64; UXP text encoding support is limited to utf-8, utf-16be, and utf-16le.

### Opening Remote Resources

CEP developers use the `window.cep.util` object for `openURLInDefaultBrowser`, `registerExtensionUnloadCallback`, and `storeProxyCredentials`. UXP provides `openExternal` in the "shell" module as the counterpart for `openURLInDefaultBrowser`, opening a web link in the system browser. The UXP shell module has no counterparts, and is not expected to add counterparts, for CEP's `registerExtensionUnloadCallback` or `storeProxyCredentials`.

In UXP, launch external files or remote resources with `openPath` and `openExternal`. With UXP 6.0.2+, [manifest v5](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#launch-process) requires a declaration of the URI schemes and file extensions that the plugin may launch.

### Process APIs

CEP developers manage processes with the `window.cep.process` object. This example creates a process and verifies whether it is still running:

```
var result = window.cep.process.createProcess("usr/X11/bin/xterm");

if(result.err === 0){
  var pid = result.data;
  result = window.cep.process.isRunning(pid);
  if(result.data === true){
    // running
  }
}
```

UXP does not currently provide a complete process API set. For external files and remote resources, call `openPath` or `openExternal`. With UXP 6.0.2+, manifest v5 requires the plugin to list the URI schemes and file extensions it is allowed to launch.

```
"requiredPermissions": {
    "launchProcess": {
        // allows launching files with specified URI schemes
        "schemes":
            [ "https", "slack", "adobe" ],
        // allows opening files with the specified file extensions
        "extensions":
            [ ".pdf", ".xd", ".psd" ],
    },
}
```

`openPath` and `openExternal` both depend on that permission configuration. Each call presents the runtime consent dialog shown below; the API runs only after the user approves.

[Figure: User consent dialog](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/assets/user_consent.png)

## Migrating CEP JavaScript Libraries

CEP JavaScript Libraries correspond to the Flex CSXS Library and expose JavaScript APIs for host-application and CEP information. In UXP, each host application can make APIs directly available to developers. The focus here is what the Photoshop UXP API offers during migration.

### Vulcan Interface: Communicating across plugins within Photoshop

The older Adobe Vulcan library handled communication between plugins across Adobe host applications. UXP cannot call these APIs, although UXP 6.0.2 added APIs for communication between plugins.

In UXP 6.0.2 (manifest v5), set the needed manifest flags, then use `invokeCommand` for command execution and `showPanel` to reveal panels from other plugins.
| Type | CEP | UXP |
| --- | --- | --- |
| Plugin communication across host applications | Yes | Not yet Plugin communication within the same host application Yes Yes, UXP 6.0.2+ |

### CS APIs: Communicating with your plugin and with Photoshop

Use `CSInterface` to read details about the host application running an extension, start an extension, subscribe to event notifications, and send events. `CSInterface` also supports Photoshop theming and menu customization for fly-out and context menus.

### Use Case: API Version

In CEP, check the CEP JavaScript API version tag against Photoshop's integrated CEP version before relying on a specific API. `CSInterface.getCurrentAPIVersion()` returns the CEP version that Photoshop includes.

For UXP, declare the target Photoshop version in the manifest configuration. The plugin can also declare which Photoshop API version it targets.

**Specify Photoshop and Photoshop API Version in the manifest.**

With the v1 implementation in Photoshop 2021, plugins did not run in isolation, so any plugin could alter Photoshop state at any moment. Photoshop 2022 added a modal JS scope, isolating plugins and preventing simultaneous Photoshop modifications by multiple plugins.

What changed in v2?

- History state suspend/resume behavior. Details are in [executeAsModal](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/executeasmodal/).
- Photoshop DOM access updates. The [changelog](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/changelog/#updated-dom-api) covers them.

Photoshop 2021 supports v1 only; Photoshop 2022 supports both API v1 and v2. Developers choose the target version in the manifest. The manifest's `host` value takes a `data` object containing the optional `apiLevel` field. By default:

- A plugin on a PS version earlier than 23.0.0 targets Photoshop API v1.
- A plugin on a PS version 23.0.0 or later targets Photoshop API v2.

Plugins may still use v1, but many newer features require Photoshop API v2, and a future major Photoshop update will remove v1 support. Remaining on v1 is mainly for special cases that depend on Photoshop menu state or other non-modal user interactions while the plugin runs.

**Access host application version**: `require("uxp").host.version`

**Access UXP API version**: `require("uxp").versions.uxp`

**Access plugin version from manifest**: `require("uxp").versions.plugin`

### Use Case: Sending/Receiving Events

CSXS/CEP events carry messages between extensions in one application and between extensions in separate applications.

**Photoshop DOM events**: Inside an extension, attach event listeners to the DOM of the plugin panel or modal to send and receive events, then listen for Photoshop app changes through the Photoshop UXP API.

**UXP events**: UXP lifecycle events let a plugin receive and send host-application events and manage its lifecycle more cleanly.

Plugin lifecycle events available to a plugin include:

- `uxpcreateplugin`: Fires after the plugin's JS context has been created and the plugin has loaded successfully.
- `uxpdestroyplugin`: Fires just before the plugin's JS context is destroyed.

Panel lifecycle events available to a plugin include:

- `uxpcreatepanel`: Fires just before a panel is created. It runs the first time a panel appears and again after the panel has been destroyed.
- `uxpdestroypanel`: Fires just before a panel is destroyed.
- `uxpshowpanel`: Fires just before a panel is shown and should render UI into the attached node. It runs whenever the panel is shown.
- `uxphidepanel`: Fires when a panel is hidden.
- `uxpinvokepanelmenu`: Fires after a panel menu item is invoked.

Command lifecycle events available to a plugin include:

- `uxpcommand`: Fires when the user, or Photoshop, requests that the plugin run a command.
- `uxpcommandrun`: Fires when the plugin is about to run a command.
- `uxpcommandcancel`: Fires when the user cancels the command.

These events are supported by the following additions:

1. Entrypoints support async behavior.
2. The latest manifest update changes entrypoint parameters:
   - [v4](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/entrypointsetup-v4.js) - takes Event {event name, node, PanelID, PanelInfo}
   - [v5](https://raw.githubusercontent.com/Adobe-CEP/CEP-Resources/master/UXP-Migration-Guide/entrypointsetup-v5.js) - takes node and data(if applicable)
3. The default entrypoint timeout is now 300 milliseconds.

### Use Case: Network Access

CEP previously used CSInterface.js for network information. In UXP, the manifest must list the domains that the plugin will access. Add the network object under `requiredPermissions` in the manifest to declare this access.

UXP can make network requests through XMLHttpRequest, WebSockets, and Fetch APIs.

Limitations:

- On macOS, self-signed certificates cannot be used with secure WebSockets.
- WebSockets do not support extensions.
- XHR binary content must use an ArrayBuffer; Blob is unsupported.
- XHR has no cookie support.
- XHR has no responseURL support.

### Use Case: Customizing Menus

CSInterface provides two APIs for flyout-menu customization. An example in [these notes](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_11`.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#fly-out-menu) configures flyout content and pairs it with event listeners.

UXP represents flyout menus as a JSON structure passed into `entrypoints.setup`. That method tells UXP how to handle the entrypoints declared in manifest.json. When the user invokes a menu item, UXP sends back the flyout menu ID. Developers can branch on that ID to handle each defined menu item. In manifest.json, define the menu item label that appears in the Plugins panel as `EntryPointDefinition.label`. This [example](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/flyout-menus/#flyout-menus) walks through the flow.

### Use Case: Theme Support

CSInterface and the theme manager interface update a CEP extension's theme after the host application's theme changes. The listener uses the CSXS event `"com.adobe.csxs.events.ThemeColorChanged"`. CEP retrieves the current host theme with `var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;`. The resulting `skinInfo` object contains host theme and font information and can be changed. In UXP, theme awareness can be added with Spectrum CSS and media queries.

### Use Case: Localization

CEP uses manifest-provided host-environment information to load and refresh the extension. The [CEP support](https://github.com/Adobe-CEP/CEP-Resources/blob/master/`CEP_9`.x/Documentation/CEP%209.0%20HTML%20Extension%20Cookbook.md#localization) notes cover localization on that platform. In UXP, read host-environment [locale info](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/localization-and-platforms/) and use the returned string to adjust plugin behavior. Manifest configuration also supports localized [plugin menu item labels and panel labels](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/localization-and-platforms/).

### Use Case: Keyboard Events

CEP lets an extension register interest in particular keyboard events so those events do not go straight to the host application, which enables custom callback handling. UXP does not offer equivalent global keyboard-event registration. A UXP plugin can focus a control inside a panel and listen for several keyboard-press types, but it cannot globally override shortcuts. To ask for this capability, post in the [UXP developer forums](https://forums.creativeclouddeveloper.com/t/how-to-set-a-keyboard-shortcut-for-a-photoshop-uxp-plugin/3236).

### Use Case: Adjusting Plugin Size

For modal and modeless CEP extensions, `window.__adobe_cep__.resizeContent()` accepts two parameters, width and height, and changes the extension content size to those dimensions. Both width and height should be unsigned integers. Min/max size limits from the manifest file still apply and take priority. When the requested size falls outside the allowed range, the corresponding min or max bound is used.

UXP plugins must stay within the sizes declared in the manifest. A plugin also cannot resize its panel through programmatic control. Plugin authors are expected to build responsive UI so users can adjust the panel as they prefer. When a plugin UI contains multiple accordions, consider shipping multiple panels instead. Users can then group, resize, reorder, collapse, and otherwise arrange those panels according to the manifest.

## Migrating ExtendScript/EvalScript to the Photoshop DOM API

JSX files contain functions and objects meant to run inside Photoshop's ExtendScript environment. CEP runs them either when the plugin loads or through `evalScript`. The path to JSX files is declared in the <ScriptPath> node in manifest.xml.

ExtendScript calls into Photoshop were synchronous, blocking the host application's UI while they ran. UXP method calls are asynchronous and leave the UI thread unblocked. To ease movement from the ExtendScript DOM to the UXP API, UXP functions are asynchronous by design, but they may be used for synchronous-style execution without requiring `await`.

UXP cannot directly load and run JSX files. Use the Photoshop DOM API instead to reach the Photoshop DOM directly. If the current implementation does not cover a needed operation, run Photoshop actions with [`batchPlay`](https://developer.adobe.com/photoshop/uxp/ps_reference/media/advanced/batchplay/).

`batchPlay` advances beyond ExtendScript's `executeAction`. `executeAction` played one descriptor at a time, while `batchPlay` takes an array of action descriptors. ExtendScript supplied classes for building descriptors and references and assigning values. With `batchPlay`, those related classes are replaced by `actionJSON`. Developers familiar with `executeAction` in ExtendScript may remember 4-character codes (OSTypes) and helper methods around them. In `actionJson`, use extended string identifiers such as `colorSampler` instead. An OSType can still be used by prefixing it with `$` and passing that value as a string, as in `$app `.
