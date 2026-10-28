# User cancellation

`executeAsModal` places Photoshop in a modal state, so commands should provide a way for the user to leave that state when the command was accidental or takes too long.

The user can cancel through the Escape key or through the progress bar cancellation UI.
After cancellation, JavaScript should leave its target function as promptly as it can.
On _executionContext_, `isCancelled` and `onCancel` expose the current cancellation state. Photoshop APIs such as `batchPlay` also throw an exception if a target function calls them after the interaction has been cancelled.

Example target function:

```javascript
async function targetFunction(executionContext, descriptor) {
  let target = {
    _ref: [
      { _ref: "property", _property: "hostName" },
      { _ref: "application", _enum: "ordinal", _value: "targetEnum" },
    ],
  };
  let command = { _obj: "get", _target: target };
  while (true) {
    // <--  WAIT FOR THE USER TO MANUALLY CANCEL
    await psAction.batchPlay([command], {});
  }
}

await require("photoshop").core.executeAsModal(targetFunction, { commandName: "User Cancel Test" });
```

Because of the `while` loop, the sample keeps running until cancellation. Once the user cancels, the modal scope enters a cancelled state; the next `batchPlay` call throws, which ends the target function.

The JavaScript runtime can cancel code only while it is _interruptible_. Waiting for a promise to resolve is one such interruption point. If the earlier sample omitted `await`, cancellation would not stop the JavaScript function. A tight loop like this also prevents automatic cancellation:

```javascript
async function targetFunction(executionContext) {
  while (true) {
    // <--  WAIT FOR THE USER TO MANUALLY CANCEL
    calculateSomeDigitsOfPi();
  }
}
```

Long-running JavaScript with no interruption point should check `isCancelled` on _executionContext_ at regular intervals. The previous example can support cancellation by changing it to:

```javascript
async function targetFunction(executionContext) {
  while (true) {
    // <--  WAIT FOR THE USER TO MANUALLY CANCEL
    calculateSomeDigitsOfPi();
    if (executionContext.isCancelled) {
      throw "user cancelled";
    }
  }
}
```

When JavaScript awaits a Photoshop JavaScript command, user cancellation automatically terminates the operation. That mechanism depends on JavaScript exceptions, so code must not swallow them. The next function catches exceptions around `batchPlay` and discards them, which means it will _not_ terminate automatically after user cancellation:

```javascript
async function targetFunction(executionContext) {
  let target = {
    _ref: [
      { _ref: "property", _property: "hostName" },
      { _ref: "application", _enum: "ordinal", _value: "targetEnum" },
    ],
  };
  let command = { _obj: "get", _target: target };

  while (true) {
    // <--  WAIT FOR THE USER TO MANUALLY CANCEL
    try {
      await psAction.batchPlay([command], {});
    } catch (e) {} // WILL NOT AUTOMATICALLY TERMINATE ON CANCEL
  }
}

await require("photoshop").core.executeAsModal(targetFunction, { commandName: "User Cancel Test" });
```
