# Manifest (part 1)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

The Manifest is the JSON file at a plugin bundle's root that stores plugin metadata.

## Overview

Each UXP plugin requires one `manifest.json` file, which the host application reads to **load and manage** the plugin. Beyond core metadata such as name, version, icons, and entry points, the manifest records permissions, compatibility information, and other definitions that shape host integration.

The most important value is the **plugin ID**, because it uniquely identifies the plugin after installation in the host application. A valid plugin ID is required for Adobe's Marketplace distribution; see the [Developer Distribution documentation](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/) for details.

## Manifest Keys

| Required properties | Optional properties |
| --- | --- |
| [`manifestVersion`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#manifestversion) | [`main`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#main) |
| [`id`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#id) | [`icons`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#icons) |
| [`name`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#name) | [`strings`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#strings) |
| [`version`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#version) | [`requiredPermissions`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#requiredpermissions) |
| [`host`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#host) | [`featureFlags`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#featureflags) |
| [`entrypoints`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#entrypoints) | [`addon`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#addon) |

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

## Required properties

### `manifestVersion`

| Name | Type | Default |
| --- | --- | --- |
| `manifestVersion` | `string` | - |

Sets the manifest schema version; Premiere accepts version `"5"`.

### `id`

| Name | Type | Default |
| --- | --- | --- |
| `id` | `string` | - |

Provides the unique plugin identifier used to separate plugin contexts, storage, errors, and similar areas. For plugins distributed through the plugin marketplace, `id` must match the value configured in the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/plugin_id/).

### `name`

| Name | Type | Default |
| --- | --- | --- |
| `name` | `string` or [`LocalizedString`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#localizedstring) | - |

Names appear in UI surfaces such as plugin menus or launchers for top-level actions. Use either literal text, a key from [`StringsDefinition`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#stringsdefinition), or a localized string.

### `version`

| Name | Type | Default |
| --- | --- | --- |
| `version` | `string` | - |

Stores the plugin version using the `major.minor.patch` string format.

### `host`

| Name | Type | Default |
| --- | --- | --- |
| `host` | [`HostDefinition`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#hostdefinition) | - |

The host object declares which host application versions are compatible with the plugin. Incompatible plugins will:

- fail installation in the specified host
- be hidden from the in-app plugin marketplace for the specified host
- be blocked from update when the update is no longer compatible.

See the [HostDefinition](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#hostdefinition) section for additional details.

**Only during development**, for convenience, `host` can be assigned an array of `HostDefinition` objects so the plugin can load in multiple applications at the same time. See the [Package with the UXP Developer Tool](uxp-distribution-2.md) section for more details.

### `entrypoints`

| Name | Type | Default |
| --- | --- | --- |
| `entrypoints` | [`EntrypointDefinition[]`](#entrypointdefinition) | - |

This array lists the plugin entrypoints, with current support limited to Commands and Panels. See the [EntrypointDefinition](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#entrypointdefinition) section for more details.

## Optional properties

### `main`

| Name | Type | Default |
| --- | --- | --- |
| `main` | `string` | `main.js` |

`main` points to the plugin entry file, resolved from the plugin's installation directory. The target may be HTML or JavaScript; common examples are `index.html` and `index.js`. When older manifests omit the property, UXP falls back to `main.js`.

### `icons`

| Name | Type | Default |
| --- | --- | --- |
| `icons` | [`IconDefinition[]`](#icondefinition) | `[]` |

Use this array for the icons that represent the plugin as a whole or a panel icon. Host applications display those icons when showing the plugin to users. If `icons` is absent, the host supplies a default icon. For the full shape, see [IconDefinition](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#icondefinition).

### `strings`

| Name | Type | Default |
| --- | --- | --- |
| `strings` | [`StringsDefinition`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#stringsdefinition) | `{}` |

`strings` supplies localized text for the plugin name and other user-visible labels. The value may also point to a JSON file that contains the localized strings. More information is in [StringsDefinition](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#stringsdefinition).

### `requiredPermissions`

| Name | Type | Default |
| --- | --- | --- |
| `requiredPermissions` | [`PermissionsDefinition`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#permissionsdefinition) | `{}` |

Declare here the permissions the plugin needs before it uses protected API areas. If a needed permission is missing, the API call can fail or throw. **Users will be asked for their consent** when a plugin invokes `openExternal()`, `openPath()`, or `<sp-link>` anchor tags; other permission grants happen during installation. See [PermissionsDefinition](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#permissionsdefinition) for the complete model.

### `featureFlags`

| Name | Type | Default |
| --- | --- | --- |
| `featureFlags` | [`FeatureFlags`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#featureflags-1) | `{}` |

`featureFlags` controls whether selected plugin features are enabled. These switches gate functionality that is not ready for broad availability. The available entries are described in [FeatureFlags](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#featureflags-1).

### `addon`

| Name | Type | Default |
| --- | --- | --- |
| `addon` | `object` | `{}` |

This object describes addons for [Hybrid Plugins](uxp-plugins.md). In a UXP Hybrid plugin, dynamically-linked C++ native libraries can be loaded at runtime as `.uxpaddon` files. Build and configuration details are covered in the [Hybrid Plugins guide](uxp-plugins.md).

```json
"addon": {
  "name": "sample-uxp-addon.uxpaddon"
}
```

## Supporting Definitions

### `StringsDefinition`

Use `StringsDefinition` to provide localized text for the plugin name and other strings shown to users. Any location that accepts [`LocalizedString`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#localizedstring) can reference keys from `StringsDefinition`.

```json
{
  "name": "my-plugin",
  "strings": {
    "my-plugin": {
      "default": "My Plugin",
      "it": "Il mio Plugin",
      "fr": "Mon Plugin"
    }
  }
}
```

### `LocalizedString`

`LocalizedString` maps locale keys to translated text values.

```json
{
  "default": "Settings",
  "it": "Impostazioni",
  "fr": "Paramètres"
}
```

### Required Properties

| Name | Type | Default |
| --- | --- | --- |
| `default` | `string` | - |

When a locale-specific translation is unavailable, UXP uses the `default` string.

### `IconDefinition`

`IconDefinition` describes an icon for the whole plugin or for one entry point. The same icon data can appear in the plugin list, toolbar, or other host surfaces.

| Required Properties | Optional Properties |
| --- | --- |
| [`width`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#width) | [`scale`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#scale) |
| [`height`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#height) | [`theme`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#theme) |
| [`path`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#path) | [`species`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#species) |

### Properties

### `width`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `width` | `number` | required | - |

`width` gives the icon width in pixels.

### `height`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `height` | `number` | required | - |

`height` gives the icon height in pixels.

### `path`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `path` | `string` | required | - |

`path` is resolved relative to the plugin's installation directory and identifies the icon file. Supported image formats are PNG (`.png`), JPG (`.jpg` or `.jpeg`), and SVG (`.svg`).

### `scale`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `scale` | `number[]` | optional | [1] |

`scale` lists the pixel-density variants supported by the icon.

```json
{
  "path": "icon.png",
  "width": 24,
  "height": 24,
  "scale": [1, 2, 2.5]
}
```

With those values, UXP looks for these files when they exist:

- 100% scaling can use `icon.png` or `icon@1x.png` (24x24px).
- 200% scaling can use `icon@2x.png` (48x48px).
- 250% scaling can use `icon@2.5x.png` (60x60px).

### `theme`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `theme` | `string[]` | optional | ["all"] |

`theme` lists the UXP themes for which the icon is suitable. Valid theme values are `"all"` (default), `"lightest"`, `"light"`, `"medium"`, `"dark"`, and `"darkest"`.

```json
{
    "path": "icon-light.png",
    "width": 24,
    "height": 24,
    "theme": ["lightest", "light"]
},
{
    "path": "icon-dark.png",
    "width": 24,
    "height": 24,
    "theme": ["darkest", "dark"]
}
```

### `species`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `species` | `string[]` | optional | ["generic"] |

`species` names the intended placement for the icon. UXP accepts these species values:

- `"generic"`: works wherever an icon may be displayed.
- `"toolbar"`: intended for toolbar display. Icon sizes are 23x23px at 100% scaling and 46x46px at 200% scaling.
- `"pluginList"`: intended for plugin-list display. Icon sizes are 24x24px at 100% scaling and 48x48px at 200% scaling.

### `EntrypointDefinition`

`EntrypointDefinition` describes a plugin entrypoint. An entrypoint gives the plugin a callable point and identifies the code behind that point.

| Required Properties | Optional Properties |
| --- | --- |
| [`type`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#type) | [`description`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#description) |
| [`id`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#id-1) | [`shortcut`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#shortcut) |
| [`label`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#label) | [`icon`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#icon) |
|  | [`minimumSize`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#minimumsize-and-maximumsize) |
|  | [`maximumSize`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#minimumsize-and-maximumsize) |
|  | [`preferredDockedSize`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#preferreddockedsize-and-preferredfloatingsize) |
|  | [`preferredFloatingSize`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#preferreddockedsize-and-preferredfloatingsize) |

### Properties

### `type`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `type` | `"command"` or `"panel"` | required | - |

`type` selects the entrypoint kind. At present, UXP supports only Commands and Panels.

### `id`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `id` | `string` | required | - |

The entrypoint `id` must be unique inside the plugin, and UXP uses it to find the implementation code for that entrypoint.

### `label`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` or `LocalizedString` | required | - |

`label` supplies the user-facing name for the entrypoint, including places such as the plugin menu.

### `description`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `description` | `string` or `LocalizedString` | optional | `undefined` |

`description` provides longer explanatory text for host surfaces such as tooltips, where supported by the host app. If it is omitted, the plugin name becomes the default.

### `shortcut`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `shortcut` | `{ mac: string, win: string }` | optional | `undefined` |

**Premiere does not support keyboard shortcuts** for UXP plugins yet.

Use `shortcut` to define a keyboard command for invoking the entrypoint. Provide separate strings for Windows and macOS. If the host application cannot use the shortcut, it ignores the value.

```json
"shortcut": {
    "mac": "Cmd+Shift+P",
    "win": "Ctrl+Shift+P"
}
```

Each platform-specific shortcut string follows these rules:

- Include one or more modifier keys in any order, with each modifier followed by `+`.
- Mac accepts Cmd, Ctrl, Opt/Alt, and Shift modifiers. At least one of Cmd or Ctrl is required.
- Win accepts Ctrl, Alt, and Shift modifiers. Ctrl is required.
- End with a letter or number key.

Letter case has no effect, so `"Cmd+P"` and `"Cmd+p"` are equivalent and do not imply Shift. Other key types, including punctuation, arrow keys, and F1-F12, are not supported right now.

When the shortcut conflicts with a built-in host command or a shortcut from another plugin, the host skips it and logs a warning in the developer console.

### `icon`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `icon` | [`IconDefinition`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#icondefinition) | optional | `[]` |

`icon` assigns an entrypoint-specific icon. When present, it replaces the general plugin icon on surfaces that display that entrypoint; otherwise, UXP uses the plugin icon.

### `minimumSize` and `maximumSize`

| Name | Type | Required |
| --- | --- | --- |
| `minimumSize` | `{ width: number, height: number }` | optional |
| `maximumSize` | `{ width: number, height: number }` | optional |

Use `minimumSize` and `maximumSize` to request panel size bounds in pixels through `width` and `height`. The host application may be unable to honor those requests. If the properties are absent, default sizing applies.

Set `minimumSize` and `maximumSize` to the same value when a panel should be **locked to a specific size**.

### `preferredDockedSize` and `preferredFloatingSize`

| Name | Type | Required |
| --- | --- | --- |
| `preferredDockedSize` | `{ width: number, height: number }` | optional |
| `preferredFloatingSize` | `{ width: number, height: number }` | optional |

These properties tell the host the preferred dimensions for docked panel states, modal dialogs that do not include `reference_node_id`, and floating states. The host can ignore the request; if values are absent, defaults apply.

### `HostDefinition`

`HostDefinition` identifies the host application compatible with the plugin.

| Required Properties | Optional Properties |
| --- | --- |
| [`app`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#app) | [`maxVersion`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#maxversion) |
| [`minVersion`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#minversion) |  |

### Properties

### `app`

| Name | Type | Required |
| --- | --- | --- |
| `app` | `"PS"` or `"ID"` or `"premierepro"` or `"XD"` | required |

`app` names the host application supported by the plugin. Valid values are:

- `"PS"`: Adobe Photoshop
- `"ID"`: Adobe InDesign
- `"premierepro"`: Adobe Premiere
- `"XD"`: Adobe XD

### `minVersion`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `minVersion` | `string` | required | - |

`minVersion` sets the lowest supported host app version, written in `x.y.z` format.

### `maxVersion`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `maxVersion` | `string` | optional | `undefined` |

`maxVersion` sets the highest supported host app version in `x.y.z` format. If it is omitted, the current latest host app version is assumed.

### `PermissionsDefinition`

UXP's permission model requires plugins to declare the capabilities they need, which helps keep plugins secure. Any permission not declared explicitly is blocked by default.

Best practices

Choose the **most accurate permission** that fits the use case, because future consent prompts will be based on that declaration.

For file operations, `"fullAccess"` may look like the simplest choice because it is the least restrictive, but users may reject installation if full system access is unnecessary or uncomfortable for them.

| Required Properties | Optional Properties |
| --- | --- |
|  | [`clipboard`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#clipboard) |
|  | [`localFileSystem`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#localfilesystem) |
|  | [`network`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#network) |
|  | [`webview`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#webview) |
|  | [`launchProcess`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#launchprocess) |
|  | [`allowCodeGenerationFromStrings`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#allowcodegenerationfromstrings) |
|  | [`enableUserInfo`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enableUserInfo) |
|  | [`ipc`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#ipc) |
|  | [`enableAddon`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enableaddon) |

### Properties

### `clipboard`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `clipboard` | `"read"` or `"readAndWrite"` | optional | `undefined` |

`clipboard` grants clipboard capability to the plugin. Additional examples are available in the [clipboard recipe](uxp-recipes.md).

- `read`: grants read access to clipboard contents.
- `readAndWrite`: grants both clipboard reading and clipboard writing.

If unset, the value is `undefined`, which means no clipboard access.

### `localFileSystem`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `localFileSystem` | `"plugin"` or `"request"` or `"fullAccess"` | optional | `"plugin"` |

`localFileSystem` determines how the plugin may use the filesystem. Detailed examples are in the [Filesystem Operations recipe](uxp-filesystem-operations.md).

- `"plugin"`: limits filesystem access to plugin folders, including the plugin's installation directory, data folder, and temporary folder.
- `"request"`: permits the plugin to ask users for filesystem access.
- `"fullAccess"`: allows filesystem access without prompting for it.

When omitted, `localFileSystem` defaults to `"plugin"`.

### `network`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `network` | [`NetworkPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#networkpermission) | optional | `undefined` |

`network` permits network use such as HTTP requests (XHR, fetch, etc.) and image loading with markup like `<img src="" />`.

- `"all"`: permits access to every domain.
- `"domains"`: limits access to the domains that are listed.

Without this property, the value is `undefined`, meaning no network access. Details are in [`NetworkPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#networkpermission), and examples are in the [network recipe](uxp-recipes-3.md).

### `webview`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `webview` | [`WebviewPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#webviewpermission) | optional | `undefined` |

`webview` allows the plugin UI to embed webviews for web content or richer interface surfaces.

If it is absent, the value is `undefined`, so webview use is not enabled. Additional detail is under [`WebviewPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#webviewpermission).

### `launchProcess`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `launchProcess` | [`LaunchProcessPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#launchprocesspermission) | optional | `undefined` |

`launchProcess` allows process launching through APIs such as `require("uxp").shell.openPath()` or `shell.openExternal()`.

If unset, the value is `undefined`, which disables process launching. Consult [`LaunchProcessPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#launchprocesspermission); practical examples are also in the [launch process recipe](uxp-external-process.md).

### `allowCodeGenerationFromStrings`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `allowCodeGenerationFromStrings` | `boolean` | optional | `false` |

`allowCodeGenerationFromStrings` permits code generation from strings, which is needed for inline HTML event handlers, `eval()`, and `new Function()` usage.

The default is `false`.

### `enableUserInfo`
