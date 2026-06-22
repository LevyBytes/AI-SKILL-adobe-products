# Html Elements, Html Events, Image Blob, Path ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: window.HTMLAnchorElement — href : `string`; HTML Elements; window.BaseUIEvent — BaseUIEvent(type, eventInit); window.CloseEvent — CloseEvent(code, reason, wasClean); window.DragEvent — DragEvent(type, eventInit); window.ErrorEvent; window.Event — Event(eventType, eventInit); window.GestureEvent — GestureEvent(type, eventInit); HTML Events; window.KeyboardEvent — KeyboardEvent(type, eventInit); window.MessageEvent — MessageEvent(data, origin, source, eventInit); window.PointerEvent — PointerEvent(type, eventInit); window.ProgressEvent; window.ImageBlob; Global Members; window.path; window.CountQueuingStrategy; Streams.

## window.HTMLAnchorElement — href : `string`

`href` stores the value used by the anchor.

### window.HTMLAnchorElement — pathname : `string`

**Read only**
For an anchor, this exposes the path segment from its `href`.

### window.HTMLAnchorElement — protocol : `string`

**Read only**
For an anchor, this exposes the protocol segment from its `href`.

### window.HTMLAnchorElement — dataset

Provides the element's complete set of custom `data-*` attributes.

**See**: [HTMLElement - dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

### window.HTMLAnchorElement — lang : `string`

Defines the base language applied to the element's text content and attribute values.

**See**: [HTMLElement - lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang)

### window.HTMLAnchorElement — dir : `string`

Specifies a known-value text direction for this element's content.

**See**: [HTMLElement - dir](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir)  
**Since**: v7.1

### window.HTMLAnchorElement — hidden : `boolean` \| `string`

Signals that the browser should skip rendering the element's contents. Unsupported value: "until-found".

**See**: [HTMLElement - hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden), [Spec - `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)

## HTML Elements

- [HTMLAnchorElement](uxp-global-members-2.md)
- [HTMLBodyElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-body-element.md)
- [HTMLButtonElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-button-element.md)
- [HTMLCanvasElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-canvas-element.md)
- [HTMLDialogElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-dialog-element.md)
- [HTMLElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-element.md)
- [HTMLHeadElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-head-element.md)
- [HTMLHtmlElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-html-element.md)
- [HTMLImageElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-image-element.md)
- [HTMLInputElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-input-element.md)
- [HTMLLabelElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-label-element.md)
- [HTMLLinkElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-link-element.md)
- [HTMLMenuElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-menu-element.md)
- [HTMLMenuItemElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-menu-item-element.md)
- [HTMLOptionElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-option-element.md)
- [HTMLProgressElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-progress-element.md)
- [HTMLScriptElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-script-element.md)
- [HTMLSelectElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-select-element.md)
- [HTMLSlotElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-slot-element.md)
- [HTMLStyleElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-style-element.md)
- [HTMLTemplateElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-template-element.md)
- [HTMLTextAreaElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-text-area-element.md)
- [HTMLVideoElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-video-element.md)
- [HTMLWebViewElement](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md)

## window.BaseUIEvent — BaseUIEvent(type, eventInit)

Constructs a BaseUIEvent instance.

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

Constructs a CloseEvent instance.

| Param | Type |
| --- | --- |
| code | `*` |
| reason | `*` |
| wasClean | `*` |

### window.CloseEvent — code ⇒ `number`

**Returns**: `number` - provides the close code supplied by the server.

### window.CloseEvent — reason ⇒ `number`

**Returns**: `number` - provides the server's string reason for closing the connection..

### window.CloseEvent — wasClean ⇒ `boolean`

**Returns**: `boolean` - indicates whether the connection closed cleanly.

## window.DragEvent — DragEvent(type, eventInit)

Builds a DragEvent instance.

| Param | Type |
| --- | --- |
| type | `*` |
| eventInit | `*` |

## window.ErrorEvent

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent)
- [https://html.spec.whatwg.org/#the-errorevent-interface](https://html.spec.whatwg.org/#the-errorevent-interface)

### ErrorEvent(typeArg, [eventInit])

Builds an ErrorEvent instance.

| Param | Type | Default |
| --- | --- | --- |
| typeArg | `*` |  |
| [eventInit] | `*` | `{}` |

## window.Event — Event(eventType, eventInit)

Builds an Event instance.

| Param | Type |
| --- | --- |
| eventType | `*` |
| eventInit | `*` |

## window.GestureEvent — GestureEvent(type, eventInit)

Builds a GestureEvent instance.

| Param | Type |
| --- | --- |
| type | `*` |
| eventInit | `*` |

## HTML Events

- [BaseUIEvent](uxp-global-members-2.md)
- [CloseEvent](uxp-global-members-2.md)
- [DragEvent](uxp-global-members-2.md)
- [ErrorEvent](uxp-global-members-2.md)
- [Event](uxp-global-members-2.md)
- [EventTarget](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-events/event-target.md)
- [GestureEvent](uxp-global-members-2.md)
- [KeyboardEvent](uxp-global-members-2.md)
- [MessageEvent](uxp-global-members-2.md)
- [PointerEvent](uxp-global-members-2.md)
- [ProgressEvent](uxp-global-members-2.md)

## window.KeyboardEvent — KeyboardEvent(type, eventInit)

Builds a KeyboardEvent instance.

| Param | Type |
| --- | --- |
| type | `*` |
| eventInit | `*` |

### window.KeyboardEvent — getModifierState(keyArgs)

**Returns**: `boolean`

| Param | Type |
| --- | --- |
| keyArgs | `string` |

## window.MessageEvent — MessageEvent(data, origin, source, eventInit)

Builds a MessageEvent instance.

| Param | Type |
| --- | --- |
| data | `*` |
| origin | `*` |
| source | `*` |
| eventInit | `*` |

### window.MessageEvent — data ⇒ `string`

**Returns**: `string` - server-sent data.

### window.MessageEvent — origin ⇒ `string`

**Returns**: `string` - message origin.

### window.MessageEvent — source ⇒ `string`

**Returns**: `string` - string value for messageEventSource.

## window.PointerEvent — PointerEvent(type, eventInit)

Builds a PointerEvent instance.

| Param | Type |
| --- | --- |
| type | `*` |
| eventInit | `*` |

## window.ProgressEvent

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent)
- [https://xhr.spec.whatwg.org/#progressevent](https://xhr.spec.whatwg.org/#progressevent)

### ProgressEvent(typeArg, [eventInit])

Builds a ProgressEvent instance.

| Param | Type | Default |
| --- | --- | --- |
| typeArg | `*` |  |
| [eventInit] | `*` | `{}` |

## window.ImageBlob

**Since**: UXP v7.0.0

### ImageBlob(arrayBuffer, options)

Use blobs when a URL is needed for the `src` value of an `HTMLImageElement`. Image data in standard compression formats such as PNG, JPG, JPEG ,etc. can be supplied to create one.
`ImageBlob` is a custom type that adds support for uncompressed image data.

e.g. create ImageBlob by providing an arrayBuffer with per-pixel RGB values plus options metadata that explains how to read that arraybuffer.

ImageBlob accepts input through these paths

- standard image compression formats: provide an ArrayBuffer for the `standard compression formats`; put the compression mimeType in options.type.
- uncompressed image: provide an ArrayBuffer holding raw per-pixel data plus interpretation options, with option.type set to "image/uncompressed".

[PhotoshopImageData](https://raw.githubusercontent.com/ps_reference/media/imaging/index.md#photoshopimagedata-1) works with ImageBlob,
a `PhotoshopImageData` object can be supplied directly as options.

**Note: HostApp enablement controls ImageBlob support. Currently supported by Photoshop.**

**Returns**: Instance of `ImageBlob` backed by the supplied data  
**Throws**:

- `TypeError` if arrayBuffer has any type other than ArrayBuffer
- `Error` if height or width is missing, or if either value is < 0
- `Error` if colorSpace is unsupported
- `Error` if componentSize is unsupported
- `Error` if ByteLength does not match the size required by the supplied options
- `Error` if PixelFormat is unsupported

| Param | Type | Description |
| --- | --- | --- |
| arrayBuffer | `ArrayBuffer` | image data stored in an ArrayBuffer |
| options | `Object` | metadata used to read the supplied ArrayBuffer. For standard compression, options.type is required; for uncompressed image data, every value is required except fields marked optional |
| options.type | `string` | mimeType for the imageData. Standard formats can use "image/png" or "image/jpg"; uncompressed input uses "image/uncompressed" |
| options.width | `number` | image-data width in pixels |
| options.height | `number` | image-data height in pixels |
| options.colorSpace | `string` | color space (or mode) for the image data; allowed values include "RGB" and "Grayscale" |
| options.hasAlpha | `boolean` | True when an alpha channel is present in the image |
| options.components | `number` | components per pixel count. RGB uses 3, RGBA uses 4, and other layouts follow the same pattern |
| options.componentSize | `number` | bits in each component; supported examples are 8 or 16 |
| options.pixelFormat | `string` | component order in pixel memory. Values can be "RGB", "RGBA", or "Gray" |
| options.colorProfile | `string` | `[Optional]` - color profile (or mode) for the image data; for example, "Adobe RGB (1998)" |

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

- [Crypto](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/crypto/index.md)
- [Data Storage](uxp-global-members.md)
- [Data Transfers](uxp-data-transfers.md)
- [HTML DOM](uxp-html-dom-2.md)
- [HTML Elements](uxp-global-members-2.md)
- [HTML Events](uxp-global-members-2.md)
- [ImageBlob](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/image-blob/index.md)
- [Path](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/path/index.md)
- [Streams](uxp-global-members-2.md)

## window.path

`path` contains helpers for handling filesystem-style directory and file path values.
Path arguments may be supplied as strings or as Entry objects.
When a path is passed as a string, local schemes like `plugin-data:` or `plugin-temp:` are not translated into native paths.
Because `path` is registered globally, scripts can call it without first declaring it.

**See**: [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)  
**Since**: UXP v6.4.0

### sep : `string`

Current platform's file separator value: '\\' or '/'.

### delimiter : `string`

Current platform's file delimiter value: ';' or ':'.

### posix : `Object`

Access point for POSIX-specific versions of the path methods.
On POSIX, this matches the parent object.

### win32 : `Object`

Access point for Windows-specific versions of the path methods.
On Windows, this matches the parent object.

### normalize(path)

Produces a normalized string path by collapsing `..` and `.` segments.
Runs of slashes are collapsed to one slash. A final slash stays intact, and Windows output uses backslashes.

**Returns**: `string` - normalized string path  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | value whose path text should be normalized |

### join(paths)

Combines every supplied argument and normalizes the path that results.

**Returns**: `string` - joined string path  
**Throws**:

- `Error` if any of the path segments is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | path segments to combine |

### resolve(paths)

The right-most parameter serves as \{to}; the remaining parameters are treated as the \{from} array.

Resolution begins with the leftmost \{from} value and produces an absolute path for \{to}.

When \{to} is not absolute already, \{from} values are prepended from right to left until an absolute path appears. If all \{from} paths are consumed without finding one, the current working directory is also included. The final path is normalized, and trailing slashes are stripped except when resolution lands at the filesystem root.

**Returns**: `string` - resolved string path  
**Throws**:

- `Error` if any of the arguments is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | path values or segments to resolve |

### isAbsolute(path)

Checks whether \{path} is absolute. Because an absolute path is location-stable, it resolves to the same place regardless of the current working directory.

For a zero-length \{path} string, the return value is `false`.

**Returns**: `boolean` - if the path is an absolute path or not  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to test |

### relative(from, to)

Computes the relative path from \{from} to \{to} using the current working directory.
When two absolute paths are available, this derives how to reach the second from the first. It is the inverse operation for path.resolve.

**Returns**: `string` - relative string path  
**Throws**:

- `Error` if either `from` or `to` is not a string

| Param | Type | Description |
| --- | --- | --- |
| from | `string` | starting path for the calculation |
| to | `string` | destination path for the calculation |

### dirname(path)

Gets the directory portion of a path, comparable to the Unix `dirname` utility.

**Returns**: `string` - the directory name of a path  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to evaluate |

### basename(path, [ext])

Gets the final segment of a path, comparable to the Unix basename command.
This is commonly used to pull a file name out of a complete path value.

**Returns**: `string` - the last portion of a path  
**Throws**:

- `Error` if `path` is not a string or if `ext` is given and is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to evaluate |
| [ext] | `string` | extension text to remove from the result |

### extname(path)

Gets the path extension, beginning at the last `.` and continuing through the end of the string in the path's final segment.
When the final segment has no `.` or starts with `.`, the result is a zero-length string.

**Returns**: `string` - the extension of the path  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to evaluate |

### parse(path)

Builds an object from a path string; this is the inverse operation for format().

**Returns**: `Object` - \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }  
**Throws**:

- `Error` if `path` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to evaluate |

### format(pathObject)

Builds a path string from an object; this is the inverse operation for parse().

**Returns**: `string` - a path string from an object

| Param | Type | Description |
| --- | --- | --- |
| pathObject | `Object` | \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` } object to format as a path |

## window.CountQueuingStrategy

**See**: [Web APIs - CountQueuingStrategy](https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy)

### CountQueuingStrategy(init)

Constructs a CountQueuingStrategy object using the supplied high water mark.

**Returns**: `CountQueuingStrategy`

| Param | Type | Description |
| --- | --- | --- |
| init | `Object` | Object containing the high water mark property. |
| init.highWaterMark | `number` | Total chunk count allowed in the internal queue before backpressure begins. |

### highWaterMark : `number`

Configured high water mark.

### size()

Chunk sizing result; this is always 1.

## Streams

- [CountQueuingStrategy](uxp-global-members-2.md)
- [ReadableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream.md)
- [ReadableStreamDefaultController](uxp-global-members-2.md)
- [ReadableStreamDefaultReader](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/readable-stream-default-reader.md)
- [TransformStream](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/transform-stream.md)
- [TransformStreamDefaultController](uxp-global-members-2.md)
- [WritableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/writable-stream.md)
- [WritableStreamDefaultController](uxp-global-members-2.md)
- [WritableStreamDefaultWriter](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/streams/writable-stream-default-writer.md)

## window.ReadableStreamDefaultController

**See**: [Web APIs - ReadableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController)

### desiredSize : `number`

Reports the target queue space for the controlled stream's internal queue.
When the queue holds too much data, the value may be negative.

### close()

Closes the readable stream managed by this controller.
Chunks that were already enqueued remain available to consumers.
After those chunks have been read, the stream moves to the closed state.

**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultController

### enqueue(chunk)

Queues the supplied chunk on the readable stream controlled by this controller.

**Throws**:

- `TypeError` thrown if the source is not a ReadableStreamDefaultController

| Param | Type |
| --- | --- |
| chunk | `*` |

### error(error)

Marks the controlled readable stream as errored, so later operations fail with the supplied error.

**Throws**:

- `TypeError` thrown if the source object is not a ReadableStreamDefaultController

| Param | Type |
| --- | --- |
| error | `*` |

## window.TransformStreamDefaultController

**See**: [Web APIs - TransformStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/TransformStreamDefaultController)

### desiredSize : `number`

Reports the target queue space for the readable side's internal queue.
When the queue holds too much data, the value may be negative.

### enqueue(chunk)

Places `chunk` into the transform stream's readable-side queue.

**Throws**:

- `TypeError` thrown if the stream is not readable.

| Param | Type | Description |
| --- | --- | --- |
| chunk | `*` | Data placed into the queue; each chunk represents one unit of data. |

### error(reason)

Moves both sides of the controlled transform stream into an error state, covering the readable side and the writable side, so later operations fail with the supplied error.
Queued chunks that have not yet been transformed are discarded.

| Param | Type |
| --- | --- |
| reason | `string` |

### terminate()

Completes the controlled transform stream's readable side and puts its writable side in error.
Use it when the transformer only has to consume part of the data written to the writable side.

## window.WritableStreamDefaultController

**See**: [Web APIs - WritableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController)

### signal : `AbortSignal`

Provides the AbortSignal used to abort an in-progress write or close operation after the stream is aborted.

### error(message)

Closes the controlled writable stream and causes later interactions to fail with the supplied error.

| Param | Type |
| --- | --- |
| message | `string` |

## See also

- [Unsupported](uxp-unsupported.md)
