# Export the file formats

Inside each host helper, choose the corresponding options and save/export method for the requested format.

The linked helpers show each host’s complete options and calls. Illustrator image exports pass an extension-free base because the API appends its extension; Photoshop and InDesign receive the final output filename.

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

Options and methods are host-specific. Keep Illustrator ExportOptionsJPEG/PNG8, Photoshop save/export options and InDesign ExportFormat values in their respective helpers.
