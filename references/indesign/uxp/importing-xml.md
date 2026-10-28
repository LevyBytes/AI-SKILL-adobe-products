# Importing XML

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
