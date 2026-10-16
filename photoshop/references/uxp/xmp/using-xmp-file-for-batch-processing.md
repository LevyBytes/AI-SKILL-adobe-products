# Using XMPFile for batch processing

This example walks a folder of image files and updates their metadata. For every picture, the script follows this sequence:

It reads and parses the metadata; when a file has no XMP block, legacy metadata is converted into XMP automatically.

It removes the current creator list, then appends a replacement creator value.

It saves the changed metadata back into the original file.

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
