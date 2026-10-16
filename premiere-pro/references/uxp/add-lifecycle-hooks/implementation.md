# Implementation

Define hooks through the `entrypoints.setup()` method. The object passed to it can include these properties:

- `plugin`: An object that contains the plugin lifecycle hooks.
- `panels`: An object keyed by the panel IDs from each `"panel"` entrypoint in `manifest.json`; each value contains that panel's lifecycle hooks.

Most callbacks may return Promises, as shown below. Panel hooks are passed a `rootNode` parameter. That value is the HTML document root node, so multi-panel plugins can add or remove the right container element programmatically.

### Example
