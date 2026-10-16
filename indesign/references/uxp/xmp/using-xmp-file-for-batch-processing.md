# Using XMPFile for batch processing

This example walks through image files in a folder and updates their metadata. For each picture, the script does the following:

Reads and parses metadata. When a file has no XMP metadata, legacy metadata is converted to XMP automatically.

Removes the existing creators list, then appends a new creator entry.

Saves the changed metadata back.

```javascript
async function updatePhotoCreators() {
    const { XMPConst, XMPFile } = require("uxp").xmp;
    const storage = require("uxp").storage;
    const folder = await storage.localFileSystem.getFolder({
        initialDomain: storage.domains.userDocuments
    });
    if (!folder) return;
    const files = await folder.getEntries();
    for (const file of files) {
        if (!file.isFile) continue;
        console.log("Process file: " + file.name);
        const xmpFile = new XMPFile(
            file.nativePath, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE
        );
        try {
            const xmp = xmpFile.getXMP();
            // Replace creator metadata while retaining other XMP properties.
            xmp.deleteProperty(XMPConst.NS_DC, "creator");
            xmp.appendArrayItem(
                XMPConst.NS_DC, "creator", "Judy", 0, XMPConst.ARRAY_IS_ORDERED
            );
            if (xmpFile.canPutXMP(xmp)) xmpFile.putXMP(xmp);
        } finally {
            xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);
        }
    }
}
module.exports = { updatePhotoCreators };
```

This module requires the UXP XMP API and local filesystem access. Call updatePhotoCreators() and await its returned promise. It replaces creator metadata in the selected folder’s files.
