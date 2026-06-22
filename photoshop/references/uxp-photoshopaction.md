# Photoshopaction

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

This module enables Actions workflows in UXP-Photoshop. Use it to run your own `batchPlay` commands or to register listeners.

```javascript
const { action } = require("photoshop");
```

## Functions

### addNotificationListener

23.0

**async** : _Promise_`<void>`

Register one callback against one or more Photoshop events.
Its callback form is `(eventName: string, descriptor: ActionDescriptor) => void`.

```javascript
await action.addNotificationListener(["open"], onOpenDocumentHandler);
```

Use the [table of events](uxp-media-2.md), or use
the [introspection methods described under `batchPlay`](uxp-media.md).

### Parameters

| Name | Type |
| --- | --- |
| `events` | _string_[] |
| `callback` | NotificationListener |

### batchPlay

23.0

_Promise_<ActionDescriptor[]>

Runs `batchPlay` with the supplied commands. In ExtendScript terms,
the matching operation is `executeAction`.

```javascript
const target = { _ref: "layer", _enum: "ordinal", _value: "targetEnum" };
const commands = [{ _obj: "hide", _target: target }];
await action.batchPlay(commands);
```

### Parameters

| Name | Type |
| --- | --- |
| `commands` | ActionDescriptor[] |
| `options?` | [_BatchPlayCommandOptions_](https://raw.githubusercontent.com/ps-reference/objects/options/batchplaycommandoptions.md) |

### batchPlaySync

23.1

ActionDescriptor[]

Runs `batchPlay` with the supplied commands. In ExtendScript terms,
the matching operation is `executeAction`.

```javascript
const target = { _ref: "layer", _enum: "ordinal", _value: "targetEnum" };
const commands = [{ _obj: "hide", _target: target }];
await action.batchPlay(commands);
```

### Parameters

| Name | Type |
| --- | --- |
| `commands` | ActionDescriptor[] |
| `options?` | [_BatchPlayCommandOptions_](https://raw.githubusercontent.com/ps-reference/objects/options/batchplaycommandoptions.md) |

### getIDFromString

24.0

_number_

Returns the numeric identifier associated with an action string value.
If the string has not been registered yet, Photoshop creates and returns a new ID.

### Parameters

| Name | Type |
| --- | --- |
| `value` | _string_ |

### recordAction

25.0

_Promise_`<void>`

Adds this plugin's action to the active Action recording.
Usage and manifest requirements are covered in [Action Recording](uxp-media.md).

```javascript
await action.recordAction({ name: "My Command", methodName: "actionHandler" }, { prop: value });
```

When the recorded action runs, Photoshop calls this top-level JavaScript function:

```javascript
async function actionHandler(executionContext, info) {
  let propValue = info["prop"];
}
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | RecordActionOptions |  |
| `info` | ActionDescriptor | Object with action specific information. See [Action Recording](uxp-media.md). |

### removeNotificationListener

23.0

_Promise_`<void>`

Removes an event listener registered for Photoshop events.
See [addNotificationListener](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/photoshopaction.md#addnotificationlistener)

```javascript
await action.removeNotificationListener(["open"], onOpenNewDocument);
```

### Parameters

| Name | Type |
| --- | --- |
| `events` | _string_[] |
| `listener` | NotificationListener |

### validateReference

23.1

_boolean_

Synchronously checks the supplied action reference and returns true when it still exists.
For example, passing a reference to a closed document would return false.

This feature is for advanced developers who already understand `batchPlay`.
`validateReference` helps when implementing new DOM functionality or when optimizing with low-level code.

See [Action references](uxp-media.md) for details.

Supported reference classes:
`action`,
`document`,
`channel`,
`layer`,
`guide`,
`historyState`,
`compsClass`,
`path`,
`actionSet`

### Parameters

| Name | Type |
| --- | --- |
| `ref` | ActionReference \| ActionReference[] |
