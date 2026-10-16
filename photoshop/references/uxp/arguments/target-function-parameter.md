# Target Function parameter

`targetFunction` is the JavaScript function Photoshop calls after the requested modal state is active. Photoshop leaves the modal state after `targetFunction` finishes. The function may be asynchronous, but it should not return before its work is actually complete. Signature:

Documented signature (call contract, not a function implementation):

`async function targetFunction(executionContext, descriptor)`

The _executionContext_ parameter provides modal-state management features. It contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| isCancelled | boolean | True when the user has cancelled the modal interaction. |
| onCancel | function | Assign a function here to run when the user cancels the modal interaction. |
| reportProgress | function | Updates the progress bar with custom progress information. See [progress bar](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#progress-bar) below for details. |
| hostControl | object | Contains the properties listed in the following table. |

`hostControl` properties

> | Name                        | Type     | Description                                                                                                                                                                                                                                |
> | :-------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | suspendHistory              | function | Places a target document's history in a suspended state. See [History state suspension](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#history-state-suspension).           |
> | resumeHistory               | function | Restarts history recording for a suspended target document. See [History state suspension](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#history-state-suspension).        |
> | registerAutoCloseDocument   | function | Adds a document to the set that closes when modal scope exits. See [Automatic document closing](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#automatic-document-closing). |
> | unregisterAutoCloseDocument | function | Removes a document from the modal-scope auto-close set. See [Automatic document closing](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#automatic-document-closing).        |

The _descriptor_ parameter receives the values supplied through the `descriptor` property in the `executeAsModal` options argument, giving the target function scoped input values.
