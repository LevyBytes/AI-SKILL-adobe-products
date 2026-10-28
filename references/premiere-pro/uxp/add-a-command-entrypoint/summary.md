# Summary

Commands add clickable items under **Window > UXP Plugins > `<pluginName>`**. Those items can run any code and may open a modal dialog UI.

**Key Steps:**

1. **Register the entrypoint**: In `manifest.json`, add an entrypoint whose type is `command`, with both an `id` and a `label`.
2. **Create the handler**: Implement the JavaScript function that should run when the command is invoked.
3. **Associate entrypoint and handler**: Choose one of these options:
   - `entrypoints.setup()`: Recommended when a plugin uses multiple entrypoint types.
   - `module.exports`: Simpler when the plugin contains only commands.
