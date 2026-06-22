# Html Elements, Html Events, Image Blob, Path ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.HTMLAnchorElement — href : `string`; HTML Elements; window.BaseUIEvent — BaseUIEvent(type, eventInit); window.CloseEvent — CloseEvent(code, reason, wasClean); window.DragEvent — DragEvent(type, eventInit); window.ErrorEvent; window.GestureEvent — GestureEvent(type, eventInit); HTML Events; window.KeyboardEvent — KeyboardEvent(type, eventInit); window.MessageEvent — MessageEvent(data, origin, source, eventInit); window.PointerEvent — PointerEvent(type, eventInit); window.ProgressEvent; window.ImageBlob; Global Members; window.path; window.CountQueuingStrategy; Streams; window.ReadableStreamDefaultController.

## window.HTMLAnchorElement — href : `string`

Anchor `href` value.

### window.HTMLAnchorElement — pathname : `string`

**Read only**
Path component taken from the anchor's `href`.

### window.HTMLAnchorElement — protocol : `string`

**Read only**
Protocol component taken from the anchor's `href`.

### window.HTMLAnchorElement — dataset

Provides access to every custom data attribute (`data-*`) configured on the element.

**See**: [HTMLElement - dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

### window.HTMLAnchorElement — lang : `string`

Sets the base language used for the element's text and attribute values.

**See**: [HTMLElement - lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang)

### window.HTMLAnchorElement — dir : `string`

Captures the writing direction used by content in the current element, limited to the recognized set.

**See**: [HTMLElement - dir](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir)  
**Since**: v7.1

### window.HTMLAnchorElement — hidden : `boolean` \| `string`

Signals that the browser should leave the element's contents unrendered. Caveat: support excludes `"until-found"`.

**See**: [HTMLElement - hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden), [Spec - `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)

## HTML Elements

- [HTMLAnchorElement](uxp-global-members-2.md)
- [HTMLBodyElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-body-element.md)
- [HTMLButtonElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-button-element.md)
- [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md)
- [HTMLDialogElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-dialog-element.md)
- [HTMLElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md)
- [HTMLHeadElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-head-element.md)
- [HTMLHtmlElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-html-element.md)
- [HTMLImageElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-image-element.md)
- [HTMLInputElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-input-element.md)
- [HTMLLabelElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-label-element.md)
- [HTMLLinkElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-link-element.md)
- [HTMLMenuElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-menu-element.md)
- [HTMLMenuItemElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-menu-item-element.md)
- [HTMLOptionElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-option-element.md)
- [HTMLProgressElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-progress-element.md)
- [HTMLScriptElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-script-element.md)
- [HTMLSelectElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-select-element.md)
- [HTMLSlotElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-slot-element.md)
- [HTMLStyleElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-style-element.md)
- [HTMLTemplateElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-template-element.md)
- [HTMLTextAreaElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-text-area-element.md)
- [HTMLVideoElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md)
- [HTMLWebViewElement](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md)

## window.BaseUIEvent — BaseUIEvent(type, eventInit)

Constructs a `BaseUIEvent` instance.

| Param | Type |
| --- | --- |
| type | `*` |
| eventInit | `*` |

### window.BaseUIEvent — initEvent(typeArg, bubblesArg, cancelableArg)

| Param | Type |
| --- | --- |
| typeArg | `string` |
| bubblesArg | `boolean` |
| cancelableArg | `boolean` |

### window.BaseUIEvent — composedPath()

Provides the path associated with the event.

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)
- [https://dom.spec.whatwg.org/#dom-event-composedpath](https://dom.spec.whatwg.org/#dom-event-composedpath)

## window.CloseEvent — CloseEvent(code, reason, wasClean)

Constructs a `CloseEvent` instance.

| Param | Type |
| --- | --- |
| code | `*` |
| reason | `*` |
| wasClean | `*` |

### window.CloseEvent — code ⇒ `number`

**Returns**: `number` - the close code supplied by the server.

### window.CloseEvent — reason ⇒ `number`

**Returns**: `number` - the server-provided reason string for closing the connection.

### window.CloseEvent — wasClean ⇒ `boolean`

**Returns**: `boolean` - whether the connection ended with a clean close.

## window.DragEvent — DragEvent(type, eventInit)

Constructs a `DragEvent` instance.

| Param | Type |
| --- | --- |
| type | `*` |
| eventInit | `*` |

## window.ErrorEvent

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent)
- [https://html.spec.whatwg.org/#the-errorevent-interface](https://html.spec.whatwg.org/#the-errorevent-interface)

### ErrorEvent(typeArg, [eventInit])

Constructs an `ErrorEvent` instance.

| Param | Type | Default |
| --- | --- | --- |
| typeArg | `*` |  |
| [eventInit] | `*` | `{}` ## window.GestureEvent — GestureEvent(type, eventInit) Constructs a `GestureEvent` instance. Param Type |
| --- | --- | type `*` |
| eventInit | `*` | ## HTML Events _ [BaseUIEvent](uxp-global-members-2.md) _ [CloseEvent](uxp-global-members-2.md) _ [DragEvent](uxp-global-members-2.md) _ [ErrorEvent](uxp-global-members-2.md) _ [Event](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-events/event.md) _ [EventTarget](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/html-events/event-target.md) _ [GestureEvent](uxp-global-members-2.md) _ [KeyboardEvent](uxp-global-members-2.md) _ [MessageEvent](uxp-global-members-2.md) _ [PointerEvent](uxp-global-members-2.md) \* [ProgressEvent](uxp-global-members-2.md) ## window.KeyboardEvent — KeyboardEvent(type, eventInit) Constructs a `KeyboardEvent` instance. Param Type |
| --- | --- | type `*` |
| eventInit | `*` | ### window.KeyboardEvent — getModifierState(keyArgs) **Returns**: `boolean` Param Type |
| --- | --- | keyArgs `string` |

## window.MessageEvent — MessageEvent(data, origin, source, eventInit)

Constructs a `MessageEvent` instance.

| Param | Type |
| --- | --- |
| data | `*` |
| origin | `*` |
| source | `*` |
| eventInit | `*` |

### window.MessageEvent — data ⇒ `string`

**Returns**: `string` - the data payload delivered by the server.

### window.MessageEvent — origin ⇒ `string`

**Returns**: `string` - the message origin value.

### window.MessageEvent — source ⇒ `string`

**Returns**: `string` - the string value that identifies the messageEventSource.

## window.PointerEvent — PointerEvent(type, eventInit)

Constructs a `PointerEvent` instance.

| Param | Type |
| --- | --- |
| type | `*` |
| eventInit | `*` |

## window.ProgressEvent

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent)
- [https://xhr.spec.whatwg.org/#progressevent](https://xhr.spec.whatwg.org/#progressevent)

### ProgressEvent(typeArg, [eventInit])

Constructs a `ProgressEvent` instance.

| Param | Type | Default |
| --- | --- | --- |
| typeArg | `*` |  |
| [eventInit] | `*` | `{}` |

## window.ImageBlob

**Since**: UXP v7.0.0

### ImageBlob(arrayBuffer, options)

Blobs can produce URLs that are assigned to `src` on an `HTMLImageElement`. ImageBlob accepts image data encoded with standard compression formats such as PNG, JPG, JPEG ,etc.
ImageBlob extends that workflow to cover uncompressed image data.

For example, create ImageBlob by passing an arrayBuffer that holds each pixel's RGB values plus options metadata that explains how to interpret the arraybuffer.

ImageBlob supports these creation paths:

- standard image compression formats: supply an ArrayBuffer containing the `standard compression formats`; set options.type to the compression mimeType.
- uncompressed image: supply an ArrayBuffer of raw per-pixel data and the options required to interpret it; set option.type to "image/uncompressed".

[PhotoshopImageData](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/media/imaging/#photoshopimagedata-1) works with ImageBlob,
and a `PhotoshopImageData` object can be passed directly as options.

**Note: `HostApp enablement controls ImageBlob support; Photoshop currently supports it.`**

**Returns**: Instance of `ImageBlob` created from the supplied data  
**Throws**:

- `TypeError` if arrayBuffer is not an ArrayBuffer
- `Error` if height or width is omitted, or either value is < 0
- `Error` if the colorSpace value is unsupported
- `Error` if the componentSize value is unsupported
- `Error` if ByteLength does not match the size required by the supplied options
- `Error` if the PixelFormat value is unsupported

| Param | Type | Description |
| --- | --- | --- |
| arrayBuffer | `ArrayBuffer` | Image data stored in an ArrayBuffer |
| options | `Object` | Metadata for interpreting the supplied ArrayBuffer. For standard compression, options.type is required; for uncompressed image data, every value is required unless marked optional |
| options.type | `string` | mimeType for the provided imageData. Standard formats include "image/png", "image/jpg"; uncompressed data uses "image/uncompressed" |
| options.width | `number` | Image data width in pixels |
| options.height | `number` | Image data height in pixels |
| options.colorSpace | `string` | Color space, or mode, for the image data; allowed values are "RGB" or "Grayscale" |
| options.hasAlpha | `boolean` | True when the image contains an alpha channel |
| options.components | `number` | Component count per pixel. RGB uses 3, RGBA uses 4, and additional formats follow the same pattern |
| options.componentSize | `number` | Bits in each component. Supported values are 8 or 16 |
| options.pixelFormat | `string` | Component memory order inside each pixel. Values can be "RGB", "RGBA", or "Gray" |
| options.colorProfile | `string` | `[Optional]` - Color profile, or mode, for the image data. One possible value is "Adobe RGB (1998)" |

**Example**

```js
// Updating HTML with ImageBlob
<!DOCTYPE html>
<html>

<head>
<script src="index.js"></script>
</head>
<style>
body {
  background-color: whitesmoke;
  padding: 0 16px;
}

#image,

container {
   margin: 8px;
   display: flex;
   flex-direction: row;
   justify-content: flex-start
}
</style>

 <body>
<div class="container">
   <sp-button id="pixel-btn" variant="secondary" quiet>Paint image</sp-button>
   <img id="image"></img>
</div>

</body>
</html>

//Creating ImageBlob by creating the options Object seperatly and then pass the Object as argument
function getPixel() {
 const imageMetaData = {
    width : 8,
    height : 8,
    colorSpace : "RGB",
    colorProfile : "",
    pixelFormat : "RGB",
    components : 3,
    componentSize : 8,
    hasAlpha : false, // Alpha is set to false
    type : "image/uncompressed",
 }

 let buffer = new ArrayBuffer(imageMetaData.width * imageMetaData.height * 3);
 let colorArrayView = new Uint8Array(buffer);
 for(let i = 0; i < colorArrayView.length / 4; i++) {
    // here we are creating a red image, update values to see the variations
    colorArrayView[i * 3] = 255; // Red Component
    colorArrayView[i * 3 + 1] = 0; // Green Component
    colorArrayView[i * 3 + 2] = 0; // Blue Component
 }
 let imageBlob = new ImageBlob(colorArrayView, imageMetaData);
 // Generate url which can be used as src on HTMLImageElement
 const url = URL.createObjectURL(imageBlob);
 // ensure that there is a HTMLImageElement in the Document with id `image`.
 const imageElement = document.getElementById("image");
 imageElement.src = url;

// revoke(destroy image from the memory) when url is no more required.
 URL.revokeObjectURL(url);
}
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("pixel-btn").addEventListener("click", getPixel);
});
```

**Example**

```js
// Creating ImageBlob using PhotoshopImageData object(more details about PhotoshopImageData in description).
const photoshopImageObject; // get image object using Photoshp's imaging apis.
let colorArrayView = await photoshopImageObject.getData();

