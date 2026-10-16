# Entrypoints

In UXP, an entrypoint is the host application's route for invoking a plugin component, either a command or a panel. Treat it as a two-part contract:

- A **Manifest file** declares how many entrypoints the plugin exposes and what types they are.
- Your **JavaScript code** responds through `entrypoints.setup()` and connects each entrypoint ID to the matching implementation.
