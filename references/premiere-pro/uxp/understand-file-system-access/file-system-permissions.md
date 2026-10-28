# File System Permissions

File-system access requires a `localFileSystem` declaration in the plugin's `manifest.json`.

Before you proceed

Before adding file operations to a plugin, review how [Manifest permissions](../supporting-definitions/permissions-definition.md) are defined and enforced.

The detailed [`PermissionsDefinition` reference](../supporting-definitions/permissions-definition.md) covers the permission choices and their security effects.

The `localFileSystem` permission accepts three values:

- **`"plugin"`** (default): limits the plugin to sandbox locations. The installation directory, data folder, and temporary folder remain available.
- **`"request"`**: lets the plugin ask the user for access through file picker dialogs.
- **`"fullAccess"`**: permits unrestricted access across the user's file system.

Declare the permission in `manifest.json` like this:

```json
{
  "requiredPermissions": {
    "localFileSystem": "plugin"
  }
}
```

...

...

Best practices for permissions

Match the permission level to the actual use case as tightly as possible. Future UXP behavior may ask users for explicit approval based on requested permissions.

Although `"fullAccess"` can look convenient, many users will reject broad file-system access unless the plugin clearly needs it, and they may decline the install. Choose `"request"` for user-chosen files, and use `"plugin"` (or omit `localFileSystem`, which defaults to `"plugin"`) when sandbox storage is enough.
