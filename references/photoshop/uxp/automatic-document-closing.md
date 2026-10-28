# Automatic document closing

After a user cancels a modal scope, JavaScript cannot make more document changes until control returns from that scope. For reliable cleanup of temporary documents, JavaScript can register one or more documents for automatic close without saving when modal execution ends. This JavaScript example registers a document to close when the modal scope exits:

```javascript
const { core } = require("photoshop");
async function withTemporaryDocument(createDocument, addContents) {
    return core.executeAsModal(async (executionContext) => {
        const hostControl = executionContext.hostControl;
        const docID = await createDocument();
        await hostControl.registerAutoCloseDocument(docID);
        await addContents(docID);
        return docID;
    }, { commandName: "Create document contents" });
}
module.exports = { withTemporaryDocument };
```

createDocument must return the new document ID. addContents receives that ID and may reject. The host closes registered documents when the modal scope exits.

Use `unregisterAutoCloseDocument` to remove a document from automatic closing. The next JavaScript example creates a document and marks it as "auto close" while the method runs. On success, the document is unregistered from the auto-close set. This lets JavaScript either finish creating the document or close it if the user cancels during script execution.

```javascript
const { core } = require("photoshop");
async function withRetainedDocument(createDocument, addContents) {
    return core.executeAsModal(async (executionContext) => {
        const hostControl = executionContext.hostControl;
        const docID = await createDocument();
        await hostControl.registerAutoCloseDocument(docID);
        await addContents(docID);
        await hostControl.unregisterAutoCloseDocument(docID);
        return docID;
    }, { commandName: "Create document contents" });
}
module.exports = { withRetainedDocument };
```

createDocument must return the new document ID. addContents receives that ID and may reject. The host closes registered documents when the modal scope exits.

## Notes

Nested modal scopes are allowed. A target function may call `executeAsModal` again to run another target function.
Every modal scope uses the same global modal state. Because of that sharing, any nested scope can update the shared progress bar state. Likewise, one scope can suspend a document's history state, and a different scope can resume it.
