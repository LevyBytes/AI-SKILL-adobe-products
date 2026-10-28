# Communicate with the host app

Use `csInterface.evalScript()` to call into the host app scripting engine. For a reminder about `.evalScript()`, see the [Getting Started guide](../getting-started-with-common-extensibility-platform-cep.md).

The panel offers three export formats and an explicit native Save original action. `exportWithType(type)` JSON-quotes the format argument before sending it through `evalScript()`.

Complete example files:

- [illustrator-export.jsx](../examples/document-export/host/illustrator-export.jsx)
- [photoshop-export.jsx](../examples/document-export/host/photoshop-export.jsx)
- [indesign-export.jsx](../examples/document-export/host/indesign-export.jsx)
- [export-documents.jsx](../examples/document-export/host/export-documents.jsx)
- [export-panel.js](../examples/document-export/client/export-panel.js)
- [export-panel.html](../examples/document-export/client/export-panel.html)
- [export-panel.css](../examples/document-export/client/export-panel.css)
- [manifest.xml](https://github.com/Adobe-CEP/Getting-Started-guides/tree/master/Exporting%20files%20from%20the%20host%20app)
- [example-guide.md](../examples/document-export/example-guide.md)

The `.evalScript()` call can be read this way:

> Host app, call `exportFileResult(type)` and return either the saved file path or the reported error.

The host entrypoint implements that bridge and calls the appropriate document operation.
