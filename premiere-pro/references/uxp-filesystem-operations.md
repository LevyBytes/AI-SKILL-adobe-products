# Filesystem Operations

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

UXP includes APIs for file reading, writing, creation, and deletion. The sections below cover the concepts, permissions, and working examples needed to perform file-system tasks from plugins.

## Understand File System Access

### The Sandbox Model

By default, UXP limits file-system reach through a security model. The protected set of locations available without extra permissions is the **sandbox**.

**In plugins**, the sandbox includes:

- **Plugin folder**: the directory where the plugin is installed (read-only)
- **Data folder**: durable storage for data owned by the plugin
- **Temporary folder**: short-lived storage that can be removed automatically

Treat the Temporary folder as _transitory_, because UXP may clear it automatically. The Data folder is _persistent_ through app upgrades, but uninstalling the plugin or user cleanup can remove it. Give users a way to save critical backups in locations they choose.

Many plugins can stay inside the sandbox. When access is needed elsewhere, such as a user's Documents folder or a project-specific directory, UXP uses a **permission-based system**.

### File System Permissions

File-system access requires a `localFileSystem` declaration in the plugin's `manifest.json`.

Before you proceed

Before adding file operations to a plugin, review how [Manifest permissions](uxp-manifest.md) are defined and enforced.

The detailed [`PermissionsDefinition` reference](uxp-manifest.md) covers the permission choices and their security effects.

The `localFileSystem` permission accepts three values:

- **`"plugin"`** (default): limits the plugin to sandbox locations. The installation directory, data folder, and temporary folder remain available.
- **`"request"`**: lets the plugin ask the user for access through file picker dialogs.
- **`"fullAccess"`**: permits unrestricted access across the user's file system.

Declare the permission in `manifest.json` like this:

```json
{
  // ...
  "requiredPermissions": {
    "localFileSystem": "plugin"
  }
  // ...
}
```

Best practices for permissions

Match the permission level to the actual use case as tightly as possible. Future UXP behavior may ask users for explicit approval based on requested permissions.

Although `"fullAccess"` can look convenient, many users will reject broad file-system access unless the plugin clearly needs it, and they may decline the install. Choose `"request"` for user-chosen files, and use `"plugin"` (or omit `localFileSystem`, which defaults to `"plugin"`) when sandbox storage is enough.

### URL Schemes

UXP exposes shortcut URL schemes for common file-system locations:

| Scheme | Description | Permission Required |
| --- | --- | --- |
| `plugin:/` | Plugin installation folder (read-only) | `"plugin"` |
| `plugin-data:/` | Plugin data folder (read-write) | `"plugin"` |
| `plugin-temp:/` | Plugin temporary folder (read-write) | `"plugin"` |
| `file:/` | Arbitrary file system location (full path) | `"fullAccess"` |

These schemes work from HTML and JavaScript:

```html
<img src="plugin:/icons/logo.png" />
<img src="file:/Users/user/Downloads/sample.png" />
```

```javascript
const dataFile = await localFileSystem.getEntryWithUrl("plugin-data:/settings.json");
```

## Choosing the Right API

UXP offers two file-system APIs, with each one fitting a different style of work:

| API | Best For | Access Pattern |
| --- | --- | --- |
| **LocalFileSystem** | Multiple operations on the same file | Object references |
| **FS Module** | Single, direct file operations | Path-based |

### The `LocalFileSystem` API

`LocalFileSystem` is an object-oriented API built around **Entry references**, where objects stand for files and folders. Use it when repeated actions target the same file or when the plugin needs to walk folder structures.

**Access the API:**

```javascript
const { localFileSystem, types } = require("uxp").storage;
```

### Understanding Entries

Two item categories exist in the file system: files and folders. UXP models them through the `File` and `Folder` classes, which both inherit from `Entry`.

Because some calls return an `Entry` whose concrete kind is known only at runtime, check the type before calling methods that apply only to files or folders:

