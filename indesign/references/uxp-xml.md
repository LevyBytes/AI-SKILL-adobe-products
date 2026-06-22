# Xml

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

### Importing XML

After configuring XML import preferences through the [XMLImportPreference](https://developer.adobe.com/indesign/dom/api/x/XMLImportPreference/) API, import an XML file with a script fragment like this:

```js
const { app } = require("indesign");
let ufs = require("uxp").storage.localFileSystem;
let myDocument = app.documents.item(0);
//You'll have to fill in a valid file path for your system.
let folder = await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");
let filePath;
try {
  filePath = await folder.getEntry("sampleXML.xml");
} catch (error) {
  filePath = await folder.createEntry("sampleXML.xml");
}
myDocument = app.documents.item(0);
myDocument.xmlElements.item(0).importXML(filePath);
```

To bring XML file contents into one particular XML element, call that element's importXML method instead of the document-level method. The ImportXMLIntoElement tutorial script uses this code:

```js
const { app, SelectionOptions } = require("indesign");
let ufs = require("uxp").storage.localFileSystem;
let myDocument = app.documents.item(0);
//You'll have to fill in a valid file path for your system.
let folder = await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");
let filePath;
try {
  filePath = await folder.getEntry("sampleXML.xml");
} catch (error) {
  filePath = await folder.createEntry("sampleXML.xml");
}
myDocument = app.documents.item(0);
let myPage = app.activeWindow.activePage;
myDocument.importXML(filePath);
let myRootXMLElement = myDocument.xmlElements.item(0);
let myLastXMLElement = myRootXMLElement.xmlElements.item(-1);
//Select the XML element
myDocument.select(myLastXMLElement, SelectionOptions.replaceWith);
myDocument.xmlImportPreferences.importToSelected = true;
myDocument.importXML(filePath);
```

Another approach is to set the importToSelected property on xmlImportPreferences to true, select the XML element, and then import the XML file. The ImportXMLIntoSelectedElement tutorial script uses this pattern:

```js
const { app } = require("indesign");
let myDocument = app.documents.item(0);
let myXMLTag = myDocument.xmlTags.item("xml_element");
let myXMLElement = myDocument.xmlElements.item(0).xmlElements.add(myXMLTag);
myDocument.select(myXMLElement);
myDocument.xmlImportPreferences.importToSelected = true;
//Import into the selected XML element.
myDocument.importXML(filePath);
```

### Loading XML tags

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

### Saving XML tags

The same kind of external-file workflow works in reverse for XML tags. Saving tags writes only the tag definitions into the XML file, without document content; compared with exporting XML, that makes the operation faster and the output file smaller. SaveXMLTags contains the complete script, and this sample line shows the call:

```js
//You'll have to fill in a valid file path for your system.
myDocument.saveXMLTags(filePath);
```

## XML Rules

### Setting up a sample document

```js
const { app } = require("indesign");
let ufs = require("uxp").storage.localFileSystem;
let myDocument = app.documents.item(0);
let folder = await ufs.getEntryWithUrl("file:c:/Users/uxp/Desktop");
let filePath;
try {
  filePath = await folder.getEntry("sampleXML.xml");
} catch (error) {
  filePath = await folder.createEntry("sampleXML.xml");
}

main();
function main() {
  let myDocument = app.documents.add();
  myDocument.xmlImportPreferences.allowTransform = false;
  myDocument.xmlImportPreferences.ignoreWhitespace = true;
  myDocument.importXML(filePath);
  let myBounds = myGetBounds(myDocument, myDocument.pages.item(0));
  myDocument.xmlElements.item(0).placeIntoFrame(myDocument.pages.item(0), myBounds);
  function myGetBounds(myDocument, myPage) {
    let myWidth = myDocument.documentPreferences.pageWidth;
    let myHeight = myDocument.documentPreferences.pageHeight;
    let myX1 = myPage.marginPreferences.left;
    let myY1 = myPage.marginPreferences.top;
    let myX2 = myWidth - myPage.marginPreferences.right;
    let myY2 = myHeight - myPage.marginPreferences.bottom;
    return [myY1, myX1, myY2, myX2];
  }
  function myGetScriptPath() {
    try {
      return app.activeScript;
    } catch (myError) {
      console.log(myError);
    }
  }
}
```
