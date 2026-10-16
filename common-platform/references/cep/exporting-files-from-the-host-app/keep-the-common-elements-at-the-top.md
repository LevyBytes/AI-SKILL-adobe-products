# Keep the common elements at the top

ExtendScript can work with the host app DOM and elements inside an open document, among other capabilities. DOM methods and properties differ by host app. Still, this extension targets three host applications that share several useful elements.

The shared code obtains the saved document path, constructs a destination beside it and checks that an export will not overwrite the source or an existing output.

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
