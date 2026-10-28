# Document

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Represents one Photoshop document that is open.
Document instances are reachable through these approaches:

```javascript
const { app, constants } = require("photoshop");

// The currently active document from the Photoshop object
const currentDocument = app.activeDocument;

// Choose one of the open documents from the Photoshop object
const secondDocument = app.documents[1];

// You can also create an instance of a document via a UXP File entry
let fileEntry = require("uxp").storage.localFileSystem.getFileForOpening();
const newDocument = await app.open("/project.psd");
```
