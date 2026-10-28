# `requiredPermissions`

| Name | Type | Default |
| --- | --- | --- |
| `requiredPermissions` | [`PermissionsDefinition`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#permissionsdefinition) | `{}` |

Declare here the permissions the plugin needs before it uses protected API areas. If a needed permission is missing, the API call can fail or throw. **Users will be asked for their consent** when a plugin invokes `openExternal()`, `openPath()`, or `<sp-link>` anchor tags; other permission grants happen during installation. See [PermissionsDefinition](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#permissionsdefinition) for the complete model.
