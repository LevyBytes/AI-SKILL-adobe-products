# Key Concepts

A plugin can provide several panels, and each one appears as its own menu entry under **Window** > **UXP Plugins** > **ThePluginName**. Each panel:

- Has a separate entrypoint definition in the manifest
- Can define its own size limits and settings
- Uses the same HTML document and JavaScript context
- Can communicate with sibling panels in the same plugin

IPC Permission

To support communication between panels and control panels programmatically, enable the `ipc` (Inter-Process Communication) permission in the manifest.

```json
{
  "requiredPermissions": {
    "ipc": {
      "enablePluginCommunication": true
    }
  }
}
```

...

...

For multiple panels, attach the correct content from the `show()` [lifecycle hook](../uxp-entrypoints/panel-lifecycle-hooks.md) when a panel is displayed. This keeps UI content organized and helps each panel show only its relevant interface.

Known Limitation

In Premiere, the `hide()` lifecycle hook is **not currently working as expected**. When a panel is hidden, its `hide()` callback may not run reliably. For now, rely on `show()` to attach content and remember that cleanup inside `hide()` may not execute. A later update is expected to fix this.
