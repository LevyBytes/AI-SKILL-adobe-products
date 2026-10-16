# Manifest Keys

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
