# Accepted action descriptors

Constructing action descriptors can be complex. Photoshop offers several ways for developers to see which descriptors it accepts.

One approach is the `Actions` panel. Create a new action, then record the commands you intend to run from JavaScript. Select the action in the `Actions` panel, or select one or more steps inside it. From the panel flyout menu, choose `Copy As JavaScript`. Photoshop places JavaScript compatible with UXP on the clipboard for whatever items are selected. `Copy As JavaScript` appears in the flyout menu when developer mode is enabled.
The example below captures one JavaScript "make layer" command:

```javascript
async function actionCommands() {
  let command;
  let result;
  let psAction = action;

  // Make layer
  command = { _obj: "make", _target: [{ _ref: "layer" }], layerID: 2 };
  result = await psAction.batchPlay([command], {});
}

async function runModalFunction() {
  await core.executeAsModal(actionCommands, { commandName: "Action Commands" });
}

await runModalFunction();
```

You can also define a listener function in JavaScript. Provide the global event hook to a low-level API. Developer mode must be enabled for this call to work.

```javascript
action.addNotificationListener(["all"], (event, descriptor) => {
  console.log("Event: " + event + " Descriptor: " + JSON.stringify(descriptor));
});
```

Another method is the developer UI, which can write action descriptors to a file. With "developer mode" enabled, these menu items become available:

- "Plugins > Development > Record Action Commands..." Use this menu item to save any Photoshop command as an action descriptor file. After choosing it and selecting a destination file, perform one or more Photoshop commands through the normal UI. Finish by choosing "Plugins > Development > Stop Action Recording". The file you selected as the destination will contain actionJSON for the commands you performed.
- "Plugins > Development > Record Action Notifications..." This menu item saves both commands and change notifications into the selected destination file.

Finally, actions recorded as a standard Photoshop action in the Actions panel can be exported to `actionJSON`:

- In the Actions panel, select the action set containing the command.
- Hold (macOS)"shift+option+command" or (Windows)"shift+control+alt", then use the panel fly-out menu item "Save Actions...".
