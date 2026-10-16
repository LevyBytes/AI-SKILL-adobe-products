# Changes to top-level metadata

For the v5 upgrade, top-level metadata is one place where key behavior changed. Read [manifest v4](../uxp-manifest-v4.md) for details about the individual fields.

| Key path | Type | Description | Change |
| --- | --- | --- | --- |
| `version` | string | Version number of your plugin in `x.y.z` format. | Plugins can specify semver format with no warnings. Specify at least one number and the minor and/or patch will be autofilled with zeroes. `requiredPermissions` object Declare [plugin permissions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/uxp-guide/uxp-misc/manifest-v5/index.md#plugin-permissions). New in v5. |
| `entrypoints` | `EntryPointDefinition[]` | Describes the entries your plugin adds to the _Plugins_ menu and plugin panel. | v5 changes in next section. |
