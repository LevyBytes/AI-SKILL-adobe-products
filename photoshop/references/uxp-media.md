# Action Recording, Batchplay

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Recording an Action Step Provided by a UXP Plugin; batchPlay.

## Recording an Action Step Provided by a UXP Plugin

During recording in the Photoshop Actions panel, a UXP plugin can contribute an Action step with [`require('photoshop').action.recordAction`](uxp-photoshopaction.md). The saved step stores a function name plus an object containing the supplied data. On playback, that Action step calls the function with the recorded data.

### recordAction

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

The `executionContext` argument follows the same argument shape used by [executeAsModal](uxp-executeasmodal.md). Action recording does not currently use any context-specific behavior.

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

### Signature

```typescript
async function recordAction({ name: string, methodName: string }, info: Object): Promise<void>;
```

### Arguments

| argument | description |
| --- | --- |
| name | User visible string. The Actions panel shows this value as the Action step name. |
| methodName | Name of top level JavaScript function. The Actions panel calls this method when the recorded Action runs. |
| info | Object with data for the function above. The Action records this object and passes it to the target JavaScript function during playback. Properties in `info` appear in the Actions panel when a property name is recognized. The set of recognized property names can vary across Photoshop versions. To discover known names, locate an Action with the desired name, then use `Copy As JavaScript` to inspect the matching identifier. If some internal properties should stay hidden, add a unique prefix, such as a reverse URL: `com.foo.myProperty`. |

### Additional Notes

For playback to call the function later, `methodName` must be declared at the `global` level.

