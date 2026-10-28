# Setting up a sample document

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
