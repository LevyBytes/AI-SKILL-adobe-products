# Events

Script cancellation can happen in these cases:

- the user selects "Cancel" in the progress bar
- Photoshop hits an exception while running a script file

To be informed that a command was cancelled, script authors can register event handlers. The callback receives "reason" as its parameter.

```js
executionContext.onCancel.addListener((reason) => {
  // reason would be a json object set by PS while cancelling
  reject("Message");
});
```
