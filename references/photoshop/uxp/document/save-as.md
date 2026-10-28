# saveAs

• **saveAs**: _object_

Writes the document in the requested file format.

When a workflow needs a UXP File token, generate it through
[UXP storage APIs](https://www.adobe.com/go/ps-api-uxp-filesystemprovider).

```javascript
let entry = await require("uxp").storage.localFileSystem.getFileForSaving("target.psd");
document.saveAs.psd(entry);

// Save as a Copy (High JPG quality)
document.saveAs.jpg(entryJpg, { quality: 12 }, true);

// Save a PSB, with some options:
document.saveAs.psb(entryPsb, { embedColorProfile: true });
```
