# Example 4: Remembering User Selections with Tokens

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

Put tokens in [`localStorage`](../window-local-storage/reference-index.md) or in the plugin's data folder so they remain available between sessions. Code should handle invalidated tokens, such as when the selected file is deleted or moved.
