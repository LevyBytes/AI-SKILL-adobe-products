# Summary

1. **Clipboard Security**: Plugins begin without system clipboard access. Declare clipboard permissions explicitly in `manifest.json`:
   - Use `"read"` when the plugin only needs read-only behavior, such as pasting content.
   - Use `"readAndWrite"` for workflows that both copy and paste.
   - Request the least-powerful option so installation approval has less friction.
2. **Using the API**: Work with the clipboard through `navigator.clipboard`:
   - **`setContent()`**: places data on the clipboard with MIME type objects such as `{ "text/plain": "text" }`.
   - **`getContent()`**: returns clipboard data in an object organized by MIME type keys.
   - Put clipboard calls inside `try...catch` blocks and pair them with `await` so errors are handled correctly.
