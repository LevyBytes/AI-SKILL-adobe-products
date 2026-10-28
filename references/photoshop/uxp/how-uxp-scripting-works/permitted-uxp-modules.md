# Permitted UXP Modules

During plugin development, the `manifest.json` file declares the UXP modules the plugin wants to use. Photoshop manages script permissions internally, so scripts do not need manifest configuration.

**Scripts cannot reach every UXP module yet; Adobe plans to open additional modules in later UXP versions.** The supported modules listed here are active by default:

| UXP Module | Supported | Current Access Level | Sample |
| --- | --- | --- | --- |
| Fonts | Yes | Can read installed fonts | [View sample.](../samples-create-a-new-layer/samples-access-installed-fonts.md) |
| Clipboard | Yes | Can read and write | [View sample.](../samples-create-a-new-layer/samples-read-write-to-clipboard.md) |
| LocalFileSystem | Yes | File pickers can open or save files. The `getTemporaryFolder API` can also be called to reach a temporary data folder. | [View sample.](../samples-create-a-new-layer/samples-access-the-local-filesystem.md) |
| Network | No |  |  |
| LaunchProcess | No |  |  |
| WebView | No |  |  |
| IPC | No |  |  |

When a script needs UXP modules that scripts do not yet support, build a UXP plugin instead.