let imageBlob = new ImageBlob(colorArrayView, photoshopImageObject);
// Generate url which can be used as src on HTMLImageElement
const url = URL.createObjectURL(imageBlob);
// ensure that there is a HTMLImageElement in the Document with id `image`.
const imageElement = document.getElementById("image");
imageElement.src = url;

// revoke(destroy image from the memory) when url is no more required.
URL.revokeObjectURL(url);
```

## Global Members

- [Crypto](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/crypto/index.md)
- [Data Storage](uxp-global-members.md)
- [Data Transfers](uxp-data-transfers.md)
- [HTML DOM](uxp-html-dom.md)
- [HTML Elements](uxp-global-members-2.md)
- [HTML Events](uxp-global-members-2.md)
- [ImageBlob](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/image-blob/index.md)
- [Path](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/path/index.md)
- [Streams](uxp-global-members-2.md)

## window.path

The `path` module offers helpers for manipulating file and directory path values.
Path parameters may be strings or Entry objects.
String paths that use local file schemes such as `plugin-data:` or `plugin-temp:` are not converted into native paths.
Because the `path` module is registered globally, scripts do not need to declare it.

**See**: [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)  
**Since**: UXP v6.4.0

### sep : `string`

File separator for the current platform: '\\' or '/'.

### delimiter : `string`

File delimiter for the current platform: ';' or ':'.

### posix : `Object`

Access point for POSIX-specific implementations of the path methods.
On posix, this matches the parent object.

### win32 : `Object`

Access point for Windows-specific implementations of the path methods.
On Windows, this matches the parent object.

### normalize(path)

Normalizes a string path and collapses '..' and '.' segments.
Repeated slashes become a single slash; an existing trailing slash remains. Windows output uses backslashes.

**Returns**: `string` - normalized path string  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to normalize |

### join(paths)

Combines all arguments, then normalizes the path that results.

**Returns**: `string` - joined path string  
**Throws**:

- `Error` if any path segment is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | path values to combine |

### resolve(paths)

The right-most parameter is treated as \{to}; every earlier parameter belongs to the \{from} array.

Resolution begins at the leftmost \{from} parameter and turns \{to} into an absolute path.

When \{to} is not absolute, \{from} values are prepended from right to left until an absolute path appears.
If none of the \{from} paths produces an absolute path, the current working directory also participates.
The final path is normalized, and trailing slashes are dropped except when the resolved result is the root directory.

**Returns**: `string` - resolved path string  
**Throws**:

- `Error` if any argument is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | sequence of path values or path segments |

### isAbsolute(path)

Checks whether \{path} is absolute. An absolute path resolves to one fixed location no matter which working directory is active.

When \{path} is an empty string, the result is `false`.

**Returns**: `boolean` - whether the path is absolute  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to test |

### relative(from, to)

Computes the relative path from \{from} to \{to} using the current working directory.
When two absolute paths are involved, this derives how to navigate from one to the other; conceptually, it reverses path.resolve.

**Returns**: `string` - relative path string  
**Throws**:

- `Error` if either `from` or `to` is not a string

| Param | Type | Description |
| --- | --- | --- |
| from | `string` | base path for the calculation |
| to | `string` | target path for the relative result |

### dirname(path)

Produces the containing directory segment for `path`, matching the role of Unix `dirname`.

**Returns**: `string` - directory portion for the supplied path  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |

### basename(path, [ext])

Provides the final path component, equivalent in purpose to Unix `basename`.
This is commonly used when a fully qualified path needs its file name separated out.

**Returns**: `string` - final component of the path  
**Throws**:

- `Error` if `path` is not a string, or when `ext` is supplied but is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |
| [ext] | `string` | an extension to remove from the result |

### extname(path)

Computes the extension for `path`, starting at the last '.' in the final path component and continuing to the string end.
When that final component lacks '.' or starts with '.', the function returns an empty string.

**Returns**: `string` - extension text for the path  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | the path to evaluate |

### parse(path)

Builds an object representation from a path string; it is the inverse of `format()`.

**Returns**: `Object` - \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path to evaluate |

### format(pathObject)

Creates a path string from `pathObject`; this reverses `parse()`.

**Returns**: `string` - path string built from an object

| Param | Type | Description |
| --- | --- | --- |
| pathObject | `Object` | \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` } path to evaluate |

