# Colors, Known Issues

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: CMYKColor; GrayColor; HSBColor; Colors; LabColor; NoColor; RGBColor; Photoshop API — Overview; Known Issues and Workarounds — Dialog modal state.

## CMYKColor

CMYK color data for use with [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md).

**_Fixes in Photoshop 24.2:_**

- _Getter returns a number rather than `undefined`_
- _Setter values passed to Photoshop are now honored_

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| black | _number_ | R W | 0 | 0.0..100.0 | 23.0 | Black channel percentage. |
| cyan | _number_ | R W | 0 | 0.0..100.0 | 23.0 | Cyan channel percentage. |
| magenta | _number_ | R W | 0 | 0.0..100.0 | 23.0 | Magenta channel percentage. |
| typename | _string_ | R | - | - | 23.0 | Referenced object's class name: _"CMYKColor"_. |
| yellow | _number_ | R W | 0 | 0.0..100.0 | 23.0 | Yellow channel percentage. |

## GrayColor

Grayscale color data for a [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) object.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| gray | _number_ | R W | 0 | 0..100 | 23.0 | Gray component value. |
| typename | _string_ | R | - | - | 23.0 | Referenced object's class name: _"GrayColor"_. |

## HSBColor

HSB color data for a [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) object.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| brightness | _number_ | R W | 100 | 0..100 | 23.0 | Brightness component value. |
| hue | _number_ | R W | 360 | 0..360 | 23.0 | Hue component value. |
| saturation | _number_ | R W | 0 | 0..100 | 23.0 | Saturation component value. |
| typename | _string_ | R | - | - | 23.0 | Referenced object's class name: _"HSBColor"_. |

## Colors

Photoshop uses these internal color classes with [SolidColor](uxp-classes-5.md). The set includes:

- [CMYKColor](uxp-ps-reference.md)
- [GrayColor](uxp-ps-reference.md)
- [HSBColor](uxp-ps-reference.md)
- [LabColor](uxp-ps-reference.md)
- [NoColor](uxp-ps-reference.md)
- [RGBColor](uxp-ps-reference.md)

## LabColor

L\*a\*b\* color data for a [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) object.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| a | _number_ | R W | 0 | -128..127 | 23.0 | a component value. |
| b | _number_ | R W | 0 | -128..127 | 23.0 | b component value. |
| l | _number_ | R W | 100 | 0..100 | 23.0 | L component value. |
| typename | _string_ | R | - | - | 23.0 | Referenced object's class name: _"LabColor"_. |

## NoColor

Indicates an absent color value for a [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) object.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| typename | _string_ | R | 23.0 | Referenced object's class name: _"NoColor"_. |

## RGBColor

RGB color data for a [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) object.

Please note: RGB at 32 bits per channel is not currently supported. Color values are rounded to the closest
range valid for RGB with 16 bits per channel.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| blue | _number_ | R W | 255 | 0..255 | 23.0 | Blue channel value. |
| green | _number_ | R W | 255 | 0..255 | 23.0 | Green channel value. |
| hexValue | _string_ | R W | "FFFFFF" | - | 23.0 | Hexadecimal color text. Ex. returns _FF9801_, while accepting _#ff9801_ or _FF9801_. |
| red | _number_ | R W | 255 | 0..255 | 23.0 | Red channel value. |
| typename | _string_ | R | - | - | 23.0 | Referenced object's class name: _"RGBColor"_. |

## Photoshop API — Overview

Use this line to reach the Photoshop DOM from UXP.

```javascript
const app = require("photoshop").app;
```

After that import, documents can be opened, changed, menu items run, and other operations performed.

### Minimum Version

Minimum-version details now appear on properties and methods. This tag identifies the Photoshop version where the member was introduced or substantially updated.
For properties, the column is "MIN VERSION". For methods, the version number is shown as a tag to the right of the name.

### Photoshop API — Synchronous vs Asynchronous

In Photoshop, ExtendScript and CEP differ from UXP in one key way: calls made through ExtendScript were synchronous. While they ran, Photoshop UI interaction was blocked. With UXP, method calls are _asynchronous_ and leave the UI thread unblocked.

To ease migration from the ExtendScript DOM to the UXP DOM, API properties for get and set were made _synchronous_, so callers do not await them. Internally, however, those property operations still behave asynchronously.

### Photoshop API — Working with Photoshop Objects

### Photoshop Application

