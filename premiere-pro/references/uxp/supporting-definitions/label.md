# `label`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `label` | `string` or `LocalizedString` | required | - |

`label` supplies the user-facing name for the entrypoint, including places such as the plugin menu.

### `description`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `description` | `string` or `LocalizedString` | optional | `undefined` |

`description` provides longer explanatory text for host surfaces such as tooltips, where supported by the host app. If it is omitted, the plugin name becomes the default.
