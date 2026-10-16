# History state suspension

**`executionContext.hostControl.suspendHistory(options)`**

- Returns a suspension identifier to pass to `resumeHistory`
- Suspends the history state for the document with ID `options.documentID`
- Combines all document edits into one history state named by `options.name`

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| options | Object | `documentID`: document ID whose history state will be suspended. |
|  |  | `name`: History panel label used for the history state |

**`executionContext.hostControl.resumeHistory(suspensionID, commit)`**

- Resumes the history state
- Can record the current document state as a history state

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| suspensionID | string | suspension identifier returned by `suspendHistory` |
| commit | bool | When true, commits the current document state and creates a history state. When false, restores the document to the point where suspension began. (optional and defaults to true) |

### Example

The example below suspends the history state for a target document, modifies that document, and then resumes the state.

```js
let hostControl = executionContext.hostControl;
// Get an ID for a target document
let documentID = await getTargetDocument();

// Suspend history state on the target document
// This will coalesce all changes into a single history state called
// 'Custom Command'
let suspensionID = await hostControl.suspendHistory({
  documentID: documentID,
  name: "Custom Command",
});

// modify the document
// . . .

// resume the history state
await hostControl.resumeHistory(suspensionID);
```
