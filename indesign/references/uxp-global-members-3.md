# Path, Streams

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Path; window.path; window.CountQueuingStrategy; Streams; window.ReadableStreamDefaultController; window.TransformStreamDefaultController; window.WritableStreamDefaultController.

## Path

For complete coverage, refer to [Path API](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/path/path.md).

## window.path

Utilities for file and directory path handling are exposed by the `path` module.
Path parameters can be strings or Entry objects.
String paths that use local file schemes, including `plugin-data:` or `plugin-temp:`, are not resolved into native paths.
Because `path` is registered on the global scope, it can be called without declaring it first.

**See**: [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)  
**Since**: UXP v6.4.0

### sep : `string`

Platform-specific file separator, either '\\' or '/'.

### delimiter : `string`

Delimiter character used by the current platform: ';' or ':'.

### posix : `Object`

Exposes the POSIX-specific versions of the path methods.
On posix, this is the parent object itself.

### win32 : `Object`

Exposes the Windows-specific versions of the path methods.
On Windows, this is the parent object itself.

### normalize(path)

Produces a normalized path string by collapsing '..' and '.' segments.
Runs of several slashes become one slash; a final slash remains when present. Windows output uses backslashes.

**Returns**: `string` - normalized path string  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to normalize |

### join(paths)

Combines every supplied argument, then normalizes the path that results.

**Returns**: `string` - joined path string  
**Throws**:

- `Error` when a supplied path segment is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | path values to combine |

### resolve(paths)

The parameter on the far right is treated as \{to}; the remaining parameters form the \{from} array.

Resolution starts with the leftmost \{from} value and resolves \{to} into an absolute path.

When \{to} is not already absolute, \{from} values are added from right to left until an absolute path appears. If all \{from} entries are used and none yields an absolute path, the current working directory also participates. The final path is normalized, and terminal slashes are stripped except when the result is the root directory.

**Returns**: `string` - resolved path string  
**Throws**:

- `Error` when any argument is not a string

| Param | Type | Description |
| --- | --- | --- |
| paths | `Array<(string\|Entry)>` | ordered path values or segments |

### isAbsolute(path)

Checks whether \{path} is absolute. An absolute path resolves to one fixed location no matter what working directory is active.

When the supplied \{path} is a zero-length string, the result is `false`.

**Returns**: `boolean` - whether the path is absolute  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to check |

### relative(from, to)

Computes the relative path from \{from} to \{to} using the current working directory.
When two absolute paths are available, this derives the route from the first path to the second; it is the inverse operation of path.resolve.

**Returns**: `string` - relative path string  
**Throws**:

- `Error` when `from` or `to` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| from | `string` | starting base path |
| to | `string` | target path to reach |

### dirname(path)

Gets the directory-name component from a path. Comparable to Unix dirname.

**Returns**: `string` - directory-name component of the path  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to inspect |

### basename(path, [ext])

Gets the final component of a path, comparable to Unix basename.
This is commonly used to pull a file name out of a fully qualified path.

**Returns**: `string` - final component of the path  
**Throws**:

- `Error` when `path` is not a string, or when supplied `ext` is not a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to inspect |
| [ext] | `string` | extension value to strip from the result |

### extname(path)

Gets the path extension, beginning at the final '.' through the string end within the path's last component.
If the last component contains no '.', or begins with '.', the method yields an empty string.

**Returns**: `string` - path extension  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to inspect |

### parse(path)

Builds an object from a path string.
Use format() for the reverse conversion.

Result details:

**Returns**: `Object` - \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }  
**Throws**:

- `Error` when `path` is not supplied as a string

| Param | Type | Description |
| --- | --- | --- |
| path | `string` \| `Entry` | path value to inspect |

### format(pathObject)

Uses pathObject to build a path string.
Use parse() for the reverse conversion.

Result details:

**Returns**: `string` - object-derived path string

| Param | Type | Description |
| --- | --- | --- |
| pathObject | `Object` | \{ dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` } path value to format |

## window.CountQueuingStrategy

**See**: [Web APIs - CountQueuingStrategy](https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy)

### CountQueuingStrategy(init)

Creates a CountQueuingStrategy object using the specified high water mark.

**Returns**: `CountQueuingStrategy`

| Param | Type | Description |
| --- | --- | --- |
| init | `Object` | Object containing the high water mark property. |
| init.highWaterMark | `number` | Maximum chunks allowed in the internal queue before backpressure starts. |

### highWaterMark : `number`

High water mark value.

### size()

Chunk size value; it is always 1.

## Streams

- [CountQueuingStrategy](uxp-global-members-3.md)
- [ReadableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/streams/readable-stream.md)
- [ReadableStreamDefaultController](uxp-global-members-3.md)
- [ReadableStreamDefaultReader](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/streams/readable-stream-default-reader.md)
- [TransformStream](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/streams/transform-stream.md)
- [TransformStreamDefaultController](uxp-global-members-3.md)
- [WritableStream](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/streams/writable-stream.md)
- [WritableStreamDefaultController](uxp-global-members-3.md)
- [WritableStreamDefaultWriter](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/global-members/streams/writable-stream-default-writer.md)

## window.ReadableStreamDefaultController

**See**: [Web APIs - ReadableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController)

### desiredSize : `number`

Reports the target size for filling the controlled stream's internal queue.
The value may be negative when the queue has exceeded capacity.

### close()

Shuts the controlled readable stream.
Already-enqueued chunks remain available to consumers; after those chunks are exhausted, the stream enters the closed state.

**Throws**:

- `TypeError` is thrown when the source is not a ReadableStreamDefaultController

### enqueue(chunk)

Adds the supplied chunk to the controlled readable stream.

**Throws**:

- `TypeError` is thrown when the source is not a ReadableStreamDefaultController

| Param | Type |
| --- | --- |
| chunk | `*` |

### error(error)

Puts the controlled readable stream into an error state, so later operations fail with the supplied error.

**Throws**:

- `TypeError` is thrown when the source object is not a ReadableStreamDefaultController

| Param | Type |
| --- | --- |
| error | `*` |

## window.TransformStreamDefaultController

**See**: [Web APIs - TransformStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/TransformStreamDefaultController)

### desiredSize : `number`

Reports the target size needed for the readable side's internal queue.
When the queue is too full, the value may be negative.

### enqueue(chunk)

Places the supplied chunk chunk onto the readable side of the controlled transform stream.

**Throws**:

- `TypeError` is thrown when the stream is not readable.

| Param | Type | Description |
| --- | --- | --- |
| chunk | `*` | Data item added to the queue; each chunk represents one piece of data. |

### error(reason)

Marks both the readable side and writable side of the controlled transform stream as errored, causing later interactions to fail with the supplied error.
Chunks waiting for transformation are discarded.

| Param | Type |
| --- | --- |
| reason | `string` |

### terminate()

Shuts the readable side while putting the writable side of the controlled transform stream into an error state.
Use this when a transformer only has to read part of the data written to the writable side.

## window.WritableStreamDefaultController

**See**: [Web APIs - WritableStreamDefaultController](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController)

### signal : `AbortSignal`

Provides an AbortSignal for canceling a pending write or close operation after the stream is aborted.

### error(message)

Closes the controlled writable stream and makes future interactions fail with the supplied error.

| Param | Type |
| --- | --- |
| message | `string` |
