# reportProgress

Initially, this progress bar is indeterminate. JavaScript can call `reportProgress` on the execution context to adjust the progress display. For determinate progress, pass `reportProgress` a 0-through-1 value:

```javascript
async function targetFunction(executionContext) {
  executionContext.reportProgress({ value: 0.3 });
}
```

Providing a value changes the progress bar to determinate mode. If the bar is not already visible, Photoshop shows it.

JavaScript can also update the message shown in progress UI through the `commandName` property. Use that to tell the user which stage is currently running. Example:

```javascript
executionContext.reportProgress({ value: 0.9, commandName: "Finishing Up" });
```

[Figure: progress bar](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/progress-bar-2.png)

Photoshop hides the progress bar while modal UI is displayed.