## window.CountQueuingStrategy

**See**: [Web APIs - CountQueuingStrategy](https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy)

### CountQueuingStrategy(init)

Constructs a `CountQueuingStrategy` using the supplied high water mark.

**Returns**: `CountQueuingStrategy`

| Param | Type | Description |
| --- | --- | --- |
| init | `Object` | Object with high water mark property. |
| init.highWaterMark | `number` | The total number of chunks that can be contained in the internal queue before backpressure is applied. |

### highWaterMark : `number`

High water mark value.

### size()

Chunk size value; for this strategy it is always 1.

## Streams

- [CountQueuingStrategy](uxp-global-members-2.md)
- [ReadableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md)
- [ReadableStreamDefaultController](uxp-global-members-2.md)
- [ReadableStreamDefaultReader](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream-default-reader.md)
- [TransformStream](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/streams/transform-stream.md)
- [TransformStreamDefaultController](uxp-global-members-2.md)
- [WritableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/streams/writable-stream.md)
- [WritableStreamDefaultController](uxp-global-members-2.md)
- [WritableStreamDefaultWriter](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/streams/writable-stream-default-writer.md)

## window.ReadableStreamDefaultController

**See**: [Web APIs - ReadableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController)

### desiredSize : `number`

Reports the remaining desired capacity for the controlled stream's internal queue.
The value can become negative when that queue has too much data.

