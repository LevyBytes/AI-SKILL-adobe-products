# Manifest (part 2)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Supporting Definitions

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableUserInfo` | `boolean` | optional | `false` |

`enableUserInfo` lets the plugin read the user's anonymized GUID. Its default is `false`.

```javascript
// set "enableUserInfo" to true in the manifest

let userId = require("uxp").userInfo.userId(); // Get the GUID of user
console.log(userId);
// "dad8483a3682a0c3e0fa990281142353901a69fc371254edde8b7dd38ca604c6"
```

### `ipc`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `ipc` | [`IpcPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#ipcpermission) | optional | `undefined` |

`ipc` allows the plugin to exchange messages with other plugins.

If it is omitted, `undefined` is used and IPC is unavailable. More detail is in [`IpcPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#ipcpermission).

### `enableAddon`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableAddon` | `boolean` | optional | `false` |

`enableAddon` allows native C++ addons, packaged as `.uxpaddon` files, to load in the plugin. [Hybrid Plugins](uxp-plugins.md) require this permission. Its default is `false`.

```json
"requiredPermissions": {
  "enableAddon": true
}
```

### `NetworkPermission`

`NetworkPermission` lists the domains available to plugin network requests.

```json
{
  "domains": ["https://example.com", "https://*.adobe.com/", "wss://*.myplugin.com"]
}
```

Plugin code can then issue network requests such as:

```javascript
const response = await fetch("https://example.com");
```

It can also load images with markup such as:

```html
<img src="https://example.com/image.png" />
```

To allow every domain, set `domains` to `"all"`.

```json
{
  "domains": "all"
}
```

See the [network recipe](uxp-recipes-3.md) for additional detail.

### `WebviewPermission`

`WebviewPermission` enables webviews in plugin UI, whether for web content or complex interfaces.

```json
{
  "allow": "yes",
  "domains": ["https://example.com"],
  "enableMessageBridge": "localAndRemote"
}
```

Plugin code can place a webview like this:

```html
<webview src="https://example.com" />
```

Use the message API for communication between the plugin and the webview:

```javascript
// In the plugin:
const webview = document.querySelector("webview");
webview.addEventListener("message", (event) => {
  console.log("Received message from webview:", event.data);
  webview.postMessage("Hello from the plugin!");
});

// In the webview:
window.addEventListener("message", (event) => {
  console.log("Received message from plugin:", event.data);
  window.uxpHost.postMessage("Hello from the webview!");
});
```

| Required Properties | Optional Properties |
| --- | --- |
| [`allow`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#allow) | [`enableMessageBridge`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enablemessagebridge) |
| [`domains`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#domains) |  |

### `allow`

| Name | Type | Required |
| --- | --- | --- |
| `allow` | `"yes"` or `"no"` | required |

Set `allow` to `"yes"` when webviews should be enabled.

### `domains`

| Name | Type | Required |
| --- | --- | --- |
| `domains` | `string[]` or `"all"` | required |

`domains` can be either a domain list or the string `"all"`, which permits all domains.

### `enableMessageBridge`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableMessageBridge` | `"no"` or `"localAndRemote"` | optional | `"no"` |

`enableMessageBridge` controls whether the plugin and webview may use the message API to communicate.

For deeper API details, see [WebView API reference](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md), or start from the `webview-starter` template plugin in UDT.

### `LaunchProcessPermission`

`LaunchProcessPermission` lists schemes and extensions that the plugin may launch. For browser launching, include schemes such as `"http"` and `"https"`.

```json
{
  "schemes": ["http", "https"],
  "extensions": ["pdf"]
}
```

| Required Properties | Optional Properties |
| --- | --- |
| [`schemes`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#schemes) |  |
| [`extensions`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#extensions) |  |

### `schemes`

| Name | Type | Required |
| --- | --- | --- |
| `schemes` | `string[]` | required |

`schemes` is a list of launchable schemes, such as `["http", "https", "mailto"]`.

### `extensions`

| Name | Type | Required |
| --- | --- | --- |
| `extensions` | `string[]` | required |

`extensions` lists launchable extensions, such as `["pdf", "png", "jpg"]`. This applies only to local files that use the `file://` schema.

More information is available in the [launch process recipe](uxp-external-process.md).

### `IpcPermission`

`IpcPermission` declares which IPC channels the plugin may use.

```json
{
  "enablePluginCommunication": true
}
```

### `enablePluginCommunication`

| Name | Type | Required |
| --- | --- | --- |
| `enablePluginCommunication` | `boolean` | required |

This setting enables plugin-to-plugin communication. The [inter plugin communication tutorial](uxp-tutorials-2.md) provides additional detail.

### `FeatureFlags`

`FeatureFlags` lists experimental capabilities available to the plugin.

```json
{
  "enableFillAsCustomAttribute": true,
  "enableSWCSupport": true,
  "enableAlerts": true
}
```

| Required Properties | Optional Properties |
| --- | --- |
|  | [`enableFillAsCustomAttribute`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enablefillascustomattribute) |
|  | [`enableSWCSupport`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enableswcsupport) |
|  | [`enableAlerts`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enablealerts) |

### Properties

### `enableFillAsCustomAttribute`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableFillAsCustomAttribute` | `boolean` | optional | `false` |

`enableFillAsCustomAttribute` allows an SVG `fill` attribute to use a CSS variable.

```html
<svg width="100" height="100">
  <rect width="100" height="100" fill="var(--iconColor, red)" />
</svg>
```

With the following CSS:

```css
:root {
  --iconColor: blue;
}
```

### `enableSWCSupport`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableSWCSupport` | `boolean` | optional | `false` |

`enableSWCSupport` permits use of [Spectrum Web Components](uxp-api-2.md). Components still need to be installed and imported separately.

```html
<sp-button variant="primary"> Click me </sp-button>
```

You must **manually install** the library with `npm` or `yarn`, **import** the components, for example with `import '@spectrum-web-components/button/sp-button.js'`, and **bundle** the plugin code using a tool such as [Webpack](https://webpack.js.org/) or [Esbuild](https://esbuild.github.io/) so the components are included.

### `enableAlerts`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableAlerts` | `boolean` | optional | `false` |

`enableAlerts` allows simple dialogs through [`alert()`](uxp-html-dom.md), [`prompt()`](uxp-html-dom-2.md), and [`confirm()`](uxp-html-dom.md).
