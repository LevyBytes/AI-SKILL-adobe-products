# Samples - Using a file picker

For file output, a script can open a save picker and write content through the selected file entry. 

Canceling the save picker leaves the filesystem unchanged.

```javascript
const fs = require('uxp').storage.localFileSystem;
try {
    // save file to a location using file picker
    const file = await fs.getFileForSaving("demo.txt");
    if (file) await file.write("Hello World! This is demo.");
} catch (e) {
    console.log(e);
}
```
