# History state suspension

Use `executionContext.hostControl` to suspend and resume history states. While suspension is active, Photoshop combines all document edits into one named history state.

Example:

```javascript
async function historyStateSample(executionContext) {
  let hostControl = executionContext.hostControl;

  // Get an ID for a target document
  let documentID = await getTargetDocument();

  // Suspend history state on the target document
  // This will collect all changes into a single history state called
  // 'Custom Command'
  let suspensionID = await hostControl.suspendHistory({
    documentID: documentID,
    name: "Custom Command",
  });

  // modify the document
  // . . .

  // resume the history state
  await hostControl.resumeHistory(suspensionID);
}
```
