# B. Use `module.exports`

This approach is especially convenient for smaller plugins that contain only command entrypoints, do not rely on UIs, and therefore do not need an HTML file.

In that case, set the `main` property in `manifest.json` to the path for `index.js`. Then, in `index.js`, export an object whose `commands` property maps command IDs to their handlers.
