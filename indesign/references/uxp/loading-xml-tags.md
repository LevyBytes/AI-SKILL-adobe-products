# Loading XML tags

XML tags can be loaded from an XML file without also importing the file's XML contents. This is useful when preparing tag-to-style or style-to-tag mappings before the XML data is imported. The LoadXMLTags tutorial script shows the pattern:

```js
const { app } = require("indesign");
let ufs = require("uxp").storage.localFileSystem;
let myDocument = app.documents.item(0);
//You'll have to fill in a valid file path for your system.
let folder = await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");
let filePath;
try {
  filePath = await folder.getEntry("sampleXML.indd");
} catch (error) {
  filePath = await folder.createEntry("sampleXML.indd");
}
myDocument.loadXMLTags(filePath);
```
