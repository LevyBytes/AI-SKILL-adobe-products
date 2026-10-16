# `PermissionsDefinition`

UXP's permission model requires plugins to declare the capabilities they need, which helps keep plugins secure. Any permission not declared explicitly is blocked by default.

Best practices

Choose the **most accurate permission** that fits the use case, because future consent prompts will be based on that declaration.

For file operations, `"fullAccess"` may look like the simplest choice because it is the least restrictive, but users may reject installation if full system access is unnecessary or uncomfortable for them.

| Required Properties | Optional Properties |
| --- | --- |
|  | [`clipboard`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#clipboard) |
|  | [`localFileSystem`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#localfilesystem) |
|  | [`network`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#network) |
|  | [`webview`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#webview) |
|  | [`launchProcess`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#launchprocess) |
|  | [`allowCodeGenerationFromStrings`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#allowcodegenerationfromstrings) |
|  | [`enableUserInfo`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enableUserInfo) |
|  | [`ipc`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#ipc) |
|  | [`enableAddon`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enableaddon) |

### Properties
