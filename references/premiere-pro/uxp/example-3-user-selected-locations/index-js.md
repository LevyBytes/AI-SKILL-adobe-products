# index.js

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
