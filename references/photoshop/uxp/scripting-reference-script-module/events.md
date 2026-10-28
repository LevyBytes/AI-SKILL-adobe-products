# Events

**`onCancel`**
- Cancellation may occur if "Cancel" is clicked in the progress bar, or if the host app encounters an exception during script execution. Developers can register **event handlers** for cancellation notification. The related callback receives the `reason` parameter. 

Use the host-provided script executionContext to observe cancellation.

```javascript
executionContext.onCancel.addListener((reason) => {
  console.log("Script canceled", reason);
});
```
