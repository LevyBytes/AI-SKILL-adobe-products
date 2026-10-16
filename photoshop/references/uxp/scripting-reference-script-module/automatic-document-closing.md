# Automatic document closing

**`executionContext.hostControl.registerAutoCloseDocument(docID)`**

- Registers a document to close without saving at execution-context completion

**`executionContext.hostControl.unregisterAutoCloseDocument(docID)`**

- Removes a document from that no-save auto-close behavior for execution-context completion

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| docID | number | Document ID to remove from the automatic-close set |

### Example

This example first creates a document and marks it as "auto close". After content is added to the page, the document is removed from the auto-close set. If cancellation occurs during script execution, the document closes. 

Call with the script executionContext and an async addContents(document) callback. The document remains registered for automatic closure if that callback fails or execution is canceled.

```javascript
async function createDocumentSafely(executionContext, addContents) {
  const { app } = require("photoshop");
  const hostControl = executionContext.hostControl;
  const document = await app.documents.add();
  await hostControl.registerAutoCloseDocument(document.id);
  await addContents(document);
  await hostControl.unregisterAutoCloseDocument(document.id);
  return document;
}
```
