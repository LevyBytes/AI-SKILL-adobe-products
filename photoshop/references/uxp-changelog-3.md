# Changelog (part 3)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Photoshop API Changelog — Photoshop 23.0 (October 2021)

### Channel support

- [Channels collections](uxp-classes.md) follow the same collection behavior used elsewhere in the API. Channels also includes `channels.add()` and `channels.removeAll()`.
- [Channel class](uxp-classes.md)
  - Supports four channel types listed in [Constants.ChannelType](uxp-constants.md): `COMPONENT`, `MASKEDAREA`, `SELECTEDAREA`, `SPOTCOLOR`.
  - Adds the following Channel properties: `name`, `type`, `visible`, `histogram`, `color`, `opacity`.
  - Adds the following Channel methods: `remove()`, `merge()` (for ChannelType.SPOTCOLOR).
  - Adds to the Document class: `get compositeChannels`, `get activeChannels`, `set activeChannels`.

### Document Transformations

- `Document.crop(bounds: Bounds, angle, width, height)`: Crops the document. The `bounds` parameter is an array of four coordinates, [left, top, right, bottom], that defines the area retained after the crop.
- `Document.resizeCanvas(width, height, Constants.AnchorPosition)`: Adjusts canvas dimensions to reveal more or less of the image without changing image size. See `resizeImage`
- `Document.resizeImage(width, heigh, resolution, Constants.ResampleMethod, amount)`: Adjusts the image size. When preserve details is used, `amount` controls the noise value (Range: 0 1 100).
- `Document.rotateCanvas(angle)`: Rotates the image and changes the canvas bounds so the resized image fits.
- `Document.trim(Constants.TrimType, top, left, bottom, right)`: With `TrimType.TRANSPARENT`, removes transparent area around the image on the selected canvas sides. When `TrimType.TOPLEFT` or `TrimType.BOTTOMRIGHT` is used, surrounding areas matching the top-left or bottom-right corner pixel are trimmed respectively.

### Layer cut and copy

- `layer.cut()`: Removes the pixels from the layer.
- `layer.copy(merge: boolean)`: Copies the layer, or when a selection exists, uses the merge option to pull pixels from more than one layer..

### Layer Methods

- `layer.duplicate(relativeObject?: Document | Layer, insertionLocation?: Constants.ElementPlacement, name?: string)`: Creates a copy above the layer in the layer stack and returns the new layer.
- `layer.delete()`: Removes this layer from the document.
- `layer.link()`: Links this layer with the target layer when they are not already linked, then returns the layers linked to this layer.
- `layer.unlink()`: Removes any links from the layer.

### Document paste

- `document.paste(intoSelection: boolean)`: Inserts the clipboard contents into the document. When the optional argument is true and a selection is active, the contents go into that selection.

### Document Methods

- `Document.flatten()`: Combines every visible document layer into one layer.
- `Document.mergeVisibleLayers()`: Combines all visible layers in the document
- `Document.revealAll()`: Expands the document so clipped areas are visible.
- `Document.rasterizeAllLayers()`: Rasterizes all layers.
- `Document.splitChannels()`: Separates the document channels into individual single-channel documents.
- `Document.duplicate()`: Creates a document copy and switches to it.

### [SolidColor](uxp-classes-5.md) API

- Adds the require('photoshop').app.SolidColor constructor for creating SolidColor objects.
- Color-taking APIs can receive SolidColor objects as well.
  - app.foregroundColor and app.backgroundColor.
  - app.documents.add `fillColor` property.
  - Document.saveAs methods that use colors.
- `require('photoshop').core.convertColor` is a low-level API that SolidColor uses internally. App color settings drive its color-space conversions.

## Photoshop API Changelog — Adobe Photoshop Beta Build 65: Sep 3, 2021 (23.0)

### Layer Transformations

- `layer.rotate(angle: number, anchor?: Constants.AnchorPosition)`: Rotates by `angle` around `anchor`.
- `layer.scale(width: number, height: number, anchor?: Constants.AnchorPosition)`: Scales the layer by `width` percent and `height` percent of the image, using `anchor` as the reference.
- `layer.translate(horizontal: number, vertical: number)`: Moves the layer by `horizontal` and `vertical` offset, in pixels or percent.

### app.fonts and TextFont classes

- `app.fonts` getter: Returns every installed font
- `TextFont` class and `TextFonts` collection class

### Document Properties

- Document.bitsPerChannel (read-write): Bits per color channel (type Constants.BitsPerChannelType)
- Document.cloudDocument (read only): Whether this document is stored in Adobe Creative Cloud (type boolean)
- Document.cloudWorkAreaDirectory (read only): Local directory used for this cloud document (type string)
- Document.histogram (read only): Histogram with the pixel count at each color intensity level for the composite channel. The array has 256 members.
- Document.name (read only): Document name (type string)
- Document.path (read only): Full file system path for this document, or the identifier when it is a cloud document (type string)
- Document.quickMaskMode (read-write): Quick Mask mode state. A true value means Quick Mask mode is active in the app (type boolean)
- Document.saved (read only): True when the document has been saved after the most recent change (type boolean)

