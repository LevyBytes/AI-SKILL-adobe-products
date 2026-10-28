# Document changes

Add details to the InDesign document.

The workflow creates a new document, sets page margins, then defines and applies master pages. This figure is a block diagram for the objects used in the example.

[Figure: InDesign object model](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/document-changes/image2.png)

The object model entries usually map to user-interface control names, as the next diagram shows:

[Figure: InDesign object model](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/document-changes/image3.png)

```js
const { app } = require("indesign");
let myDocument = app.documents.add();
```
