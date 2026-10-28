# Manifest permission

File system access depends on permission for the `localFileSystem` module.

Plugins and Scripts

**In plugins**, request `localFileSystem` permission in the manifest. IMPORTANT: Review the [manifest permissions](../uxp-manifest/permissions-definition.md) module before continuing.

**In scripts**, `localFileSystem` permission is fixed. The manifest details in the examples below do not apply to scripts. These values are described in the [manifest fundamentals section](../uxp-manifest.md).

Here is a closer look at the manifest settings.

```json
{
  "requiredPermissions": {
    "localFileSystem": "plugin"
  }
}
```

manifest.json

Accepted `localFileSystem` values:

- `plugin`: Default value. Limits access to the sandbox.
- `request`: Allows prompting the user to choose a location.
- `fullAccess`: Opens access to the user file system

_Protip_: Choose the narrowest permission that fits the use case, because future versions may ask users to consent based on this value. `fullAccess` can seem safest because it removes restrictions, but users may reject a plugin install if it requests system-wide file access without a clear need.
