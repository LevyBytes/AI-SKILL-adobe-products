# PermissionsDefinition

UXP keeps plugins secure by requiring each plugin to declare the permissions it needs.

**Pro tip**

Choose the permission that most accurately matches your use case, because future consent prompts will be based on that choice. For file operations, `fullAccess` may look like the easiest option because it is least restrictive, but users may reject installation if they are asked for full system access when it is not absolutely necessary.

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `clipboard` | `"read" \| "readAndWrite"` | optional | Grants clipboard access. The [clipboard recipe](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/resources/recipes/clipboard/index.md) includes additional examples. Possible values: • `read`: allows clipboard reads.\\• `readAndWrite`: allows clipboard reads and writes. **Default value** `undefined` (no clipboard access) |
| `localFileSystem` | `"plugin" \| "request" \| "fullAccess"` | optional | Grants file-system access. The [file-operation recipe](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/resources/recipes/file-operation/index.md) shows a detailed example. Possible values: • `plugin`: limits access to the plugin folder.\\• `request`: asks the user for file-system access.\\• `fullAccess`: allows file-system access without requesting access. **Default value** `"plugin"` |
| `network` | `NetworkPermission` | optional | Grants network access, such as HTTP requests (XHR, fetch, etc.) or loading images (`<img src="" />`). **Default value** `undefined` (no network access) |
| `webview` | `WebviewPermission` | optional | Allows webviews in plugin UI for web content or complex interface surfaces. **Default value** `undefined` (no webview usage) |
| `launchProcess` | `LaunchProcessPermission` | optional | Allows process launches through APIs such as `require("uxp").shell.openPath()` or `shell.openExternal()`. **Default value** `undefined` (no process launching) |
| `allowCodeGenerationFromStrings` | `boolean` | optional | Permits code generation from strings. Use it when relying on HTML inline event handlers, `eval()`, or `new Function()` syntax. **Default value** `false` |
| `ipc` | `IpcPermission` | optional | Allows communication with other plugins. **Default value** `undefined` |
