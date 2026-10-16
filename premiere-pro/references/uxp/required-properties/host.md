# `host`

| Name | Type | Default |
| --- | --- | --- |
| `host` | [`HostDefinition`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#hostdefinition) | - |

The host object declares which host application versions are compatible with the plugin. Incompatible plugins will:

- fail installation in the specified host
- be hidden from the in-app plugin marketplace for the specified host
- be blocked from update when the update is no longer compatible.

See the [HostDefinition](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#hostdefinition) section for additional details.

**Only during development**, for convenience, `host` can be assigned an array of `HostDefinition` objects so the plugin can load in multiple applications at the same time. See the [Package with the UXP Developer Tool](../package-a-uxp-plugin/package-with-the-uxp-developer-tool.md) section for more details.
