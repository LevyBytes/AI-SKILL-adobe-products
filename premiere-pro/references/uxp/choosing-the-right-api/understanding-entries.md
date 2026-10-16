# Understanding Entries

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
