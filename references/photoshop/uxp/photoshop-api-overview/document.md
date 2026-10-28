# Document

Use `Document` for one open Photoshop document. It exposes layers, dimensions, resolution, and related operations; it can also be cropped, resized, rotated, saved, and have layers added, deleted, or duplicated.

Read dimensions from the active document:

```javascript
const app = require("photoshop").app;
const myDoc = app.activeDocument;
const height = myDoc.height;
const width = myDoc.width;
const resolution = myDoc.resolution;
console.log(`Doc size is ${width} x ${height}. Resolution is ${resolution}`);
```

Flatten every document that is currently open:

```javascript
const app = require("photoshop").app;
const toFlatten = app.documents;
async function flattenThem(executionContext) {
  toFlatten.forEach((photoshopDoc) => {
    photoshopDoc.flatten();
  });
}

await require("photoshop").core.executeAsModal(flattenThem);
```

Add a layer:

```javascript
const app = require("photoshop").app;
async function newColorDodgeLayer(executionContext) {
  await app.activeDocument.createLayer({ name: "myLayer", opacity: 80, blendMode: "colorDodge" });
}

await require("photoshop").core.executeAsModal(newColorDodgeLayer);
```

More `Document` details are covered in [Document](../document/reference-index.md); collection-level material is in [Documents](../host-api/documents/reference-index.md).
