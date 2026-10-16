# UXP Entry Points

Plugins may expose several entry points. An entrypoint is the surface through which the plugin is invoked.

UXP recognizes two entry point categories: `commands` and `panels`.

- Commands are _"run and forget"_ entry points started by the user, for example from a menu item or keyboard shortcut.
- Panels provide a panel that the user opens from the UI, then continues to work with interactively.

The important distinction is persistence: panels can keep UI on screen, while commands run and then go away.

Both commands and panels may still display modal dialogs. A modal dialog is UI that prevents interaction with the rest of the application until the dialog closes, which makes it useful when the plugin needs user-supplied information.

[Figure: Mock up screenshot of a generic Adobe Creative cloud app with a modal dialog titled "Dialog UI" and a panel titled "Panel UI" being open](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/plugins/concepts/entry-points/ui-options.jpg)