### close()

Shuts down the controlled readable stream.
Previously enqueued chunks remain available to consumers; after those chunks have been read, the stream enters the closed state.

**Throws**:

- `TypeError` if the source is not a `ReadableStreamDefaultController`

### enqueue(chunk)

Adds `chunk` to the controlled readable stream's queue.

**Throws**:

- `TypeError` if the source is not a `ReadableStreamDefaultController`

| Param | Type |
| --- | --- |
| chunk | `*` |

### error(error)

Moves the controlled readable stream into an errored state.
After this call, every later interaction fails with `error`.

**Throws**:

- `TypeError` if the source object is not a `ReadableStreamDefaultController`

| Param | Type |
| --- | --- |
| error | `*` |

## window.TransformStreamDefaultController

**See**: [Web APIs - TransformStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/TransformStreamDefaultController)

### desiredSize : `number`

Reports the remaining desired capacity for the readable side's internal queue.
The value can become negative when that queue has too much data.

### enqueue(chunk)

Enqueues `chunk` on the readable side of the controlled transform stream.

**Throws**:

- `TypeError` if the stream is not readable.

| Param | Type | Description |
| --- | --- | --- |
| chunk | `*` | The chunk being queued. A chunk is a single piece of data. |

### error(reason)

Signals an error on both the readable and writable sides of the controlled transform stream.
All subsequent interactions fail with `reason`, and any chunks waiting for transformation are discarded.

| Param | Type |
| --- | --- |
| reason | `string` |

### terminate()

Finishes the readable side and puts the writable side of the controlled transform stream into an error state.
Use this when a transformer only has to consume part of the chunks written to the writable side.

## window.WritableStreamDefaultController

**See**: [Web APIs - WritableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController)

### signal : `AbortSignal`

Provides an `AbortSignal` that lets code cancel a pending write or close request after the stream has been aborted.

### error(message)

Reports the supplied `message` as the failure and shuts the controlled writable stream; later operations against that stream fail with that error.

| Param | Type |
| --- | --- |
| message | `string` |
