# `EntrypointDefinition`

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
