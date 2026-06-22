# File Access, Flyout Menus, Localization And Platforms, Manifest V4

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: File I/O — Overview; Flyout Menus; UXP: Other Topics; Localization and Platforms — Localization; UXP Manifest v4; Photoshop specific manifest properties.

## File I/O — Overview

Many plugins need file and folder access. UXP can work with files and folders from these places:

- The plugin folder itself.
- Temporary storage reserved for that plugin.
- Locations outside the plugin, anywhere on the filesystem. Modern OS sandboxing means UXP cannot freely open arbitrary host-system files, so the plugin asks the user through a file-picker dialog and receives a _token_.
- A secure store specific to UXP, intended for secure files with sensitive contents. See _Secure Storage_, below.
- Network locations; those details are outside this section, so use [Networking](https://raw.githubusercontent.com/guides/uxp-guide/uxp-misc/network-io/index.md) instead.

> UXP is expected to add a persistent-token permission model so repeated access to the same path will not require user action in every session. Until then, plugins that repeatedly write to and read from a location should use the UXP-approved plugin locations exposed through methods on the UXP FileSystemProvider object.

### File I/O — Secure Storage

Plugins may need to keep sensitive values such as external service tokens or passwords. UXP handles that case with Secure Storage, a protected per-plugin store for sensitive data.

SecureStorage receives a key-value pair, encrypts the value, and then saves the key together with the encrypted value. Later, a request using the matching key returns the value after decryption. Keep in mind that _the key is not encrypted_, so the cryptographic protection does not cover it.

SecureStorage has these limitations:

1. Do not use SecureStorage for secrets that must remain hidden from the current user. Protection is tied to the current user's account credentials, so encrypted data may still be decryptable with that user's privileges.

2. SecureStorage data can disappear in several situations. A user might uninstall the host application and remove the secure storage, or might accidentally damage the cryptographic information used by that storage. Either case can produce data loss even when the secure storage itself remains present.

3. Treat SecureStorage as cache-like storage instead of permanent storage. Plugins should be able to recreate any SecureStorage data after it is lost.

## Flyout Menus

In Photoshop panels, the hamburger icon at the panel's upper right opens the flyout menu. Put commands there when they should be available without occupying panel space.

To keep the menu flexible, provide UXP with a JSON structure at runtime, as demonstrated below.

### Defining Flyout Menus

To define flyout menus, pass a JSON structure into the UXP `entrypoints.setup` method. That JSON declares the menuitems and the action for each selection. The example below defines three starship-themed menuitems; when the user chooses one, UXP invokes the plugin function `handleFlyout`.

```js
const { entrypoints } = require("uxp");
// the setup() function tells UXP how to handle
// the entrypoints defined in your manifest.json file.
entrypoints.setup({
  panels: {
    my_panel_entrypoint: {
      show() {
        // put any initialization code for your plugin here.
      },
      menuItems: [
        { id: "setWarpFactor", label: "Warp Factor 1" },
        { id: "raiseShields", label: "Shields Up" },
        { id: "makeItSo", label: "Engage" },
      ],
      invokeMenu(id) {
        handleFlyout(id);
      },
    },
  },
});
```

### Handling Flyouts

The `handleFlyout` function shown earlier receives the flyout menu id. Use that id to route execution to the code for the selected menuitem, as this example does.

```js
function handleFlyout(id) {
  switch (id) {
    case "setWarpFactor": {
      console.log("Aye captain");
      break;
    }
    case "raiseShields": {
      console.log("Shields at 40 percent");
      break;
    }
    case "makeItSo": {
      console.log("Warp drive is offline");
      break;
    }
  }
}
```

## UXP: Other Topics

UXP continues to expand, so plugin authors often need several supporting topics beyond the core APIs:

- [The UXP Toolchain](uxp-misc-2.md)
- [Localization and Platforms](uxp-misc.md)
- [Flyout Menus](uxp-misc.md)
- [Plugin Icons](uxp-misc-2.md)
- [File Access](uxp-misc.md)
- [Network I/O](uxp-misc-2.md)
- [Spectrum CSS](uxp-misc-2.md)

## Localization and Platforms — Localization

For localization and similar host-aware logic, a plugin may need details about its host environment. Use this pattern to retrieve them:

```js
const host = require("uxp").host;
const locale = host.uiLocale;
const hostName = host.name;
const hostVersion = host.version;

console.log(`locale: ${locale}  host ${hostName} version ${hostVersion}`);
```

After receiving those strings, feed them into `switch` statements or other control flow so the plugin can adjust behavior, such as choosing the right text for messages and dialogs.

The same values can also drive HTML component updates in panels, commonly through `innerHTML` or `innerText`, so the displayed strings match the target language.

### Localization and Platforms — OS Identification

When plugin code must branch between macOS and Windows, query the OS platform from the host environment this way:

```js
const hostOS = require("os").platform();
// note that this is a method, not a property.
```

The `hostOS` value is `"darwin"` on macOS and `"windows"` on Windows.

## UXP Manifest v4

A plugin manifest holds plugin metadata. In practical terms, it is a JSON object containing facts about the plugin, not a place for executable code.

Place the manifest at the plugin root and name it `manifest.json`.

For a JSON refresher, use [this reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

UXP 6.0 introduced [manifest v5](uxp-misc-2.md).

### Example manifest (v4)

```json
{
  "manifestVersion": 4,
  "id": "YOUR_ID_HERE",
  "name": "Name of your plugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": {
    "app": "PS",
    "minVersion": "23.0.0"
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
  ]
}
```

Later sections describe each key/value field. Except where the notes say otherwise, every field is required.

### Top-level metadata

The top-level manifest JSON object carries the plugin's main metadata.

In the "Required" column, these keywords have the following meanings:

- Develop - needed before the plugin can load.
- Publish - needed for Adobe Developer Console submission and Plugin Manager publication.

| Key path | Type | Description | Required |
| --- | --- | --- | --- |
| `manifestVersion` | `number` | Manifest schema version; for Photoshop, use `4` or a later value. | Develop / Publish `id` `string` Unique plugin identifier; get yours from the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/).%7C Develop / Publish |
| `name` | `string` | Use a plugin name of 3 - 45 characters. A good practice is to match the _project name_ created when the Adobe Developer Console issued the plugin ID. | Develop / Publish `version` `string` Plugin version in `x.y.z` format. Use exactly three segments, and keep every component between `0` and `99`. Develop / Publish |
| `main` | `string` | Startup-code path; allowed targets are JavaScript source files and HTML files. | Optional (defaults to `main.js`) `icons` `IconDefinition[]` Plugin icons, which may be rendered in contexts such as the plugin panel. PNG and JPG/JPEG formats are supported, with a maximum file size of 1MB for each icon. Include at least the 1x and 2x sizes. Plugin Manager icons are uploaded through the Adobe Developer Console rather than bundled inside the plugin. See the ["Publishing your plugin" guide](uxp-guides-2.md) for more information. Publish |
| `host` | `HostDefinition\|HostDefinition[]` | Supported host applications for this plugin, including the application type plus minimum or maximum supported host-app versions. **Note:** arrays are allowed ONLY during development; marketplace submission requires a single definition. | Develop / Publish `entrypoints` `EntryPointDefinition[]` Entries the plugin contributes to the _Plugins_ menu and plugin panel. The next section gives the details. Develop / Publish |

### Icons

Development builds can omit icons, but Plugin Marketplace distribution requires them.
The `icons` field contains an array of `IconDefinition` objects.

### IconDefinition

| Key | Type | Description |
| --- | --- | --- |
| `width` | `number` | Logical-pixel width `height` `number` Logical-pixel height |
| `path` | `string` | Icon path relative to the plugin root `scale` `number[]` Provided scale values. For example, `[1, 2]` indicates `@1x` and `@2x` icon versions at the specified `path`. (For densities beyond `1x`, place `@2x` before the icon extension) |
| `theme` | `string[]` | Themes supported by this icon. Photoshop recognizes `lightest`, `light`, `dark`, and `darkest`. Use `all` when the icon works for every theme. (Default is `all`). `species` `string[]` Icon type and suitable display location. The default is `generic`, which lets Photoshop place the icon wherever appropriate. |

### Host

The `host` field is an _object_ that follows the `HostDefinition` shape below. Use it to state which application, such as Adobe XD or Photoshop, can run the plugin. During development, `host` may instead hold an _array_ of HostDefinition entries, which is useful for cross-compatible UXP plugins. Marketplace submission accepts only one HostDefinition.

### HostDefinition

| Key | Type | Description | Required |
| --- | --- | --- | --- |
| `app` | `string` | Supported application for this plugin; currently the only valid values are `"XD"` and `"PS"`. | Develop / Publish `minVersion` `string` Required minimum host-app version in `x.y` format for this plugin; manifest V4 starts at `22.0`. **Note:** use at least two version segments. In typical cases, leave the minor segment at `0`, e.g. `22.0`. Develop / Publish |
| `maxVersion` | `string` | Highest host-app version that can run this plugin. Format it the same way as `host.minVersion`. | Optional ### Entry Points The `entrypoints` field is an _array_ of objects that follow the `EntryPointDefinition` shape below. These entries show up in both the native menubar's _Plugins_ menu and the plugin panel. Each entry point uses `type` to create either a command that runs directly or a command that shows and hides a panel. ### EntryPointDefinition Key Type Description |
| ---- | ------ | ------------ `type` | `string` Entry point kind: either `"command"` or `"panel"`. `id` `string` Unique entry-point identifier. Plugin code also maps this `id` to its defined entrypoints. |
| `label` | `string` | User-facing menu-item label for running the plugin. It may be one string _or_ a dictionary of localized strings. `shortcut` | `Object` _Optional._ Object for Mac and Windows keyboard shortcuts on this menu item. See "Keyboard shortcuts" below for details. Available only on `command` entry points. `minimumSize` `Object` _Optional._ Available only on `panel` entry points. Defines the panel's preferred minimum size as `{width: number, height: number}`, with each length expressed in pixels. Depending on context, the host app may not guarantee that minimum width. |
| `maximumSize` | `Object` | _Optional._ Available only on `panel` entry points. Defines the panel's preferred maximum size as `{width: number, height: number}`, with each length expressed in pixels. Depending on context, the host app may not guarantee that maximum width. `preferredDockedSize` | `Object` _Optional._ Available only on `panel` entry points. Defines the preferred docked panel size as `{width: number, height: number}`, with each length expressed in pixels. This is only a preference and might not be honored. `preferredFloatingSize` `Object` _Optional._ Available only on `panel` entry points. Defines the preferred floating panel size as `{width: number, height: number}`, with each length expressed in pixels. This is only a preference and might not be honored. |
| `icons` | `array<object>` | Icons for the panel. Each panel needs its own icon set; when minimized, the panel's icons appear in toolbars without additional treatment. A panel icon is 23x23 (46x46) and can be transparent. These icons differ from the main plugin icons. They are optional during development, but Plugin Marketplace submission through the Developer Console requires them in both the manifest and the project. ### Keyboard shortcuts > Shortcuts are not yet available for plugins. ### Menu Localization Plugin menu item labels and panel labels may be localized for the host's current UI language. Other manifest fields, including `name`, _cannot be localized yet._ Instead of a single string, localized labels use an object with multiple translations: `json "label": { "default": "Menu Label", "fr": "Etiquette de Menu", "de": "Menübezeichnung" } ` Always include a default string. ### Inheritance and Overrides The manifest allows some top-level fields to be replaced at deeper levels. _ Each panel entry point can override `icons`. ## Photoshop specific manifest properties When the UXP plugin manifest lists Photoshop as a "host", the `data` object can include these options: - apiVersion - loadEvent - enableMenuRecording `json { "manifestVersion": 4, "id": "YOUR_ID_HERE", "name": "Name of your plugin", "version": "1.0.0", "main": "index.html", "host": { "app": "PS", "minVersion": "23.0.0", "data" : { "apiVersion": 2, "loadEvent": "use", "enableMenuRecording": true }, }, "entrypoints": [ { "type": "command", "id": "MENU_ITEM_ID", "label": { "default": "menu item's text"} } ] } ` ### apiVersion Photoshop 2021's UXP implementation has a key isolation gap: plugins do not have a protected execution mechanism. Any plugin can change Photoshop whenever it runs, even while another plugin is also active. Photoshop 2022 addresses that gap with a modal JavaScript scope. At a given moment, only one plugin may occupy that modal JavaScript scope. See [executeAsModal](uxp-executeasmodal.md) for details. Because modal scope limits the timing of Photoshop modifications, it cannot behave like the original model. Those timing limits are what prevent two plugins from changing Photoshop simultaneously. To give developers a migration path, Photoshop 2022 accepts both the original JavaScript mode and the newer modal JavaScript mode. A plugin declares its choice through the apiVersion field. _ `apiVersion` of **1** means the plugin targets the original Photoshop 2021 behavior. _ `apiVersion` of **2** means the plugin targets the newer modal JavaScript paradigm. After apiVersion = 2 was introduced, the original implementation became formally deprecated, and a later major Photoshop release will remove apiVersion 1 support. Several newer capabilities are therefore limited to apiVersion 2 plugins. Those apiVersion 2-only capabilities include the new DOM v2 and suspend/resume support for multiple history states at once. ### Default value The apiVersion field does not have to appear in the manifest. Photoshop selects a default from the minimum Photoshop version declared by the plugin: _ A plugin whose minimum version is less than 23.0.0 receives apiVersion 1 unless its manifest sets a different value. _ A plugin whose minimum version is 23.0.0 or greater receives apiVersion 2 unless its manifest sets a different value. ### Why use version 1 (2021)? At this stage, apiVersion 2 should work for nearly every plugin. Some early blockers existed, but executeAsModal's interactive mode is expected to cover them now. ### loadEvent > `Available in Photoshop 23.1 and later` Loading plugins consumes memory and CPU. To reduce ordinary Photoshop overhead, plugins normally load lazily. The default behavior loads a plugin when its panel UI is shown, or when the user runs one of its commands from the `Plugins` menu. Some workflows need the plugin present as soon as Photoshop starts. Examples include plugins that monitor and react to user actions, or plugins that must talk to a remote server or process while Photoshop is open. The loadEvent field lets a plugin choose the point at which it loads. Supported values are: _ `use`: Loads the plugin on demand, either when its UI becomes visible or when a plugin command runs. This is the default value. \* `startup`: Loads the plugin automatically soon after Photoshop starts. ### enableMenuRecording [Menu items](uxp-misc.md) (`type: "command"`) declared in the manifest's `entrypoints` appear in that plugin's submenu beneath the top-level Plugins menu. To let Actions record those menu items as steps, set `enableMenuRecording` to `true`. After that setting is enabled, a recorded Action shows the item as "Plugin Menu Command" together with the menu item's label. [Figure: Actions panel entry](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/uxp-guide/uxp-misc/manifest-v4/photoshop-manifest/menu-recording.png) |  |
