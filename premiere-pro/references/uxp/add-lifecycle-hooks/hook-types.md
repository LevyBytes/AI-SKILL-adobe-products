# Hook Types

UXP defines lifecycle hooks at two scopes:

- At a **Plugin level**, the plugin container has callbacks for creation and teardown: `create()` and `destroy()`.
- At a **Panel level**, panels have callbacks for creation, display, hiding, and teardown: `create()`, `show()`, `hide()`, and `destroy()`.

See [Entrypoints concept guide](../uxp-entrypoints/reference-index.md) for more detail about hook categories.

Premiere limitations

In Premiere, the `hide()` and `destroy()` hooks do **not yet behave as expected**; a later update is planned to correct this.

For plugins that include several panels, **lifecycle hooks currently fire for all panels** and do not identify which panel caused the event.
