# recordAction

This Action module method appends a step to the Action currently being recorded:

```javascript
const PhotoshopAction = require("photoshop").action;
PhotoshopAction.recordAction(
  {
    name: "My Command",
    methodName: "actionHandler",
  },
  { prop: value },
);
```

When the saved Action runs later, Photoshop invokes the named top-level JavaScript function:

```javascript
async function actionHandler(executionContext, info) {
  let propValue = info["prop"];
}
```

The `executionContext` argument follows the same argument shape used by [executeAsModal](../executeasmodal.md). Action recording does not currently use any context-specific behavior.

Example:

```javascript
// Start recording an Action, then execute the code below.
async function alertHandler(context, dataObj) {
  require("photoshop").core.showAlert(dataObj.message);
  return dataObj;
}
require("photoshop").action.recordAction(
  {
    name: "Hello Alert",
    methodName: "alertHandler",
  },
  { message: "Hello!" },
);
// Stop recording, and play the Action.
```

[Figure: recordAction](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/record-action.png)

To try this, run the code above in the UDT console for a loaded plugin or in the Playground.
Note: `recordAction` does not work with Script execution (.psjs files), because no plugin environment exists to hold the function declaration.
