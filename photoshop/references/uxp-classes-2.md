# Documents, Guide, Guides, Historystate ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Documents; Guide; Guides; HistoryState; HistoryStates; Objects.

## Documents

Collection class that supports array-style access to the application's open-document list,
while also including familiar ExtendScript methods such as `getByName`.

```javascript
// Iterate through all the documents
app.documents.forEach((h) => console.log(h.title));
```

### Indexable

â–ª [index: *number*]: [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md)

Accesses documents inside this collection.

```javascript
// Iterate through all the documents
app.documents.forEach((h) => console.log(h.title));
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 22.5 | Count of [Document](https://raw.githubusercontent.com/ps-reference/classes/document.md) elements held by this collection. |
| parent | [_Photoshop_](https://raw.githubusercontent.com/ps-reference/classes/photoshop.md) | R | 22.5 | Owning application for this Documents collection. |
| typename | _string_ | R | 22.5 | Object-collection name: Documents. |

### Methods

### add

22.5

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/ps-reference/classes/document.md)>

Creates a document.

With no options, creates a 7 x 5 inch document at 300 pixels per inch.
That matches the "Default Photoshop Size" preset.

Providing an object with a 'preset' string parameter selects any other preset
installed with Photoshop or created by users.

You may also pass an object with one or more parameters. Missing parameters
fall back to these defaults: width 2100 pixels; height 1500 pixels;
resolution 300 pixels per inch; mode: @RGBColorMode; white fill;
no transparency.

```javascript
// "Default Photoshop Size" 7x5 inches at 300ppi
let newDoc1 = await app.documents.add();
let newDoc2 = await app.documents.add({
  width: 800,
  height: 600,
  resolution: 300,
  mode: "RGBColorMode",
  fill: "transparent",
});
let newDoc3 = await app.documents.add({ preset: "My Default Size 1" });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options?` | [_DocumentCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/documentcreateoptions.md) | @DocumentCreateOptions |

### getByName

22.5

[_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md)

Finds the first document with a matching name.

### Parameters

| Name | Type |
| --- | --- |
| `name` | _string_ |

## Guide

Represents one guide in the document.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| coordinate | _number_ | R W | 23.0 | Coordinate in pixels from the ruler origin. Decimal values are allowed. Note: moving the ruler origin changes stored guide positions. **_Fixes in Photoshop 24.0:_** - _Resolves non-72 PPI coordinate values_ |
| direction | [_Direction_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#direction) | R W | 23.0 | Guide orientation: vertical or horizontal. |
| docId | _number_ | R | 23.0 | Document ID for this guide. |
| id | _number_ | R | 23.0 | For batchPlay operations, this guide ID plus its document ID can identify the guide while the document or guide remains alive. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 23.0 | Document that owns this guide. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Guide"_. |

### Methods

### delete

23.0

_void_

Removes the guide from the document.

## Guides

Collection class that supports array-style access to guides in a document.

Reach this collection through the [Document.guides](https://raw.githubusercontent.com/ps-reference/classes/document.md#guides) property. For example,
the next sample appends a guide:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

### Indexable

â–ª [index: *number*]: [_Guide_](https://raw.githubusercontent.com/ps-reference/classes/guide.md)

Accesses guides inside this collection.

Reach this collection through the [Document.guides](https://raw.githubusercontent.com/ps-reference/classes/document.md#guides) property. For example,
the next sample appends a guide:

```javascript
app.activeDocument.guides.add(Constants.Direction.HORIZONTAL, 20);
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 23.0 | Count of [Guide](https://raw.githubusercontent.com/ps-reference/classes/guide.md) elements held by this collection. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 23.0 | Owning document for this Guide collection. |

### Methods

### add

23.0

[_Guide_](https://raw.githubusercontent.com/ps-reference/classes/guide.md)

Adds a guide to the collection at the supplied coordinate and direction.

**_Fixes in Photoshop 24.0:_**

- _Corrects coordinate when resolution is not 72 PPI_
- _Returns a valid guide instance_

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [_Direction_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#direction) | Vertical or horizontal orientation for the guide. |
| `coordinate` | _number_ | Coordinate in pixels from the ruler origin. Decimal values are allowed. Note: moving the ruler origin changes stored guide positions. |

### removeAll

23.0

_void_

Removes every guide from this collection.

## HistoryState

One History panel entry is represented by this history-state object.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| docId | _number_ | R | 22.5 | Document ID associated with this history state. |
| id | _number_ | R | 22.5 | batchPlay can address the state by combining this history ID with the document ID while the document remains open. |
| name | _string_ | R | 22.5 | History panel display name for this state. |
| parent | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R | 22.5 | Document that owns this history state. |
| snapshot | _boolean_ | R | 22.5 | Indicates whether the state is a snapshot rather than an automatically generated entry. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"HistoryState"_. |

## HistoryStates

This collection class supports array-style access to a document's history states and also offers familiar ExtendScript-style helpers such as `getByName`

```javascript
// Iterate through all history states
app.activeDocument.historyStates.forEach((h) => console.log(h.name));

// Find all snapshot history states
var snapshots = app.activeDocument.historyStates.filter((h) => h.snapshot);
```

### Indexable

▪ [index: *number*]: [_HistoryState_](https://raw.githubusercontent.com/ps-reference/classes/historystate.md)

Use this index signature when retrieving history-state entries.

```javascript
// Iterate through all history states
app.activeDocument.historyStates.forEach((h) => console.log(h.name));

// Find all snapshot history states
var snapshots = app.activeDocument.historyStates.filter((h) => h.snapshot);
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 22.5 | Count of [HistoryState](https://raw.githubusercontent.com/ps-reference/classes/historystate.md) entries held by this collection. |
| parent | Document | R | 22.5 | Document that owns this HistoryState collection. |

### Methods

### getByName

22.5

[_HistoryState_](https://raw.githubusercontent.com/ps-reference/classes/historystate.md)

Returns the first history state whose name matches the supplied value.

### Parameters

| Name | Type |
| --- | --- |
| `name` | _string_ |

## Objects

API root reached through `require("photoshop")`

### Properties

### action

• **action**: _typeof_ [_photoshopAction_](https://raw.githubusercontent.com/ps-reference/media/photoshopaction.md)

Lower-level action-system API surface, with `batchPlay` as the successor to `executeAction`.

### app

• **app**: _typeof_ [_Photoshop_](https://raw.githubusercontent.com/ps-reference/classes/photoshop.md)

DOM root object; through `app` you reach application settings, open documents, and the remaining APIs.

### constants

• **constants**: [_Constants_](https://raw.githubusercontent.com/ps-reference/modules/constants.md)

Constants and enumerations supplied to DOM APIs as expected parameter values.

### core

• **core**: _typeof_ [_photoshopCore_](https://raw.githubusercontent.com/ps-reference/media/photoshopcore.md)

Lower-level APIs for direct interaction with Photoshop UI and the user.