### Document Color Profile APIs

- Document.mode property (read only)
- Document.colorProfileType and Document.colorProfileName properties (read-write)
- Document.changeMode(), Document.convertProfile(), and Document.trap() methods

## Photoshop API Changelog — Adobe Photoshop Beta Build 64: Aug 6, 2021 (23.0)

### [Document.suspendHistory](uxp-document.md)

This API wraps [`core.executeAsModal`](https://adobe.ly/psmodal) for one document, making it simpler to run code as a single history state. Unlike its ExtendScript predecessor, it accepts a Javascript function instead of a script string.

### [Layer Move APIs](uxp-layer.md)

- Use `layer.move(targetLayer, Constants.ElementPlacement)` to arrange layers. `Constants.ElementPlacement` was added for layer moves: `"placeAfter"` (place below a layer, below group if group layer), `"placeBefore"` (place above a layer, above group if group layer), and `"placeInside"` (inside group layers only).
- Use `layer.sendToBack()` and `layer.bringToFront()` to move a layer to the back or front. When `layer` is inside a group, those commands act within that group.

## Photoshop API Changelog — Adobe Photoshop Prerelease Build 61: Jun 24, 2021 (22.5)

### Updated DOM API

- A new `Layers` collection replaces the old `layerTree` object, with the old object now named `layers` and implemented as a collection through the JavaScript Proxy object. The collection introduction is described below. The previous `layers` behavior is no longer in the DOM. Most scripts can update by replacing `layerTree` with `layers`. Documents and group-kind layers have a valid `layers` collection, while a `pixel` layer has `null` for `layers`. Collections use Array-like semantics. The extra ExtendScript routines `add` and `getByName` are available too. Check `LayerKind.GROUP` on a `layer` to determine whether `layers` exists.
- `GroupLayer` has been removed. Use `activeLayer.kind === LayerKind.GROUP` instead.
- `Constants.LayerKind` is similar to the ExtendScript version, with an added "group" layer.
- Layer APIs
  - _new_ locked, read-only indicator for whether any properties are locked
  - allLocked, pixelsLocked, positionLocked, transparentPixelsLocked properties
  - Documentation now exposes some existing properties

## Photoshop API Changelog — Adobe Photoshop Prerelease Build 60: Jun 10, 2021 (22.5)

This update lists post-MAX 2020 changes, following the Adobe Photoshop 22.0 release.

### Breaking changes

To use the new API set, update the project's `manifest.json` so the `host` object includes:

```javascript
    "data" : {
        "apiVersion": 2
    }
```

Also, `manifest.json` must use version 4:

```javascript
  "manifestVersion": 4
```

Set `apiVersion` to 1 to return to the MAX 2020 Photoshop DOM API version.

### Updated DOM API

- Collections
  - Collection classes built with [Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) make DOM interaction easier.
  - Iterate through all documents like this: `app.documents.forEach(h => console.log(h.title));`
- [HistoryStates collections](uxp-classes-2.md) and [HistoryState API](uxp-classes-2.md)
  - HistoryStates mirrors ExtendScript behavior. `length`, `parent`, and `getByName(name)` are provided. Indices can also be used this way: `activeDocument.historyStates[2]`.
  - HistoryState provides `name`, `parent`, `snapshot`.
- [Documents collections](uxp-classes-2.md)
  - Documents also follows ExtendScript behavior and exposes `length`, `add`, `getByName(name)`, `parent`.
- [Constants module](uxp-constants.md), which centralizes DOM API enumerations and constants. Access it as `require("photoshop").constants`.
- Updated [app.createDocument / app.add](uxp-classes-4.md)
  - Create a default document with no params, use a predefined preset, or supply a group of [DocumentCreateOptions](uxp-objects.md)).
- Updated [document.save](uxp-document.md) and [document.saveAs](uxp-document.md)
  - `save` no longer derives file type from the requested file name. For unsaved files it opens a save dialog, and for saved modified files it saves the file.
  - Available `saveAs` formats are `bmp`, `gif`, `jpg`, `png`, `psb`, and `psd`. Use SaveOptions objects for specific save requests (e.g. [PhotoshopSaveOptions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/objects/photoshopsaveoptions/index.md)).
- [layer.id getter](uxp-layer.md)
- Updated [document.createLayer](uxp-document.md) and [document.createLayerGroup](uxp-document.md)
  - With respective Create options: LayerCreateOptions and GroupLayerCreateOptions.
  - Collection access updates for Layer and Layer-like items are planned for upcoming releases.

### Photoshop Core updates

- [Execute as Modal](uxp-executeasmodal.md) lets plugins hold guaranteed exclusive control over Photoshop while running. It also supports clear user feedback during execution and lets plugins call `suspendHistory` and `resumeHistory`.
