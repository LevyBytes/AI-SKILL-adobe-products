# Modal execution with executeAsModal

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Starting with [apiVersion](photoshop-specific-manifest-properties/api-version.md) 2, plugins must enter a modal state before they alter Photoshop state. The modal guard blocks outside operations from interfering with the plugin and helps avoid unstable application state. Creating documents, changing documents, and updating UI or preference state are examples of work that needs modal execution.

Because Photoshop allows only one plugin to run `executeAsModal` at a time, a plugin holding that scope has exclusive access relative to other plugins also trying to call `executeAsModal`.

During `executeAsModal`, Photoshop switches into a modal user-interaction state that affects much of the UI. Some menu items are disabled as part of the same interference-prevention behavior.

After Photoshop grants a plugin modal scope, that plugin controls Photoshop, so options such as `modalBehavior` with `batchPlay` are no longer necessary.

Find `executeAsModal` in the Photoshop UXP API ["core" module](photoshop-core/reference-index.md).

```javascript
await require("photoshop").core.executeAsModal(targetFunction, options);
```
