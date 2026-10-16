# Summary

Multiple panels let a larger plugin be split into separate, purpose-built interfaces, with each surface available to users on its own.

**Key Takeaways:**

1. **Declare multiple entrypoints** in `manifest.json`; each one should use `type: "panel"` for a panel entry.
2. **Structure the HTML with wrappers**: Add `id` attributes where a panel needs to be targeted or controlled dynamically.
3. **Use the `show()` hook** to place panel markup into the DOM at display time. When possible, pair it with `hide()` so hidden panels remove their added content.
4. **Use `pluginManager.showPanel()`** to display another panel from the current one in code; IPC permissions must be enabled. This mechanism opens panels only and does not close them.