- async actionHandler(c, d) => \{...
- async function actionHandler(c, d) \{...
- actionHandler = (c, d) => \{...
- var actionHandler = (c, d) => \{...

Avoid due to scope:

- let actionHandler = (c, d) => \{...

Remember that the recorded Action step stores only the function **name**. The function body stays in the plugin's environment. Because of that, the declaration can later change, for example through a plugin update. The Action step still calls that function with the data object captured in the step.

The info argument is mandatory. Even if the function has no data to save, you still **must pass an empty object literal**, `{}`.

### Record Again

A user may update an Action step by selecting the step and choosing "Record Again..." from the Actions panel flyout menu, or by double-clicking the step.
Photoshop then enters "record again" mode. Photoshop replays the step and records the returned value. For UXP plugin Action steps, the handler function return value replaces the existing `info` object in the saved step. If the javascript function returns `undefined`, Photoshop leaves the step unchanged.

In the code below, the stored `info` value for the step would be replaced with `{"myNewProp": true}` when the step is re-recorded.

```javascript
async function actionHandler(executionContext, info) {
  // . . .
  return { myNewProp: true };
}
```

### Errors

When recording fails, add a `.catch` to the `recordAction` call to inspect the failure.

If the dialog shows "Script action failed.",

- verify that `methodName` is reachable from the global scope of the plugin.
- try invoking the function yourself with the `info` object supplied to `recordAction`.

| Console error | Situation |
| --- | --- |
| `Unsupported napi type` | A value other than `string` was assigned to "methodName" |
| `Failed Error: Argument 2 is missing` | The `info` argument was not supplied |

## batchPlay

`batchPlay` sits at the center of these APIs. It runs Photoshop action commands, one or many, and returns the results.

> Prefer DOM APIs first; reach for batchPlay only when those APIs do not cover the operation.

Access `batchPlay` directly from the Photoshop action module. By default, it runs asynchronously and resolves through a promise.

```javascript
require('photoshop').action.batchPlay(
  descriptors: ActionDescriptor[],
  options: Object
): Promise<Object[]>
```

The sections below cover how JavaScript defines action commands and which options are available.

### Descriptors

The first `batchPlay` parameter is an array of descriptors, also known as action descriptors.

UXP for Photoshop represents those action descriptors as text. This representation is sometimes called `actionJSON`.

An action descriptor is made from these parts:

- The command. This names the Photoshop command to perform and is provided through the `_obj` keyword.
- The target for the command. This identifies the (DOM) element the command acts on and is provided through the `_target` keyword. This property is sometimes omitted. Without it, the command uses a default element. Usually that default is the object active in the UI.
- Command parameters. These provide the parameters for the command.
- Command execution options. These control how the command runs.

The example below shows an `actionJSON` command that hides a layer :

```javascript
{
  _obj: "hide",
  _target: [
    {_ref: "layer", _enum: "ordinal", _value: "targetEnum"},
    {_ref: "document", _enum: "ordinal", _value: "targetEnum"}
  ]
}
```

The `_obj` keyword specifies the command, which is `hide`.

The `_target` value is an `action reference`; it identifies the layer to hide. Action references list the target from the most specific item to the least specific item, roughly like reversing a postal address. To locate the target DOM object, read the list from the last value back to the first. In this example:

- `{_ref: "document", _enum: "ordinal", _value: "targetEnum"}` First locate the target document. It is specified with `ordinal` and `targetEnum`, meaning the active frontmost document.
- Inside that document, locate the layer given by `{_ref: "layer", _enum: "ordinal", _value: "targetEnum"}`. This means the active selected layer.

The selected layer in the frontmost document is therefore the target for this command. For ordinal enumerations, `targetEnum` is the default and can be left out. For more information, see the [action references](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/batchplay.md#action-references) section below.

Because this command changes Photoshop state, it must run inside a modal scope. For details, see the [executeAsModal](uxp-executeasmodal.md) documentation. This JavaScript hides the active layer through batchPlay:

```javascript
const { app, action, core } = require("photoshop");
async function hideActiveLayer() {
  return await action.batchPlay(
    [
      {
        _obj: "hide",
        _target: [
          { _ref: "layer", _enum: "ordinal" },
          { _ref: "document", _enum: "ordinal" },
        ],
      },
    ],
    {},
  );
}
let result = core.executeAsModal(hideActiveLayer, { commandName: "Hide Layer" });
```

This next `batchPlay` and `actionJSON` sample returns the value of a particular document pixel.
It demonstrates an extra `samplePoint` parameter.

```javascript
async function samplePixel() {
  return await action.batchPlay(
    [
      {
        _obj: "colorSampler",
        _target: { _ref: "document", _enum: "ordinal", _value: "targetEnum" },
        samplePoint: {
          horizontal: 100,
          vertical: 100,
        },
      },
    ],
    {},
  );
}
let result = await core.executeAsModal(samplePixel, { commandName: "Sample Pixel" });
```

Sample output from the colorSampler command:

```javascript
[
  {
    colorSampler: {
      _obj: "CMYKColorClass",
      black: 0,
      cyan: 26.27,
      magenta: 4.71,
      yellowColor: 0,
    },
    sampledData: true,
  },
];
```

### Accepted action descriptors

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

### Command execution options

An action descriptor may include an `_options` property. When it is present, the value defines how Photoshop executes the command.
`_options` supports these values:

- `dialogOptions: string`. This value determines how Photoshop presents UI while running the command. Available values are:
  - "silent": Photoshop runs the command with no UI. If an error happens, or if the command lacks required parameters, Photoshop returns a scripting error. This is the default.
  - "dontDisplay": Photoshop runs the command without UI unless an error happens or the command needs more parameters. In that case, UI may appear.
  - "display": Photoshop shows the standard UI for the command.
- `suppressProgressBar: boolean`. Use this value to hide a Photoshop progress bar while the command runs. It is mostly used when running a command that requires user interaction.

### options

The second `batchPlay` argument configures options. The options most often needed are listed below.

### synchronousExecution (default: false)

When true, `batchPlay` blocks the whole scripting thread until it resolves and then returns the value or values. The DOM API uses this for property getters and setters because it can make code simpler.

JavaScript that calls `batchPlay` directly should avoid this keyword when practical and use the default promise-returning form instead.

### continueOnError (default: false)

With false, `batchPlay` stops as soon as the first (sub)command fails. With true, every (sub)command is run.

### immediateRedraw (default: false)

When true, Photoshop refreshes its UI after all descriptors have run.

### historyStateInfo (default: none)

As of Photoshop 2022, this option is deprecated. New JavaScript should rely on [executeAsModal](uxp-executeasmodal.md) for history suspension.

Ask Photoshop to represent the full batchPlayed action sequence as one history state. History state should include two properties:

- `name`: A string displayed as the history event name in the History panel
- `target`: A document reference indicating where to create the history state. If the reference points to another document, or if the batchPlay calls do not all operate on the same document, behavior is undefined.

Plugins using api version 2 may prefer the history state feature available through the executionContext object.

### Result value

`batchPlay` returns a promise. Photoshop rejects that promise when the batchPlay command itself is invalid, such as when the arguments are wrong. This call is an example of a batchPlay rejection:

```javascript
action.batchPlay(true, {});
```

The first argument in this example is incorrect. `batchPlay` expects a descriptor list there, not a boolean. In this kind of case, the promise is rejected with an appropriate error message. The call above produces this rejection:

```javascript
[[PromiseState]]: "rejected"
[[PromiseResult]]: Error: Argument 1 has an invalid type. Expected type: array actual type: boolean
```

A batchPlay command can also fail when Photoshop cannot process an otherwise valid command. This usually happens when the requested target element is missing.

The earlier [hide the active layer](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/batchplay.md#hidelayerexample) example fails if no documents are open, because there is then no target layer for the command to hide. In such cases, the `batchPlay` promise resolves successfully and returns an error message in list form.

```javascript
[
  {
  _obj: "error"
  message: "The object “current document” is not currently available."
  result: -25922
  }
]
```

The returned list elements correspond to the action descriptor list sent to batchPlay. The first returned item is the result for the first action descriptor, and the sequence continues in order. Returned element properties are:

- `_obj: string`. Holds "Error"
- `message: string`. Contains a localized error message
- `result: number`. Contains a Photoshop internal error code. A value of "0" means "no error". -128 indicates that the user cancelled the operation. Other values are possible.

### Action references

Action references identify the DOM objects that a command affects. The `_target` keyword specifies an action reference.
An action reference is a list of item references describing how to locate the DOM element, starting from the application DOM element.
Each list item can take one of these forms:

| Reference form | Syntax | Example | Notes |
| --- | --- | --- | --- |
| ID | `{_ref: className, _id: number}` | `{_ref: "document", _id: 123}` | Index `{_ref: className, _index: number}` `{_ref: "document", _index: 1}` Indices are 1 based |
| Name | `{_ref: className, _name: string}` | `{_ref: "document", _name: "Untitled-1"}` | Enumeration `{_ref: className, _enum: "ordinal", _value: enumerationSpecifier*}` `{_ref: "document", _enum: "ordinal", _value: "targetEnum"}` |
| Property | `{_property: propertyName}` | `{_property: "title"}` | Use the ID form when possible, because a Photoshop object's ID stays stable for the session lifetime. An index can shift when elements are inserted or removed before the specified object. The enumerationSpecifier depends on the command, but `targetEnum` commonly refers to the selected or active object for the specified class. Other possible values include: "first", "last", and "front". When the enumeration form is used, `_value` defaults to `targetEnum`. ### Getting state from Photoshop To read state from Photoshop with batchPlay, use the "get" action command with a target property. This sample reads a target document's title: `javascript var target = {_ref: [ {_property: "title"}, {_ref: "document", _id: someDocumentID}, {_ref: "application"} ]}; var command = {_obj: "get", _target: target}; let result = await photoshop.action.batchPlay([command], {}); ` A possible result from running this command is: `javascript [{title: "Untitled-1"}] ` When the "get" command has no target property, Photoshop returns every available property for that target. This example lists the available document properties: `javascript var target = {_ref: [ {_ref: "document", _id: someDocumentID}, {_ref: "application"} ]}; var command = {_obj: "get", _target: target}; let result = await photoshop.action.batchPlay([command], {}); ` A possible result from running this command may include the following: `javascript [{"mode": {"_enum": "colorSpace", "_value": "RGBColor"}, "bigNudgeH": 655360, "bigNudgeV": 655360, "rulerOriginH": 0, "rulerOriginV": 0, "width": {"_unit": "distanceUnit", "_value": 504}, "height": {"_unit": "distanceUnit", "_value": 360}, "resolution": {"_unit": "densityUnit", "_value": 300}, "title": "Untitled-1", "fileInfo": {"_obj": "fileInfo"}, "numberOfPaths": 0, "numberOfChannels": 3, "numberOfLayers": 0, "targetPathIndex": -1, "workPathIndex": -1, "clippingPathInfo": {"_obj": "clippingInfo", "clippingPathIndex": -1, "clippingPathFlatness": 0}, . . . ] ` Using "get" without a property is meant only for plugin development. This "get all" request helps a developer see which properties an element supports. _A shipping plugin should avoid requesting all properties for a target, because the operation may be slow and may get slower as future properties are added._ ### Multi-Get Sometimes you need multiple property values from one target, or the same property from multiple similar targets. Examples include: _ Retrieve a specific document's name, id, and color mode. _ Retrieve the id's for every open document. Although multiple "get" statements can retrieve this information, the `multiGet` command is more efficient. A multiGet command uses this form: _ `_obj`: must be "multiGet". _ `_target`: a target reference that defines a base object. _ extendedReference: a list that describes which values to return from the base object. extendedReference has either one element or two. The first element is a property-list. The optional second element specifies an element range. _ options: describes how the command responds when requested values are unavailable. options can include: _ failOnMissingProperty: A boolean that controls what happens when one target element does not expose a requested property. The default is true, so the command fails if a requested property is unavailable. _ failOnMissingElement: A boolean that controls what happens when one requested target element does exist. The default is true, so the command fails if any requested element does not exist. This example reads several values from the active layer: `javascript layerProperties = { _obj: "multiGet", _target: {_ref: [ {_ref: "layer", _enum: "ordinal"}, {_ref: "document", _enum: "ordinal"} ]}, extendedReference: [["name", "layerID", "opacity"]], options: {failOnMissingProperty: false, failOnMissingElement: false} }; result = await action.batchPlay([layerProperties], {}); ` This command will generate a result such as the following: `javascript [{"name": "Layer 4", "layerID": 5, "opacity": 255}] ` Here, the base object is a layer. extendedReference names the properties to return from the target layer. The next example reads several values from the first two layers: `javascript layerProperties = { _obj: "multiGet", _target: {_ref: [{_ref: "document", _enum: "ordinal"}]}, extendedReference: [ ["name", "layerID", "opacity"], {_obj: "layer", index: 1, count: 2} ], options: {failOnMissingProperty: false, failOnMissingElement: false} }; result = await action.batchPlay([layerProperties], {}); ` This command will generate a result such as the following: `javascript [{"list": [ {"name": "Layer 1", "layerID": 2, "opacity": 255}, {"name": "Layer 2", "layerID": 3, "opacity": 255} ]}] ` In this example, values are being obtained from several layers, so the base object specified by `_target` is a document. extendedReference uses its two-element form to supply both a property list and a layer range. An element range specifier can set count to -1 to mean every element. To retrieve all layer names in a document, use this form: `javascript layerProperties = { _obj: "multiGet", _target: {_ref: [{_ref: "document", _enum: "ordinal"}]}, extendedReference: [["name"], {_obj: "layer", index: 1, count: -1}], options: {failOnMissingProperty: false, failOnMissingElement: false} }; result = await action.batchPlay([layerProperties], {}); ` This command will generate a result such as the following: `javascript [{"list": [{"name": "Layer 1"}, {"name": "Layer 2"}, {"name": "Layer 3"}, {"name": "Layer 4"}]}] ` ### Legacy notes `batchPlay` carries forward the role that `executeAction` had in ExtendScript. `executeAction` played one descriptor per call, while `batchPlay` takes an array of action descriptors. ExtendScript offered a class for constructing descriptors, references, and inserted values. `batchPlay` replaces those related classes with `actionJSON`. Developers familiar with ExtendScript `executeAction` probably know 4 character codes (OSTypes) and helper methods for them. In `actionJson`, extended string identifiers such as `colorSampler` are preferred. You can still use an OSType by prefixing it with `$` and passing that string, for example `'$app '` (mind the space!). |

## See also

- [Photoshop Actions](api-photoshop-actions.md)
