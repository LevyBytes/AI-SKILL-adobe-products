# Summary

Inter-plugin communication lets UXP plugins in Adobe Premiere call commands and display panels that belong to other installed plugins.

**Key Concepts:**

1. **Requester plugin**: This plugin starts the exchange and needs `enablePluginCommunication: true` in `manifest.json`.
   - **Plugin Manager**: Use `pluginManager.plugins` to locate installed plugins and keep a reference to the target by `id`.
   - **Communication methods**: Call `invokeCommand()` for command execution and `showPanel()` when the target plugin's panel should be shown.
2. **Responder plugin**: This plugin handles incoming requests, declares the relevant entrypoints in its manifest, needs no special permission, and implements those entrypoints in code.
