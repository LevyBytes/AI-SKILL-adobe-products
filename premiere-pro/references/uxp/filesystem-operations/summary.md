# Summary

1. **The Sandbox Model**: Without added permissions, plugins can reach only safe locations: the plugin folder, data folder, and temporary folder. The plugin folder is read-only; data and temporary folders allow reads and writes, though temporary storage may be cleared automatically.

2. **File System Permissions**: In `manifest.json`, set `localFileSystem` to one of three values:

   - `"plugin"`: only sandbox locations are available; this is the default and safest choice.
   - `"request"`: file picker dialogs let users choose files and folders; prefer it for user-owned data.
   - `"fullAccess"`: broad file-system access; use rarely because it can discourage installation.

3. **URL Schemes**: UXP supplies shortcuts for file-system locations:

   - `plugin:/` points at the plugin folder (read-only).
   - `plugin-data:/` points at persistent plugin data.
   - `plugin-temp:/` points at temporary storage.
   - `file:/` points at absolute paths and requires `"fullAccess"`.

4. **Two File System APIs**: Pick the API that matches the task:

   - **LocalFileSystem API**: object-based API using Entry references (`File` and `Folder` objects), useful for repeated operations, directory traversal, and metadata work.
   - **fs module**: Node.js-style path API, suited to quick one-step operations and simple read/write jobs.

5. **Persistent Access with Tokens**: If a user grants access through `"request"`, create session tokens for temporary reuse or persistent tokens for reuse across sessions, avoiding repeated prompts for the same locations.

6. **Common Patterns**:

   - Configuration files in the plugin folder can be loaded with `fs.readFile("plugin:/config.json")`.
   - Plugin state can be saved through `fs.writeFile("plugin-data:/state.json")`.
   - User-selected files should go through `localFileSystem.getFileForOpening()` with `"request"` permission.
   - Batch operations fit the `LocalFileSystem` API when folder traversal is involved.
   - Remembered user selections should be represented as persistent tokens stored in `localStorage`.
