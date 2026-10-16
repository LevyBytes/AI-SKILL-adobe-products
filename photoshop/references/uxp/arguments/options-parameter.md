# Options parameter

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
