# Photoshop Application

The [`app`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/index.md#overview) object is the entry point for the other Photoshop objects and methods.

To retrieve the active document:

```javascript
const doc = app.activeDocument;
```

To collect every open document as an array:

```javascript
const allDocuments = app.documents;
```

Additional `app` properties and methods are listed under [Photoshop](../host-api/application/photoshop.md).