The [`app`](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/index.md#overview) object is the entry point for the other Photoshop objects and methods.

To retrieve the active document:

```javascript
const doc = app.activeDocument;
```

To collect every open document as an array:

```javascript
const allDocuments = app.documents;
```

Additional `app` properties and methods are listed under [Photoshop](uxp-classes-4.md).

### Detour - ExecuteAsModal

Before building Photoshop UXP plugins, understand the pattern referred to here as "execute as modal". Commands that may **modify the document** or **application state** must run through executeAsModal.

```javascript
async function makeDefaultDocument(executionContext) {
  const app = require("photoshop").app;
  let myDoc = await app.createDocument({ preset: "My Web Preset 1" });
}

await require("photoshop").core.executeAsModal(makeDefaultDocument);
```

This requirement can cover much of a plugin's behavior. The [Execute as Modal documentation](uxp-executeasmodal.md) gives a fuller explanation of the model.

### Document

Use `Document` for one open Photoshop document. It exposes layers, dimensions, resolution, and related operations; it can also be cropped, resized, rotated, saved, and have layers added, deleted, or duplicated.

Read dimensions from the active document:

```javascript
const app = require("photoshop").app;
const myDoc = app.activeDocument;
const height = myDoc.height;
const width = myDoc.width;
const resolution = myDoc.resolution;
console.log(`Doc size is ${width} x ${height}. Resolution is ${resolution}`);
```

Flatten every document that is currently open:

```javascript
const app = require("photoshop").app;
const toFlatten = app.documents;
async function flattenThem(executionContext) {
  toFlatten.forEach((photoshopDoc) => {
    photoshopDoc.flatten();
  });
}

await require("photoshop").core.executeAsModal(flattenThem);
```

Add a layer:

```javascript
const app = require("photoshop").app;
async function newColorDodgeLayer(executionContext) {
  await app.activeDocument.createLayer({ name: "myLayer", opacity: 80, blendMode: "colorDodge" });
}

await require("photoshop").core.executeAsModal(newColorDodgeLayer);
```

More `Document` details are covered in [Document](uxp-document.md); collection-level material is in [Documents](uxp-classes-2.md).

### Layer

Use `Layer` for a layer or group of layers; it belongs to a specific [Document](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/index.md#Document).

Lower a layer's opacity and move it in front:

```javascript
const app = require("photoshop").app;
const doc = app.activeDocument;
function bringActiveLayerToFront(executionContext) {
  const layer = doc.activeLayers[0];
  layer.opacity = layer.opacity - 10;
  layer.bringToFront();
}

await require("photoshop").core.executeAsModal(bringActiveLayerToFront);
```

Scale every layer with 'smaller' in its name:

```javascript
const app = require("photoshop").app;
const doc = app.activeDocument;
const layers = doc.layers;
async function scaleLayers(executionContext) {
  for (layer of layers) {
    if (layer.name.includes("smaller")) {
      await layer.scale(80, 80);
    }
  }
}

await require("photoshop").core.executeAsModal(scaleLayers);
```

A layer's `kind` property can be `GROUP` when it is a Group layer, meaning a layer or folder containing multiple layers. Use the `layers` property to reach a Group layer's contents, and use `parent` to move through the layer-list tree.

More `Layer` details are documented under [Layer](uxp-layer.md); collection-level material is in [Layers](uxp-classes-3.md).

### Actions and ActionSets

The `Actions` panel is central to many Photoshop workflows. Actions work like macros: users record them and later replay frequent commands and tools. Related actions live inside `Action Sets`, much like layers can live inside Group layers.

Through the Actions object, actions can be deleted, duplicated, renamed, and played. UXP currently provides no way to _create_ an action.

The ActionSet object offers delete, duplicate, rename, and play operations for Action Sets. UXP currently provides no way to _create_ an Action Set.

Actions and Action Sets are app-wide; they are not associated with a particular Document.

This example looks up one Action in the default Action Set and plays it when present:

```javascript
const app = require("photoshop").app;
const allActionSets = app.actionTree;
const firstActionSet = allActionSets[0];
let actions = new Map(); // a JS Map allows easy "find by name" operations
firstActionSet.actions.forEach((action) => {
  actions.set(action.name, action);
});
const myAction = actions.get("Wood Frame - 50 pixel");
if (myAction) {
  // user may have deleted this action
  async function playMyAction(executionContext) {
    await myAction.play();
  }
  await require("photoshop").core.executeAsModal(playMyAction);
}
```

More `Action` details are listed under [Action](uxp-classes.md); related Action Set material is in [ActionSet](uxp-classes.md)

### batchPlay

Photoshop contains many internal classes and methods, and UXP does not expose every one of them yet. Adobe continues to add interfaces in Photoshop releases. Until a needed capability appears in the current DOM, a plugin or script may be able to reach it through `batchPlay`.

Use BatchPlay when a Photoshop capability is not yet surfaced through the APIs. It submits multiple actions to the Photoshop event queue and returns the results from those actions.

In ExtendScript, the comparable entry point was `executeAction`. The difference is that `executeAction` handled only a single descriptor per call, while UXP's `batchPlay` takes an array of action descriptors. When several Photoshop operations must run sequentially, placing those action descriptors in one `batchPlay` call is usually the right pattern.

ExtendScript supplied classes for building action descriptors, references, and values. With `batchPlay`, those structures are plain JSON objects instead.

See [batchPlay documentation](https://raw.githubusercontent.com/ps-reference/media/batchplay.md) for the details of constructing JSON used with `batchPlay`.

### Photoshop API — UXP Scripting

UXP now supports more than plugin projects. Standalone JavaScript files can also be created and run as described in the [UXP Scripting section](uxp-uxpscripting.md).

## Known Issues and Workarounds — Dialog modal state

Calling a dialog element's [showModal method](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/reference-js/Global%20Members/HTML%20Elements/HTMLDialogElement/index.md#showmodal) does not automatically place Photoshop into the modal state normally expected for a dialog. Photoshop provides an options parameter for enabling that state. Passing `lockDocumentFocus: true` directs Photoshop to lock the UI while the dialog is displayed.

```javascript
document.querySelector("dialog").showModal({ lockDocumentFocus: true });
```

### Known Issues and Workarounds — Photoshop 23.4.1 (July 2022)

### Increased batchPlay throwing

Photoshop introduced a change that makes `batchPlay` calls throw more frequently for bad requests. In Photoshop 23.4.1, layer `move` commands can be more dependent on the current Document state and may now throw in cases that previously did not.

When `batchPlay` is used to extend a plugin, guard those calls with a suitable try-catch block, or choose DOM APIs where they fit the task.

## See also

- [Known Issues](uxp-known-issues.md)
