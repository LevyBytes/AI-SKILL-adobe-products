# resumeHistory

The signature for `resumeHistory` is:

```javascript
executionContext.hostControl.resumeHistory(suspensionID, commit);
```

| Name | Type | Description |
| --- | --- | --- |
| suspensionID | object | Suspension identifier object returned by `suspendHistory`. |
| commit | boolean | Default `true`. Either save the current document state as a history state or roll the document back to where it was when suspension began. |

Note:

- Photoshop creates a history state only when the document changed between `suspendHistory` and `resumeHistory`.

- To rename the committed history state, set the optional `finalName` string on the `suspensionID` object. That final update replaces the original `name` passed to `suspendHistory` for the History panel entry.

When modal scope finishes, Photoshop automatically resumes history for any document still suspended. If the modal target function returns normally, all unsuspended states are committed. If the target function exits by exception, all unsuspended history states are cancelled.
