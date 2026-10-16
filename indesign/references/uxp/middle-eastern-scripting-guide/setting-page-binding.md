# Setting page binding

Roman publications normally bind documents on the left, while Arabic or Hebrew publications use right-side binding. InDesign Server can create documents bound on either the left edge or the right edge. In InDesign Scripting, the pageBinding property controls that setting. The property belongs to the DocumentPreferences object and accepts a PageBindingOptions enumeration value: default, leftToRight or rightToLeft.

This sample creates a document and then sets or reads page binding for that document. PageBinding contains the complete version.

```js
const { app, PageBindingOptions } = require("indesign");
let myDocument = app.documents.add();
with (myDocument) {
  //set number of pages
  documentPreferences.pagesPerDocument = 4;
  //set binding options for the document
  documentPreferences.pageBinding = PageBindingOptions.rightToLeft;
}
```
