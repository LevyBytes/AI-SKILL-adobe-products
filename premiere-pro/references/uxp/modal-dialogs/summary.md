# Summary

Modal dialogs are temporary blocking windows that require a response before the user resumes work in Premiere, making them useful for decisions, forms, and alerts.

**Key Concepts:**

1. **Basic structure**: A modal dialog is a `<dialog>` HTML element opened with `uxpShowModal()`, which returns a Promise resolved when the dialog closes.
2. **Two primary use cases**:
   - **Command UIs**: Supply UI for command entrypoints without keeping panels around.
   - **Panel dialogs**: Launch extra UI from panels to collect input or present information.
3. **Multiple and chained dialogs**: A panel can launch several independent modal dialogs, with only one open at a time, and a dialog can open another dialog in a chained flow.
4. **Dialog lifecycle**: Use `dialog.close(value)` to dismiss a dialog and return data to the caller. Handle `"reasonCanceled"` when a user closes by title bar control or Esc.
5. **Best practices**: For larger dialogs, use the Singleton pattern to avoid duplicate DOM nodes and handlers. Load external HTML with `fetch()` and scope CSS to prevent style collisions.
