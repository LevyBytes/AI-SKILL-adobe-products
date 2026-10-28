# hostControl

Use the hostControl property to suspend and resume history states.

- `suspendHistory(options)`: suspends history on a target document
- `resumeHistory(suspensionID, commit)`: resumes history on a target document
- `registerAutoCloseDocument(docID)`: registers a document for closure when the modal scope exits
- `unregisterAutoCloseDocument(docID)`: removes a document from the automatic-close set for the modal scope
