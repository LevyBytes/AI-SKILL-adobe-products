# Known Issues and Workarounds - Dialog modal state

Calling a dialog element's [showModal method](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/reference-js/Global%20Members/HTML%20Elements/HTMLDialogElement/index.md#showmodal) does not automatically place Photoshop into the modal state normally expected for a dialog. Photoshop provides an options parameter for enabling that state. Passing `lockDocumentFocus: true` directs Photoshop to lock the UI while the dialog is displayed.

```javascript
document.querySelector("dialog").showModal({ lockDocumentFocus: true });
```
