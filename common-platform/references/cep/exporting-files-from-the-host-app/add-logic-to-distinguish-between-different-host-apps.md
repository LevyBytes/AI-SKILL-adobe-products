# Add logic to distinguish between different host apps

Because host-side scripting APIs vary across applications, branch the work according to the app running the extension:

Complete example files:

- [illustrator-export.jsx](../examples/document-export/host/illustrator-export.jsx)
- [photoshop-export.jsx](../examples/document-export/host/photoshop-export.jsx)
- [indesign-export.jsx](../examples/document-export/host/indesign-export.jsx)
- [export-documents.jsx](../examples/document-export/host/export-documents.jsx)
- [export-panel.js](../examples/document-export/client/export-panel.js)
- [export-panel.html](../examples/document-export/client/export-panel.html)
- [export-panel.css](../examples/document-export/client/export-panel.css)
- [manifest.xml](../examples/document-export/CSXS/manifest.xml)
- [example-guide.md](../examples/document-export/example-guide.md)

With that branch in place, the extension can behave differently in Illustrator, Photoshop, and InDesign.