```javascript
const { localFileSystem, types } = require("uxp").storage;

async function createFileInFolder() {
  try {
    // Create a folder entry
    const folderEntry = await localFileSystem.createEntryWithUrl("plugin-temp:/myFolder", {
      type: types.folder,
    });

    // Verify it's a folder before using folder-specific methods
    if (folderEntry.isFolder) {
      const newFile = await folderEntry.createFile("data.txt", { overwrite: true });
      await newFile.write("This is sample content.");
      console.log(`File created at: ${newFile.nativePath}`);
    }
  } catch (e) {
    console.error("Failed to create file:", e);
  }
}
```

### The `fs` module

`fs` gives UXP a path-oriented API that resembles [Node.js file system operations](https://nodejs.org/api/fs.html). It fits direct, one-step jobs such as loading a config file or writing an output file.

**Access the API:**

```javascript
const fs = require("fs");
```

The next sections show practical examples for the available permission levels.

## Working with LocalFileSystem

### Example 1: Accessing the Sandbox

For plugins that only touch files inside their own sandbox, choose the `"plugin"` permission level, or leave out `localFileSystem` because it already defaults to `"plugin"`.

### index.js

```js
const { localFileSystem } = require("uxp").storage;

async function accessPluginDataFolder() {
  // Access the plugin's data folder
  try {
    const dataFolder = await localFileSystem.getEntryWithUrl("plugin-data:/");
    console.log(`Data folder path: ${dataFolder.nativePath}`);

    // List all files in the data folder
    const entries = await dataFolder.getEntries();
    console.log(`Found ${entries.length} items in data folder`);

    for (const entry of entries) {
      console.log(`- ${entry.name} (${entry.isFile ? "file" : "folder"})`);
    }
  } catch (e) {
    console.error("Failed to access data folder:", e);
  }
}
```

### manifest.json

```json
{
  "manifestVersion": 5,
  // ...
  "requiredPermissions": {
    "localFileSystem": "plugin"
  }
  // ...
}
```

### Example 2: Accessing Arbitrary Locations

Use `"fullAccess"` when a plugin truly needs unrestricted file-system access. With that permission, address locations through absolute paths using the `file:/` scheme.

### index.js

```js
const { localFileSystem } = require("uxp").storage;

async function accessUserDocuments() {
  // Access a specific location outside the sandbox
  try {
    // For macOS
    const documentsFolder = await localFileSystem.getEntryWithUrl(
      "file:/Users/user/Documents", // ðŸ‘ˆ update with your user
    );
    // For Windows, use: "file:/C:/Users/user/Documents"

    console.log(`Documents folder path: ${documentsFolder.nativePath}`);

    // Read a specific file
    const configFile = await localFileSystem.getEntryWithUrl(
      "file:/Users/user/Documents/config.json", // ðŸ‘ˆ update with your user
    );
    if (configFile.isFile) {
      const content = await configFile.read();
      console.log("Config file content:", content);
    }
  } catch (e) {
    console.error("Failed to access documents folder:", e);
  }
}
```

### manifest.json

```json
{
  "manifestVersion": 5,
  // ...
  "requiredPermissions": {
    "localFileSystem": "fullAccess"
  }
  // ...
}
```

Users may be cautious about installing plugins that ask for `"fullAccess"`. Reserve that level for cases where it is genuinely required, and consider `"request"` when user-selected files or folders are enough.

### Example 3: User-Selected Locations

The friendliest pattern is to let users pick the files or folders the plugin can use. Pair the `"request"` permission level with picker dialogs.

### index.js

```js
const { localFileSystem, domains, fileTypes } = require("uxp").storage;

async function openUserSelectedFile() {
  // Present a file picker starting at the user's Desktop
  try {
    const file = await localFileSystem.getFileForOpening({
      initialDomain: domains.userDesktop,
      types: fileTypes.text,
    });

    if (!file) {
      console.log("User cancelled file selection");
      return;
    }

    // Read the selected file
    const content = await file.read();
    console.log(`File content:\n${content}`);
    console.log(`File path: ${file.nativePath}`);
  } catch (err) {
    console.error("Failed to open file:", err);
  }
}

async function saveToUserSelectedLocation() {
  // Present a save dialog to let the user choose where to save
  try {
    const file = await localFileSystem.getFileForSaving("export.txt", {
      types: ["txt"],
    });

    if (!file) {
      console.log("User cancelled save operation");
      return;
    }

    // Write content to the selected location
    await file.write("This content was exported from the plugin.");
    console.log(`File saved to: ${file.nativePath}`);
  } catch (err) {
    console.error("Failed to save file:", err);
  }
}

async function selectFolderForExport() {
  // Let the user select a folder for batch export
  try {
    const folder = await localFileSystem.getFolder({
      initialDomain: domains.userDocuments,
    });

    if (!folder) {
      console.log("User cancelled folder selection");
      return;
    }

    // Create multiple files in the selected folder
    for (let i = 1; i <= 3; i++) {
      const file = await folder.createFile(`export_${i}.txt`, { overwrite: true });
      await file.write(`Content for file ${i}`);
    }

    console.log(`Created 3 files in: ${folder.nativePath}`);
  } catch (err) {
    console.error("Failed to export files:", err);
  }
}
```

### manifest.json

```json
{
  "manifestVersion": 5,
  // ...
  "requiredPermissions": {
    "localFileSystem": "request"
  }
  // ...
}
```

### Domain tokens

In the example, `domains.userDesktop` starts the picker in the user's Desktop folder. Other domain tokens include `domains.userDocuments`, `domains.userDownloads`, and more; the [Domain Tokens](uxp.md) reference lists the full set.

### Example 4: Remembering User Selections with Tokens

After a user grants file or folder access, the plugin can create tokens for those locations so the user does not have to repeat the same selection in later sessions.

UXP provides two types of tokens:

- [**Session tokens**](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md): remain valid until the plugin unloads or the host application exits.
- [**Persistent tokens**](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md): continue across sessions until the plugin is uninstalled.

```javascript
const { localFileSystem, domains, fileTypes } = require("uxp").storage;

async function selectAndRememberFile() {
  try {
    // Let the user select a file
    const file = await localFileSystem.getFileForOpening({
      initialDomain: domains.userDesktop,
      types: fileTypes.text,
    });

    if (!file) {
      console.log("User cancelled file selection");
      return;
    }

    // Create a persistent token for this file
    const token = await localFileSystem.createPersistentToken(file);

    // Store the token for future use (e.g., in localStorage)
    localStorage.setItem("selectedFileToken", token);

    console.log(`File selected and token saved: ${file.nativePath}`);
  } catch (err) {
    console.error("Failed to create token:", err);
  }
}

async function readPreviouslySelectedFile() {
  try {
    // Retrieve the token from storage
    const token = localStorage.getItem("selectedFileToken");

    if (!token) {
      console.log("No previously selected file found");
      return;
    }

    // Access the file using the token
    const file = await localFileSystem.getEntryForPersistentToken(token);

    // Read the file content
    const content = await file.read();
    console.log(`File content:\n${content}`);
  } catch (err) {
    console.error("Failed to read file using token:", err);
    // Token may be invalid if file was deleted or moved
    localStorage.removeItem("selectedFileToken");
  }
}
```

Token Storage

Put tokens in [`localStorage`](uxp-global-members.md) or in the plugin's data folder so they remain available between sessions. Code should handle invalidated tokens, such as when the selected file is deleted or moved.

### `LocalFileSystem` API Reference

For full API details, see:

- [FileSystemProvider](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md): primary interface used for file-system operations.
- [Entry](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry.md): base class shared by files and folders.
- [File](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md): operations that apply to files.
- [Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/folder.md): operations that apply to folders.
- [EntryMetadata](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry-metadata.md): metadata for files and folders.
- [Path](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/path/index.md): utilities for manipulating paths.

## Working with the `fs` module

The `fs` module supplies a direct path-based interface similar to [Node.js](https://nodejs.org/api/fs.html). Use it for simple one-step work.

### Example 5: Reading from the Sandbox

Use a URL scheme when reading a sandbox file directly:

### index.js

```js
const fs = require("fs");

async function readConfigFile() {
  // Read a configuration file from the plugin folder
  try {
    const content = await fs.readFile("plugin:/config.json", "utf8");
    const config = JSON.parse(content);
    console.log("Configuration loaded:", config);
  } catch (e) {
    console.error("Failed to read config file:", e);
  }
}

async function writeToDataFolder() {
  // Write data to the plugin's data folder
  try {
    const data = {
      lastRun: new Date().toISOString(),
      version: "1.0.0",
    };

    await fs.writeFile("plugin-data:/state.json", JSON.stringify(data, null, 2), "utf-8");

    console.log("State saved successfully");
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}
```

### manifest.json

```json
{
  "manifestVersion": 5,
  // ...
  "requiredPermissions": {
    "localFileSystem": "plugin"
  }
  // ...
}
```

The example shows that the `plugin:/` URL scheme works with both `fs` and `localFileSystem` APIs.

### Example 6: Writing to Arbitrary Locations

With absolute paths, files can be written anywhere the plugin is allowed to reach:

### index.js

```js
const fs = require("fs");

async function exportToDesktop() {
  // Export data to the user's Desktop
  try {
    const exportData = "Exported data from plugin";

    // For macOS
    await fs.writeFile(
      "/Users/user/Desktop/export.txt", // ðŸ‘ˆ update with your user
      exportData,
      { encoding: "utf-8" },
    );
    // For Windows, use: "C:/Users/user/Desktop/export.txt"

    console.log("File exported to Desktop");
  } catch (e) {
    console.error("Failed to export file:", e);
  }
}

async function readFromDesktop() {
  // Read a file from the user's Desktop folder
  try {
    // For macOS
    const content = await fs.readFile(
      "/Users/user/Desktop/export.txt", // ðŸ‘ˆ update with your user
      "utf8",
    );
    // For Windows, use: "C:/Users/user/Desktop/export.txt"

    console.log("File content:", content);
  } catch (e) {
    console.error("Failed to read file:", e);
  }
}
```

### manifest.json

```json
{
  "manifestVersion": 5,
  // ...
  "requiredPermissions": {
    "localFileSystem": "fullAccess"
  }
  // ...
}
```

### `fs` module API Reference

For full API details, see:

- [`fs` module](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/fs/index.md): full reference for the file-system API.
- [`path`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/path/index.md): utilities for path manipulation.

## Additional Considerations

### Operating System Limitations

Some system locations can remain blocked by the operating system even when `"fullAccess"` is declared:

- **macOS and Windows**: usually permit access to most locations the user can reach.
- **UWP (Windows Store apps)**: blocks access to system folders.

Handle file-system failures cleanly and tell users when permission is denied. System security rules can still prevent a plugin from reaching particular locations, even if the manifest permission is correct.

### Best Practices

1. **Choose the right permission level**: begin with `"plugin"`, move to `"request"` when needed, and reserve `"fullAccess"` for cases that truly require it.
2. **Handle errors gracefully**: wrap file operations in try-catch blocks every time.
3. **Validate file paths**: confirm that a file exists before reading it.
4. **Use appropriate encoding**: pass `"utf-8"` for text files so characters are interpreted correctly.
5. **Provide user feedback**: display progress indicators for operations that take time.
6. **Clean up temporary files**: remove temporary files once they are no longer required.

### When to Use Each API

| Use Case | Recommended API |
| --- | --- |
| Multiple operations on the same file | LocalFileSystem |
| Traversing directory structures | LocalFileSystem |
| Working with file metadata | LocalFileSystem |
| Creating persistent tokens | LocalFileSystem |
| Quick read/write operations | FS Module |
| Simple path-based operations | FS Module |
| Familiarity with Node.js fs API | FS Module |

## Reference Material

- [FileSystemProvider](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file-system-provider.md): primary interface used for file-system operations.
- [Entry](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry.md): base class shared by files and folders.
- [File](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md): operations that apply to files.
- [Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/folder.md): operations that apply to folders.
- [EntryMetadata](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry-metadata.md): metadata for files and folders.
- [`fs` module](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/fs/index.md): full reference for the file-system API.
- [Path](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/path/index.md): utilities for path manipulation.
- [LocalStorage](uxp-global-members.md): persistent data storage location for tokens.
- [Manifest Permissions](uxp-manifest.md): explanation of the available permission fields.
- [Local File System Permission](uxp-manifest.md): expanded documentation for this permission.

## Summary

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
