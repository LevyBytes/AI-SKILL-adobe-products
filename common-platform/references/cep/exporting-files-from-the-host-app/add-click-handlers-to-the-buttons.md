# Add click handlers to the buttons

Next, attach click handlers to all four buttons:

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

Each handler binds an anonymous function to the click event, and that function calls `exportWithType()`. A later section creates this helper.
