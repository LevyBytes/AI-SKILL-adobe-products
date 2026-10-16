# Configure `manifest.xml`

As described in the [Getting Started guide](../getting-started-with-common-extensibility-platform-cep.md), `manifest.xml` is where the extension declares supported Creative Cloud host apps and versions, among other settings.

This sample targets three Adobe applications: Photoshop, Illustrator, and InDesign.

The linked complete manifest supplies the HostList entries and the panel/host entrypoint paths:

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

The version values in the example above deliberately cover only one version of each host app to keep the demo simple. Real extensions often target a range of host app versions. For multiple-version support, use the Cookbook's [extension-manifest section](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-manifest).
