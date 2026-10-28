# `launchProcess`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `launchProcess` | [`LaunchProcessPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#launchprocesspermission) | optional | `undefined` |

`launchProcess` allows process launching through APIs such as `require("uxp").shell.openPath()` or `shell.openExternal()`.

If unset, the value is `undefined`, which disables process launching. Consult [`LaunchProcessPermission`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#launchprocesspermission); practical examples are also in the [launch process recipe](../external-process/reference-index.md).
