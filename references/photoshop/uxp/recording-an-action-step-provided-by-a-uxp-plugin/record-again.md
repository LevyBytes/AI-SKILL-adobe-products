# Record Again

A user may update an Action step by selecting the step and choosing "Record Again..." from the Actions panel flyout menu, or by double-clicking the step.
Photoshop then enters "record again" mode. Photoshop replays the step and records the returned value. For UXP plugin Action steps, the handler function return value replaces the existing `info` object in the saved step. If the javascript function returns `undefined`, Photoshop leaves the step unchanged.

In the code below, the stored `info` value for the step would be replaced with `{"myNewProp": true}` when the step is re-recorded.

```javascript
async function actionHandler(executionContext, info) {
  // . . .
  return { myNewProp: true };
}
```
