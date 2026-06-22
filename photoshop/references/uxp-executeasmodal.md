# Executeasmodal

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Starting with [apiVersion](uxp-misc.md) 2, plugins must enter a modal state before they alter Photoshop state. The modal guard blocks outside operations from interfering with the plugin and helps avoid unstable application state. Creating documents, changing documents, and updating UI or preference state are examples of work that needs modal execution.

Because Photoshop allows only one plugin to run `executeAsModal` at a time, a plugin holding that scope has exclusive access relative to other plugins also trying to call `executeAsModal`.

During `executeAsModal`, Photoshop switches into a modal user-interaction state that affects much of the UI. Some menu items are disabled as part of the same interference-prevention behavior.

After Photoshop grants a plugin modal scope, that plugin controls Photoshop, so options such as `modalBehavior` with `batchPlay` are no longer necessary.

Find `executeAsModal` in the Photoshop UXP API ["core" module](uxp-media-4.md).

```javascript
await require("photoshop").core.executeAsModal(targetFunction, options);
```

## Arguments

1. _targetFunction_: the JavaScript function that runs once Photoshop has entered a modal state.
1. _options_: an object literal containing [the options for the request](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#options-parameter).

### Target Function parameter

`targetFunction` is the JavaScript function Photoshop calls after the requested modal state is active. Photoshop leaves the modal state after `targetFunction` finishes. The function may be asynchronous, but it should not return before its work is actually complete. Signature:

```javascript
async function targetFunction(executionContext, descriptor)
```

The _executionContext_ parameter provides modal-state management features. It contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| isCancelled | boolean | True when the user has cancelled the modal interaction. |
| onCancel | function | Assign a function here to run when the user cancels the modal interaction. |
| reportProgress | function | Updates the progress bar with custom progress information. See [progress bar](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#progress-bar) below for details. |
| hostControl | object | Contains the properties listed in the following table. |

`hostControl` properties

> | Name                        | Type     | Description                                                                                                                                                                                                                                |
> | :-------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | suspendHistory              | function | Places a target document's history in a suspended state. See [History state suspension](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#history-state-suspension).           |
> | resumeHistory               | function | Restarts history recording for a suspended target document. See [History state suspension](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#history-state-suspension).        |
> | registerAutoCloseDocument   | function | Adds a document to the set that closes when modal scope exits. See [Automatic document closing](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#automatic-document-closing). |
> | unregisterAutoCloseDocument | function | Removes a document from the modal-scope auto-close set. See [Automatic document closing](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#automatic-document-closing).        |

The _descriptor_ parameter receives the values supplied through the `descriptor` property in the `executeAsModal` options argument, giving the target function scoped input values.

### Options parameter

The options object can include these properties:

| Name | Type | Inclusion | Min Version | Description |
| --- | --- | --- | --- | --- |
| commandName | string | **required** | 23.0 | Shows this text above the progress bar. |
| descriptor | object | optional | 23.0 | Supplies command arguments to the target function through this object. See [_targetFunction_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#target-function-parameter) below. |
| interactive | boolean | optional | 23.0 | Turns [interactive mode](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#interactive-mode) on or off. |
| timeOut | number | optional | 25.10 | Default is one second. During that interval, Photoshop queues the request and retries it until the blocking modal state ends or the time limit is reached. |

Only one plugin can be modal at a time, so a call to `executeAsModal` may encounter another plugin already holding modal scope. Older versions of `executeAsModal` failed immediately with _"host is in a modal state"_. In 25.10 and later, Photoshop keeps retrying until the requested duration runs out. The default duration is one second, controlled by the `timeOut` option. Most modal work should finish quickly, but callers still need error handling around this method.

In 25.10 and later, modal-state errors also name the plugin that already held the modal scope. For example, _"Plugin: com.adobe.testPlugin is running a modal command"_. That detail helps diagnose modal collisions.

- For your own plugin, the usual cause is a missing `await`.
- For another third-party plugin, turn it off during development.
- For an Adobe plugin, report it in [the forum](https://forums.creativeclouddeveloper.com/c/photoshop/63).

Use `await` when calling `executeAsModal`. Without `await`, execution continues into the following code while Photoshop is still entering the requested modal state.

A common pattern looks like this:

```javascript
try {
  await require("photoshop").core.executeAsModal(targetFunction, {
    commandName: "My Script Command",
  });
} catch (e) {
  if (e.number == 9) {
    console.error(e);
    showAlert("executeAsModal was rejected (some other plugin is currently inside a modal scope)");
  } else {
    // This case is hit if the targetFunction throws an exception.
  }
}
```

## User cancellation

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

## Progress bar

When modal execution runs long enough, currently more than two seconds, Photoshop displays a progress bar. The progress dialog title bar names the plugin that opened the modal state and provides a way to cancel the interaction. The image below shows the progress bar for a plugin labeled "Sample Plugin". Text above the bar comes from `commandName`, described under [Arguments](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#arguments). Until the plugin reports quantitative progress, the bar indicates indefinite progress.

[Figure: progress bar](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/progress-bar.png)

### reportProgress

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

## Interactive Mode

_Added in Photoshop 23.3_

Some plugins need user input or other interaction while an `executeAsModal` scope is active; those cases may require "Interactive Mode".

In this mode, Photoshop does not show a blocking progress dialog, and fewer restrictions interfere with accepting user input. Interactive mode use cases can include:

- letting users enter data in an opened modal filter dialog
- pausing for input in a Photoshop workspace, including Select and Mask

```javascript
await require("photoshop").core.executeAsModal(targetFunction, {
  commandName: "Apply two filters",
  interactive: true,
});
```

Instead of using the progress bar dialog, users can choose `Cancel Plugin Command` from the Photoshop `Plugins` menu. That action interrupts the plugin's `executeAsModal` scope; see [User Cancellation](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#user-cancellation).

[Figure: cancel via plugin menu](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/assets/eam-pluginmenu-cancel.png)

## History state suspension

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

### suspendHistory

The signature for `suspendHistory` is:

```javascript
executionContext.hostControl.suspendHistory(options);
```

The `options` parameter is an object with the following properties:

| Name | Type | Description |
| --- | --- | --- |
| documentID | number | ID for the document whose history state will be suspended. |
| name | string | Text shown for the history state in the History panel. `suspendHistory` returns a suspension identifier, and that identifier should later be passed to `resumeHistory`. |

### resumeHistory

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

## Event Notifications

While `executeAsModal` is active, unless [interactive](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#interactive-mode) is enabled, Photoshop suppresses event notifications in a way similar to running an action from the actions panel.

As a result, other plugins cannot observe `batchPlay` commands executed during the modal scope.

To receive notifications when a modal JavaScript scope starts or ends, plugins can register for these events:

- `"modalJavaScriptScopeEnter"`
- `"modalJavaScriptScopeExit"`

## Automatic document closing

After a user cancels a modal scope, JavaScript cannot make more document changes until control returns from that scope. For reliable cleanup of temporary documents, JavaScript can register one or more documents for automatic close without saving when modal execution ends. This JavaScript example registers a document to close when the modal scope exits:

```javascript
async function modalFunction(executionContext) {
    let hostControl = executionContext.hostControl;

    let docID = await createDocument();
    await hostControl.registerAutoCloseDocument(docID);

    ...
}
```

Use `unregisterAutoCloseDocument` to remove a document from automatic closing. The next JavaScript example creates a document and marks it as "auto close" while the method runs. On success, the document is unregistered from the auto-close set. This lets JavaScript either finish creating the document or close it if the user cancels during script execution.

```javascript
async function modalFunction(executionContext) {
    let hostControl = executionContext.hostControl;

    let docID = await createDocument();
    await hostControl.registerAutoCloseDocument(docID);

    // Add contents to the created document.

    ...

    await hostControl.unregisterAutoCloseDocument(docID);
}
```

## Notes

Nested modal scopes are allowed. A target function may call `executeAsModal` again to run another target function.
Every modal scope uses the same global modal state. Because of that sharing, any nested scope can update the shared progress bar state. Likewise, one scope can suspend a document's history state, and a different scope can resume it.
