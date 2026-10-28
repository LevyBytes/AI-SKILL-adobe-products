# `localFileSystem`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `localFileSystem` | `"plugin"` or `"request"` or `"fullAccess"` | optional | `"plugin"` |

`localFileSystem` determines how the plugin may use the filesystem. Detailed examples are in the [Filesystem Operations recipe](../filesystem-operations/reference-index.md).

- `"plugin"`: limits filesystem access to plugin folders, including the plugin's installation directory, data folder, and temporary folder.
- `"request"`: permits the plugin to ask users for filesystem access.
- `"fullAccess"`: allows filesystem access without prompting for it.

When omitted, `localFileSystem` defaults to `"plugin"`.
