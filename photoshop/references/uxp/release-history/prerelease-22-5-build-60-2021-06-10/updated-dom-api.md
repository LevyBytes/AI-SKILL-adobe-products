# Updated DOM API

- Collections
  - Collection classes built with [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) make DOM interaction easier.
  - Iterate through all documents like this: `app.documents.forEach(h => console.log(h.title));`
- [HistoryStates collections](../../host-api/history-states/reference-index.md) and [HistoryState API](../../host-api/history-state.md)
  - HistoryStates mirrors ExtendScript behavior. `length`, `parent`, and `getByName(name)` are provided. Indices can also be used this way: `activeDocument.historyStates[2]`.
  - HistoryState provides `name`, `parent`, `snapshot`.
- [Documents collections](../../host-api/documents/reference-index.md)
  - Documents also follows ExtendScript behavior and exposes `length`, `add`, `getByName(name)`, `parent`.
- [Constants module](../../enumerations/reference-index.md), which centralizes DOM API enumerations and constants. Access it as `require("photoshop").constants`.
- Updated [app.createDocument / app.add](../../host-api/application/create-document.md)
  - Create a default document with no params, use a predefined preset, or supply a group of [DocumentCreateOptions](../../document-create-options.md)).
- Updated [document.save](../../document/save.md) and [document.saveAs](../../document/save-as.md)
  - `save` no longer derives file type from the requested file name. For unsaved files it opens a save dialog, and for saved modified files it saves the file.
  - Available `saveAs` formats are `bmp`, `gif`, `jpg`, `png`, `psb`, and `psd`. Use SaveOptions objects for specific save requests (e.g. [PhotoshopSaveOptions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/objects/photoshopsaveoptions/index.md)).
- [layer.id getter](../../layer.md)
- Updated [document.createLayer](../../document/create-layer.md) and [document.createLayerGroup](../../document/create-layer-group.md)
  - With respective Create options: LayerCreateOptions and GroupLayerCreateOptions.
  - Collection access updates for Layer and Layer-like items are planned for upcoming releases.
