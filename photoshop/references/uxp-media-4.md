# Photoshopcore, Prototype

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: photoshopCore; Prototype.

## photoshopCore

The `core` module exposes specialized commands inside the application.
Use it to read or change assorted application-state properties.

Some commands here are experimental. Others may later move into the DOM. When that happens, their use should become simpler, for example by removing the need to pass the document ID as an argument.

```javascript
const { core } = require("photoshop");
```

### Properties

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| apiVersion | _number_ | 22.5 | API Version declared by the plugin's manifest.json under `host.data.apiVersion` field. |

### Functions

### addNotificationListener

23.3

**async** : _Promise_`<void>`

Attach a listener to a Photoshop core event. Photoshop invokes a callback in the form
of `(eventName: string, descriptor: ActionDescriptor) => void`.

See the [table of events](uxp-media-2.md).

Example group/event pair: '`UI`' with '`userIdle`'

- Fired after the Photoshop user has been idle for the configured number of seconds. See [setUserIdleTime](https://raw.githubusercontent.com/ps-reference/media/photoshopcore.md#setuseridletime).
- Fired again with descriptor `{idleEnd: true}` once the user is no longer idle. Use this signal to wrap up work performed while idle.

```javascript
await core.addNotificationListener("UI", ["userIdle"], onUserIdle);
```

### Parameters

| Name | Type |
| --- | --- |
| `group` | _string_ |
| `events` | _string_[] |
| `callback` | NotificationListener |

### calculateDialogSize

22.5

**async** : _Promise_<\{ `height`: _number_ ; `width`: _number_ }>

Reports a dialog's effective size.

```javascript
const idealSize = { width: 200, height: 500 };
const { width, height } = await core.calculateDialogSize(idealSize);
```

### Parameters

| Name | Type |
| --- | --- |
| `preferredSize` | _object_ |
| `preferredSize.height` | _number_ |
| `preferredSize.width` | _number_ |
| `identifier?` | _string_ |
| `minimumSize?` | _object_ |
| `minimumSize.height` | _number_ |
| `minimumSize.width` | _number_ |

### convertColor

23.0

RGBColorDescriptor \| RGB32ColorDescriptor

Converts a supplied color descriptor to RGB and returns the converted descriptor.

This internal API supports [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md)
and the other color classes.

At present, conversion uses the application's color settings (Edit > Color Settings...). '
Future versions are expected to support embedded-profile conversion.

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.RGB |

LabColorDescriptor

Convert to Lab

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.Lab |

HSBColorDescriptor

Convert to HSB

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.HSB |

GrayscaleColorDescriptor

Convert to Grayscale

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.Gray |

CMYKColorDescriptor

Convert to CMYK

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.CMYK |

### convertGlobalToLocal

26.0

**async** : _Promise_<\{ `x`: _number_ ; `y`: _number_ }>

Takes `(x,y)` coordinates in global display space and converts them to coordinates
whose origin is the top-left corner of the specified panel.
Only panels declared in the plugin manifest can be targeted,
so the supplied `target` must be present in that manifest.

The [UXP manifest v5](https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/)
example uses "panelName" as the identifier.

Note: global-coordinate units are platform-specific. macOS reports them in
points, while Windows reports pixels. For more detail about global coordinates, see [getDisplayConfiguration](https://raw.githubusercontent.com/ps-reference/media/photoshopcore.md#getdisplayconfiguration).

```javascript
const target = "panelName";
const location = { x: 200, y: 500 };
const { x, y } = await core.convertGlobalToLocal(target, location);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `target` | _string_ | The `id` of the panel to use as the origin. |
| `location` | _object_ | Point coordinates in the form \{x, y}. |
| `location.x` | _number_ | - |
| `location.y` | _number_ | - |

### createTemporaryDocument

23.0

_object_

Creates a temporary duplicate document for background processing. This document stays out of the UI,
and some editing features are limited.

```javascript
await core.createTemporaryDocument({ documentID: 123 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing the id the document to duplicate under property `documentID`. |
| `options.documentID` | _number_ | - |

### deleteTemporaryDocument

23.0

_void_

Deletes a document that was created for temporary use.

```javascript
await core.deleteTemporaryDocument({ documentID: 146 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing key of `documentID` for the document to delete. |
| `options.documentID` | _number_ | - |

### endModalToolState

22.5

**async** : _Promise_`<void>`

Closes active editing for the modal tool.

```javascript
// close the modal dialog, cancelling changes
await core.endModalToolState(false);
```

### Parameters

| Name | Type |
| --- | --- |
| `commit` | _boolean_ |

### executeAsModal

22.5

**async** : _Promise_`<void>`

Plugins must use `ExecuteAsModal` when changing Photoshop state.
That includes creating or modifying documents,
as well as changing UI or preference state.

Only plugins using apiVersion 2 or higher can call `ExecuteAsModal`.

See [Modal Execution](uxp-executeasmodal.md) for details

### Parameters

| Name | Type |
| --- | --- |
| `targetFunction` | (`executionContext`: [_ExecutionContext_](https://raw.githubusercontent.com/ps-reference/objects/options/executioncontext.md), `descriptor?`: _object_) => _Promise_<any> |
| `options` | [_ExecuteAsModalOptions_](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/executeasmodaloptions.md) |

### getActiveTool

22.5

**async** : _Promise_<\{ `classID`: _string_ ; `isModal`: _boolean_ ; `key`: _string_ ; `title`: _string_ }>

Returns details about whichever Photoshop tool is active.

```javascript
const { title } = await core.getActiveTool();
```

### getCPUInfo

23.1

[_CPUInfo_](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/cpuinfo.md)

Returns host CPU details.

```javascript
const { logicalCores, frequencyMhz, vendor } = core.getCPUInfo();
const isAMD = vendor === "AMD";
const isARM = vendor === "ARM";
```

### getDisplayConfiguration

23.0

_Promise_<[[*DisplayConfiguration*](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/displayconfiguration.md)]>

Returns the active display configuration as an array, with one entry per display.

Note: platform determines the returned units.

- Mac uses logical units, points.
- Windows uses physical units, pixels.
  Additional discussion of these units is available in [Display Units](uxp-media-2.md)

```javascript
core.getDisplayConfiguration({ physicalResolution: true });
```

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `options` | [_DisplayConfigurationOptions_](https://raw.githubusercontent.com/ps-reference/objects/options/displayconfigurationoptions.md) | \{} | Additional properties to include, e.g., `physicalResolution`. |

### getGPUInfo

23.1

[_GPUInfo_](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/gpuinfo.md)

Returns OpenGL and OpenCL details for the available graphics hardware.

```javascript
const { gpuInfoList, clgpuInfoList } = core.getGPUInfo();
console.log(JSON.stringify(gpuInfoList));
// > [{"version":"2.1 ATI-4.5.14","memoryMB":8192,"name":"16915464", ...}]
console.log(JSON.stringify(clgpuInfoList));
// > [{"version":"OpenCL 1.2 ","memoryMB":8589,"name":"AMD Radeon Pro 580X Compute Engine", ...}]
```

### getLayerGroupContents

23.1

_Promise_<\{ `list`: LayerTreeInfo[] }>

Returns a layer list for the target layer group.

```javascript
await core.getLayerGroupContents({ documentID: 123, layerID: 9 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.documentID` | _number_ |
| `options.layerID` | _number_ |

### getLayerGroupContentsSync

23.1

_object_

Returns a layer list for the target layer group.

```javascript
core.getLayerGroupContentsSync({ documentID: 123, layerID: 9 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.documentID` | _number_ |
| `options.layerID` | _number_ |

### getLayerTree

23.1

**async** : _Promise_<\{ `list`: LayerTreeInfo[] }>

Returns the whole layer-stack hierarchy as nested "lists".

```javascript
await core.getLayerTree({ documentID: 123 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing key of `documentID` for the target document. |
| `options.documentID` | _number_ | - |

### getLayerTreeSync

23.1

_object_

Returns the whole layer-stack hierarchy as nested "lists".

```javascript
core.getLayerTreeSync({ documentID: 123 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing key of `documentID` for the target document. |
| `options.documentID` | _number_ | - |

### getMenuCommandState

22.5

**async** : _Promise_<boolean>

Returns whether a command menu item can currently be invoked.

```javascript
// can a Fill be performed?
const canFill = await core.getMenuCommandState({ commandID: 1042 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.commandID` | _number_ |

### getMenuCommandTitle

22.5

**async** : _Promise_<string>

Returns the localized title for the requested menu command.

```javascript
const renameLayerStr = await core.getMenuCommandTitle({ commandID: 2983 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.commandID?` | _number_ |
| `options.menuID?` | _number_ |

### getPluginInfo

23.2

**async** : _Promise_<ActionDescriptor>

Returns execution information for the plugin.
This method is intended for plugin development.
Do not call it from shipping code.

The returned information contains these properties:

`numberOfPendingMainThreadTasks`: Count of pending promises.

`batchPlayCount`: Count of `batchPlay` calls since plugin load.

`mainThreadTimeOutCount`: Count of JavaScript calls that have timed out.
This usually happens when commands run while Photoshop is modal without
`executeAsModal`.

`v8HeapSize`: V8 heap allocated for the plugin. This value is accurate only
when UXP Developer Tool is what loaded the plugin.

```javascript
await core.getPluginInfo();
```

### getUserIdleTime

23.3

_Promise_`<void>`

Returns the current user idle time in seconds. Related API: [setUserIdleTime](https://raw.githubusercontent.com/ps-reference/media/photoshopcore.md#setuseridletime)

```javascript
await core.getUserIdleTime();
```

### historySuspended

23.1

_Promise_<boolean>

Returns true while history is suspended. Related API: [Document.suspendHistory](https://raw.githubusercontent.com/ps-reference/classes/document.md#suspendhistory).

```javascript
await core.historySuspended({ documentID: 123 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing key of `documentID` for the target document. |
| `options.documentID` | _number_ | - |

### isModal

23.1

_boolean_

Returns true when the plugin is currently modal through [executeAsModal](https://raw.githubusercontent.com/ps-reference/media/photoshopcore.md#executeasmodal).

### performMenuCommand

22.5

**async** : _Promise_<boolean>

Invokes a menu command by `commandID`. It returns false
when the command fails or is unavailable.
Capture command IDs through Record Action Notifications in the Plugins > Development menu.

```javascript
// menu item Select > All
await core.performMenuCommand({ commandID: 1017 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing key of `commandID` for the menu item. |
| `options.commandID` | _number_ | - |

### redrawDocument

24.1

**async** : _Promise_<number>

Requests an immediate redraw/update for a Photoshop document.
Use this method when a document should refresh immediately
while the user manipulates a UI element such as a slider.
This can make the interaction feel more responsive.
Document updates can take time, and they often occur less frequently
than incoming UI events.
Plugins may therefore put a throttle between UI events and
redrawDocument calls.
One way to implement the throttle is with a timer, or by skipping redrawDocument
briefly after a previous request finishes.
redrawDocument returns how long Photoshop took to update the target document,
in seconds. Use that value to refine the throttle.
Only plugins using apiVersion 2 or higher can call redrawDocument.

```javascript
await core.redrawDocument({ documentID: 123 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.documentID` | _number_ |

### removeNotificationListener

23.0

_Promise_`<void>`

Unregisters a Photoshop event listener.
See [addNotificationListener](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/photoshopcore.md#addnotificationlistener)

```javascript
await core.addNotificationListener("UI", ["userIdle"], onUserIdle);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `group` | _string_ | Notification group. |
| `events` | _string_[] | Array of event names. |
| `listener` | NotificationListener | - |

### setExecutionMode

23.2

**async** : _Promise_`<void>`

Use execution mode while debugging a plugin. It is available only
when developer mode is enabled.

This example enables stack traces for failed batchPlay commands.
When stack traces are enabled, an error result descriptor from a
batchPlay request includes a stacktrace property. Use that property when
reporting bugs to Adobe.

```javascript
await core.setExecutionMode({ enableErrorStacktraces: true });
```

This example enables console warnings for rejected promises:

```javascript
await core.setExecutionMode({ logRejections: true });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.enableErrorStacktraces?` | _boolean_ |
| `options.logRejections?` | _boolean_ |

### setUserIdleTime

23.3

**async** : _Promise_`<void>`

Sets how many seconds the Photoshop user must remain idle before the
userIdle event handler registered with [addNotificationListener](https://raw.githubusercontent.com/ps-reference/media/photoshopcore.md#addnotificationlistener) is invoked. An idleTime of 0
turns idle notifications off.

```javascript
await core.setUserIdleTime(3);
```

### Parameters

| Name | Type |
| --- | --- |
| `idleTime` | _number_ |

### showAlert

22.5

**async** : _Promise_`<void>`

Shows a generic alert box to the user. 'OK' dismisses it.

```javascript
// script has completed.
await core.showAlert({ message: "Operation successful" });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.message` | _string_ |

### suppressResizeGripper

23.1

_Promise_`<void>`

This function can hide the "resize gripper", the small square in a panel's botton-right corner.
The square appears above the panel's own contents, including scrollbars.
Although many panels have historically reserved bottom space for that square,
this option hides the square.

```javascript
await core.suppressResizeGripper({ type: 'panel', target: 'panel's ID', value: true });
```

Above, `target` comes from the panel id assigned in the plugin manifest's `entrypoints` entry.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _any_ | Object containing type, target, and value. |

### translateUIString

22.5

_string_

Given a Photoshop ZString (of format `"$$$/slash/separated/key=english default value"`),
returns the string translated for the active UI language

### Parameters

| Name | Type |
| --- | --- |
| `zstring` | _string_ |

## Prototype

Photoshop DOM APIs are built deliberately so they can accommodate expectations Photoshop may impose while a command is being [batchPlayed](uxp-media.md).

Although Photoshop has a broad feature set and the goal is to expose it through the approachable DOM, some capabilities may still be unavailable when you are writing plug-ins.

Your Photoshop scripting style may also need extra properties or methods beyond the DOM classes that ship by default.

Prototypes provide the extension point here; see the [MDN reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes). JavaScript uses prototypes to determine which methods and properties an object inherits. By attaching properties to a prototype, every instance of that object receives them.

At plugin startup, at launch, or from a library loaded before your code, you can extend the prototypes of the available classes.

These prototypes are available to plug-in developers:

- [app.Photoshop](uxp-classes-4.md)
- [app.Document](uxp-document.md)
- [app.Layer](uxp-layer.md)
- [app.ActionSet](uxp-classes.md)
- [app.Action](uxp-classes.md)

For example, you might add a new method to [Document](uxp-document.md) that renames every layer by placing '\_' at the beginning. Run this during plug-in initialization.

```javascript
require("photoshop").app.Document.prototype.prependLodash = function () {
  // `this` will be the instance of Document you're calling the method on
  this.layers.forEach((l) => {
    l.name = "_" + l.name;
  });
};
```

After that, call the method on any document instance where you want it applied:

```javascript
require("photoshop").app.activeDocument.prependLodash(); // All layers in the document will be renamed
```
