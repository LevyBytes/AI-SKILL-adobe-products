# Updates to Entrypoints methods

With manifest v4:
- Entrypoint methods could not use promise-based implementations.
- Entrypoint methods had no timeout.
- Every panel entrypoint received only one argument, `event`, carrying `node`, `panel`, `eventName` and `PanelID`. Manifest v5 adds lifecycle events that help manage the plugin, and it gives panels more control over their initial view and placement:
- UXP honors promises returned by most entrypoint methods.
- **Plugin entrypoints**: Promise support applies to plugin `destroy`.
- **Panel entrypoints**: Promise support applies to panel `create`, `show`, `destroy`, `hide`.
- At present, panel `show` is bound to plugin `create`, while panel `hide` is bound to plugin `destroy`.
- Entrypoint methods have a 300 millisecond timeout.
- Panel entrypoints receive `rootNode` as argument one; for `show` and `hide`, `data` is passed as argument two.
